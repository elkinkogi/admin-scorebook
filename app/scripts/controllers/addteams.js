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
        
        console.log($scope.searchText);
        console.log($scope.selected_team);
        var searchText = $scope.searchText;
        var select_team = $scope.selected_team;
        

        
        
    };
    
    
    
    $scope.listTeams = dataJSON;
    
    
  });
