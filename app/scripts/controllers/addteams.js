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
        
        var id_league = SessionService.get('league').id;

        $http.get(
            $rootScope.baseurl + "/1.6/leagues/" + id_league
        ).then(function(res){
            console.log(res);
            
            $scope.listTeams = res.data.teams;
            
        })
        

        
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
      
      $http.get( $rootScope.baseurl + '/1.6/teams/search?team_type=highSchool&name=' + keyword )
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
                
                $scope.team_id = res.data.response_data.team_id;
            }else{
                
                var bandera = false;
                
                for(var i = 0; i < $scope.listTeams.length; i++){
                    if($scope.listTeams[i].name == res.data.response_data.name){
                        bandera = true;
                    }   
                }
                
                
                if(!bandera){
                    console.log(res.data.response_data);
                    $scope.listTeams.push(res.data.response_data);
                }
                                
                console.log($scope.listTeams);

            }
            
        }, function(res){
            console.log(res);
        });
    };
    
    
    $scope.add_user_team = function(){
        
        var obj_team = {},
            obj_team_push = {};
        obj_team.username = $scope.name_user_save;
        obj_team.email = $scope.email_team_save;
        obj_team.password = $scope.password_team_save;
        
        var team_id = $scope.team_id;
        
        $http.put(
            $rootScope.baseurl + "/1.6/teams/" + team_id + "/user",
            obj_team,
            {
                headers: {
                           'Content-Type': "application/json"
                         }
            }
        ).then(function(res){
            console.log(res);
            obj_team_push.team_id = res.data.response_data.team_id;
            obj_team_push.user_id = res.data.response_data.user_id;
            obj_team_push.name = res.data.response_data.name;
            obj_team_push.username = res.data.response_data.username;
            obj_team_push.email = res.data.response_data.email;
            
                    
            $scope.listTeams.push(obj_team_push);
        },function(res){
            console.log(res);
        });
        
        console.log(obj_team);

        
    
    };
    

    
    
  });
