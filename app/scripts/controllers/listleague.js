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
    
    SessionService.unset('league');
    
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
    
    $scope.deleteLeague = function(id_league){
        
        console.log(id_league);
        
        bootbox.addLocale
        
        bootbox.confirm({
            size: "small",
            message: "Are you sure you want to \n delete League name 2?",
            callback:function(result){
                
                if(result){
                    
                    $http.delete(
                        
                        $rootScope.baseurl + "/1.6/leagues/" + id_league
                        
                    ).then(function(res){
                        console.log(res);
                        window.location.reload();
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
    
    
    
    
    $scope.create = function(id_league){
                $http.get(

                    $rootScope.baseurl + "/1.6/leagues/" + id_league

                ).then(function(res){
                    SessionService.set('league',res.data);
                    $location.path('/createLeague');

                },function(res){

                    console.log(res);

                });

        };
    
    
    
    
    
    
  });
