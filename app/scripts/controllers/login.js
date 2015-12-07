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
    
    $rootScope.headerLeft = false;
     $rootScope.header_text = false
     $rootScope.header = false;
     $rootScope.dataHeader = {
         rightHeader:'',
         pathRight:'',
         leftHeader:'',
         pathLeft:''
     };
    
    
                if(SessionService.get('isLogged')){
               $location.path('/listLeague'); 
            }
    
    var data_login = {};
    
    if(SessionService.get('isLogged')){
               $location.path('/listLeague'); 
            }
    
    $scope.submitForm = function(){
        
        data_login.email    = $scope.email;
        data_login.password = $scope.password;
        
        
        
        if(data_login.email == "dan@scorebooklive.com" && data_login.password == "dan123"){
            SessionService.set('isLogged', true, true);
            
            $location.path('/listLeague');
        }
        
        if(data_login.email == "jeffb@scorebooklive.com" && data_login.password == "jeffb123"){
            SessionService.set('isLogged', true, true);
            
            $location.path('/listLeague');
        }
        
        if(data_login.email == "porter77@gmail.com" && data_login.password == "porter77123"){
            SessionService.set('isLogged', true, true);
            
            $location.path('/listLeague');
        }
        
        if(data_login.email == "test@test.com" && data_login.password == "password"){
            SessionService.set('isLogged', true, true);
            
            $location.path('/listLeague');
        }
        
        console.log(data_login);
        
    };
  });
