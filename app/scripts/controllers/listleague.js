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
    
    $rootScope.logOut = function(){
        $rootScope.header = false;
         SessionService.unset('isLogged');
        $location.path('/');
    };
    
     $rootScope.header = true;
     $rootScope.headerLeft = false;
     $rootScope.header_text = true;
     $rootScope.dataHeader = {
         rightHeader:"Create New League",
         pathRight:'createLeague',
         leftHeader:'',
         pathLeft:''
     };
    
    $http.get(
        $rootScope.baseurl + "/1.6/leagues"
    ).then(function successCallback(res){
            $scope.listLeagues = res.data.response_data;
            console.log(res.data.response_data);
    },function errorCallback(res){
        console.log(res);
    });
    
    
    $('.edit-league').click(function(evt){
        
        $(this)
        
    });
    
    
  });
