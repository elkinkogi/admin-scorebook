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

    
    if(!SessionService.get('isLogged')){
        $location.path('/'); 
    } 
    
    
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
    var id_league;
    
    if(!SessionService.get('league')){
        $location.path('/'); 
    }else{
        id_league = SessionService.get('league').id;
    }
    
    if(SessionService.get('league')){

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
    
    
    $scope.cancel_addteam = function(){
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
        var education = $scope.education;
        var level = JSON.parse($scope.selected_team)[0];
        var gender = JSON.parse($scope.selected_team)[1];
        
        $http.get(
            $rootScope.baseurl + "/1.6/leagues/searchTeam?teamType=" + education + "&name=" + searchText + "&level=" + level + "&gender="+ gender + ""
        ).then(function(res){
            console.log(res);
            
            if(res.data.response_data.user_id == null){
                
                $('#myModal').modal('show');
                
                $scope.team_id = res.data.response_data.team_id;
            }else{
                
                var bandera = false;
                
                for(var i = 0; i < $scope.listTeams.length; i++){
                    if($scope.listTeams[i].team_id == res.data.response_data.team_id){
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
        
        //console.log($scope.team_id);
        
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
            if(res.data.response_code === 2){
                alert(res.data.response_text);
            }else if(res.data.response_code === 3){
                alert(res.data.response_text);
            }else{
                
                obj_team_push.team_id = res.data.response_data.team_id;
                obj_team_push.user_id = res.data.response_data.user_id;
                obj_team_push.name = res.data.response_data.name;
                obj_team_push.username = res.data.response_data.username;
                obj_team_push.email = res.data.response_data.email;


                $scope.listTeams.push(obj_team_push);
                $('#myModal').modal('hide');
                
                
            }
            
            
            
            
        },function(res){
            console.log(res);
        });
        
        console.log(obj_team);

        
    
    };            
    
    $scope.team = {};
    
    
    $scope.team.teamType = "highSchool";
    
    $scope.add_team = function(){
        
        var objTeam = $scope.team;

        objTeam.level  = JSON.parse($scope.level_gender)[0];
        objTeam.gender = JSON.parse($scope.level_gender)[1];

        console.log(objTeam);
        
            $http.post(
                $rootScope.baseurl + "/1.6/leagues/team",
                objTeam,
                {
                    'Content-type' : 'application/json'
                }
            ).then(function(res){
                    
                console.log(res);
                
                if(res.data.response_code === 1){    
                    console.log(res);
                    $scope.listTeams.push(res.data.response_data);
                }else{
                    alert(res.data.response_code + ": " + res.data.response_text);
                }

                },function(res){
                    console.log(res);
            });
        
    };
    
    $scope.removeteam2 = function(key){
        
        $scope.listTeams.splice(key,1);

        console.log($scope.listTeams);
        
        
    }
    
    
    $scope.add_teams_to_league = function(){
        //console.log($scope.listTeams.length);
        
                
            if(typeof $scope.listTeams === "undefined"){

                $scope.listTeams = []; 

            }
        
            var array_id_teams = [];
            
            for(var j = 0; j < $scope.listTeams.length; j++){
                array_id_teams.push($scope.listTeams[j].team_id);
            }
            
            $http.put(

            $rootScope.baseurl + "/1.6/leagues/" + id_league + "/teams",
            array_id_teams,
            {
                headers:{
                    "Content-type" : "application/json"
                }
            }

            ).then(function(res){
                console.log(res);
                $location.path('/listLeague');
            }, function(res){
                console.log(res);
            });


        
        
    };
    

    
    
  });
