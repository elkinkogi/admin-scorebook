'use strict';

/**
 * @ngdoc overview
 * @name adminAppApp
 * @description
 * # adminAppApp
 *
 * Main module of the application.
 */
angular
  .module('adminAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'picardy.fontawesome'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/listLeague', {
        templateUrl: 'views/listleague.html',
        controller: 'ListleagueCtrl',
        controllerAs: 'listLeague'
      })
      .when('/createLeague', {
        templateUrl: 'views/createleague.html',
        controller: 'CreateleagueCtrl',
        controllerAs: 'createLeague'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
    .run(function($rootScope,SessionService,$location, $http){
    
             $rootScope.header = false;
            

});
