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
    
    if(SessionService.get('league')){
        
        $scope.listTeams = SessionService.get('league').teams;
        console.log(SessionService.get('league').teams);
        console.log(SessionService.get('league'));
        
    }else{
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
    
    
    $scope.cancel = function(){
      $location.path('/listLeague');  
    };
    
    
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
                
                $('#myModal').modal('show');
                
                console.log(res.data.response_data.team_id);
                
                $scope.team_id = res.data.response_data.team_id;

                
            }
            
        }, function(res){
            console.log(res);
        });
    };
    
    
    $scope.add_user_team = function(){
        
        var obj_team = {};
        
        obj_team.name = $scope.team_name_save;
        obj_team.username = $scope.user_id_save;
        obj_team.teamType = $scope.education_save;
        obj_team.level = JSON.parse($scope.selected_team_save)[0];
        obj_team.gender = JSON.parse($scope.selected_team_save)[1];
        obj_team.password = $scope.password_team_save;
        obj_team.email = $scope.email_team_save;
        
        console.log(obj_team);
    
    };
    

    
    
  });
