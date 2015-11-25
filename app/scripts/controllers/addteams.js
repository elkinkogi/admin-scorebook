'use strict';

/**
 * @ngdoc function
 * @name adminAppApp.controller:AddteamsCtrl
 * @description
 * # AddteamsCtrl
 * Controller of the adminAppApp
 */
angular.module('adminAppApp')
  .controller('AddteamsCtrl', function ($scope, $rootScope, $location, $http, $q, $timeout, SessionService) {

     $rootScope.headerLeft = true;
     $rootScope.header_text = false
     $rootScope.header = true;
     $rootScope.dataHeader = {
         rightHeader:'',
         pathRight:'',
         leftHeader:'Add Teams To League name 1',
         pathLeft:''
     };
    
    $scope.education = "highSchool";
    
        if(!SessionService.get('isLogged')){
        $location.path('/'); 
    }
    
        var dataJSON = [
            {
                "team_name": "Team name 1",
                "user_id": "user1234",
                "email": "user@mail.com"
            },
            {
                "team_name": "Team name 2",
                "user_id": "user1235",
                "email": "user@mail.com"
            },
            {
                "team_name": "Team name 3",
                "user_id": "user1236",
                "email": "user@mail.com"
            },
            {
                "team_name": "Team name 4",
                "user_id": "user1237",
                "email": "user@mail.com"
            }
            
    ];
    
    
    $scope.getTeams = function(keyword) {
      var deferred = $q.defer();
      
      var objResul = {};
      
      $http.get( 'http://52.8.61.197/api/1.6/teams/search?team_type=highSchool&name='+keyword )
            .then(
                    function(results) { 
                        
                        objResul = results.data;
                      
                        console.log(objResul); 
                      
                      $timeout(function(){deferred.resolve(objResul)});
                        
                    });
        return deferred.promise;

    };
    
    
    $scope.searchTeam = function(){
        
        var searchText = $scope.searchText;
        var level = JSON.parse($scope.selected_team)[0];
        var gender = JSON.parse($scope.selected_team)[1];
        
        $http.get(
            $rootScope.baseurl + "/1.6/leagues/searchTeam?teamType=highSchool&name=" + searchText + "&level=" + level + "&gender="+ gender + ""
        ).then(function(res){
            console.log(res);
            
            if(res.data.response_data.user_id == null){
                
                add_user_team(119081);
                
            }
            
        }, function(res){
            console.log(res);
        });
    };
    
    
    var add_user_team = function(arg){
    
        bootbox.confirm({
            size: "small",
            message: "Please complete the following information in order to add the team",
            callback:function(result){
                
                iElement.hide();
                if(result){
                    
                    $http.delete(
                        
                        $rootScope.baseurl + "/1.6/leagues/" + id_league
                        
                    ).then(function(res){
                        console.log(res);
                    },function(res){
                        console.log(res); 
                    });
                    
                }
                
            },
            buttons:{
                cancel:{
                    label:'Cancel'
                },
                confirm:{
                    label:'Delete'
                }
            }
        });
    
    };
    
    
    
    $scope.listTeams = dataJSON;
    
    
  });
