'use strict';

/**
 * @ngdoc function
 * @name adminAppApp.controller:ListleagueCtrl
 * @description
 * # ListleagueCtrl
 * Controller of the adminAppApp
 */
angular.module('adminAppApp')
  .controller('ListleagueCtrl', function ($scope,SessionService, $location, $rootScope, $http) {
   
    if(!SessionService.get('isLogged')){
        $location.path('/'); 
    }
    
    
     $rootScope.dataHeader = {
         rightHeader:"Create New League",
         pathRight:'listLeague',
         leftHeader:"Home",
         pathLeft:''
     };
    
     $rootScope.header = true;
    
    var dataJSON = [
            {
                "league_name": "league name 2",
                "number": "9",
                "league_coor": "Elkin Bernal",
                "game_played": "2"
            },
            {
                "league_name": "league name 3",
                "number": "9",
                "league_coor": "Elkin Bernal",
                "game_played": "2"
            },
            {
                "league_name": "league name 4",
                "number": "9",
                "league_coor": "Elkin Bernal",
                "game_played": "2"
            },
            {
                "league_name": "league name 5",
                "number": "9",
                "league_coor": "Elkin Bernal",
                "game_played": "2"
            },
            {
                "league_name": "league name 6",
                "number": "9",
                "league_coor": "Elkin Bernal",
                "game_played": "2"
            },
            {
                "league_name": "league name 7",
                "number": "9",
                "league_coor": "Elkin Bernal",
                "game_played": "2"
            },
            {
                "league_name": "league name 8",
                "number": "9",
                "league_coor": "Elkin Bernal",
                "game_played": "2"
            },
            {
                "league_name": "league name 9",
                "number": "9",
                "league_coor": "Elkin Bernal",
                "game_played": "2"
            }
    ];
    $scope.listLeagues = dataJSON;
    
    console.log($scope.listLeagues);
    
    
    $rootScope.logOut = function(){
        alert('hola');
         SessionService.unset('isLogged');
        $location.path('/');
    };
    
    
  });
