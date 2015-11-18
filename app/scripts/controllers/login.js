'use strict';

/**
 * @ngdoc function
 * @name adminAppApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the adminAppApp
 */
angular.module('adminAppApp')
  .controller('LoginCtrl', function ($scope, $rootScope, SessionService ,$http, $location) {
    
    var data_login = {};
    
    if(SessionService.get('isLogged')){
               $location.path('/listLeague'); 
            }
    
    $scope.submitForm = function(){
        
        data_login.email    = $scope.email;
        data_login.password = $scope.password;
        
        
        if(data_login.email == "elkin-21@hotmail.com" && data_login.password == "password"){
            SessionService.set('isLogged', true, true);
            
            $location.path('/listLeague');
        }
        
        console.log(data_login);
        
    };
  });
