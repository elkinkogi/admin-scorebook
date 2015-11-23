'use strict';

/**
 * @ngdoc function
 * @name adminAppApp.controller:UpdateleagueCtrl
 * @description
 * # UpdateleagueCtrl
 * Controller of the adminAppApp
 */
angular.module('adminAppApp')
  .controller('UpdateleagueCtrl', function ($rootScope, $scope, $http, $location, SessionService) {

    
         $rootScope.headerLeft = true;
     $rootScope.header_text = true;
     $rootScope.header = true;
     $rootScope.dataHeader = {
         rightHeader:'',
         pathRight:'',
         leftHeader:'Create New League',
         pathLeft:''
     };
    
    $scope.edit_league = function(id_league){
        
        $http.get(
            
            $rootScope.baseurl + "/1.6/leagues/" + id_league
            
        ).then(function(res){
            SessionService.set('league',res.data);
            $location.path('/updateLeague');
            
        },function(res){
            
            console.log(res);
            
        });
        
        
    };
    
        var leagueUpdate = SessionService.get('league');
        
        $scope.name = leagueUpdate.name;
        $scope.city = leagueUpdate.city;
        $scope.state = leagueUpdate.state;
        $scope.state_ass = leagueUpdate.state_association;
        $scope.section_dist = leagueUpdate.section;
        $scope.type = leagueUpdate.type_id;
        $scope.logo_url = leagueUpdate.logo_url;
        $scope.photo_url = leagueUpdate.photo_url;
        $('#box-color-1').css("background", leagueUpdate.color_1);
        $('#box-color-2').css("background", leagueUpdate.color_2);
        $('#box-color-1-span').html(leagueUpdate.color_1);
        $('#box-color-2-span').html(leagueUpdate.color_2);
        $scope.founded_date = leagueUpdate.founded_date;
        $scope.coordinator = leagueUpdate.coordinator_name;
        $scope.email = leagueUpdate.email;
        $scope.title = leagueUpdate.title;
        $scope.phone = leagueUpdate.phone_number;
        $scope.school = leagueUpdate.school;
        $scope.twitter = leagueUpdate.twitter_account;
        $scope.address = leagueUpdate.office_address;
        
        
    
    
    $scope.cancel = function(){
        
        console.log('canceled');
        $scope.name = 'Elkin';
        
    };
    
    $('#choose-1')
        .colorpicker()
        .on('changeColor.colorpicker',function(event){
        $('#box-color-1-span').html(event.color.toHex());
        $('#box-color-1').css('background',event.color.toHex());
        
    });
    
    $('#choose-2')
        .colorpicker()
        .on('changeColor.colorpicker',function(event){
        $('#box-color-2-span').html(event.color.toHex());
        $('#box-color-2').css('background',event.color.toHex());
        
    });
    
    $(":file").filestyle(
        {
            buttonName: "btn-primary",
            icon: false,
            buttonText:'Browse'
        }
    );
    
    
  });
