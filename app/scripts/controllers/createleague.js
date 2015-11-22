'use strict';

/**
 * @ngdoc function
 * @name adminAppApp.controller:CreateleagueCtrl
 * @description
 * # CreateleagueCtrl
 * Controller of the adminAppApp
 */
angular.module('adminAppApp')
  .controller('CreateleagueCtrl', function ($scope,SessionService, $location, $rootScope, $http, Upload, uploadImg) {
    
     $rootScope.headerLeft = true;
     $rootScope.header_text = false
     $rootScope.header = true;
     $rootScope.dataHeader = {
         rightHeader:'',
         pathRight:'',
         leftHeader:'Create New League',
         pathLeft:''
     };
    var dataLeague = {};
    
    
    
    var state = [
        {
            "name": "Alabama", 
            "abrr": "AL"
        },
        {
            "name": "Alaska",
            "abrr": "AK"
        },
        {
            "name": "Arizona", 
            "abrr": "AZ"
        },
        {
            "name": "Arkansas",
            "abrr": "AR"
        },
        {
            "name": "California",
            "abrr": "CA"
        },
        {
            "name": "Colorado",
            "abrr": "CO"
        },
        {
            "name": "Connecticut",
            "abrr": "CT"
        },
        {
            "name": "Delaware",
            "abrr": "DE"
        },
        {
            "name": "Florida",
            "abrr": "FL"
        },
        {
            "name": "Georgia",
            "abrr": "GA"
        },
        {
            "name": "Hawaii",
            "abrr": "HI"
        },
        {
            "name": "Idaho",
            "abrr": "ID"
        },
        {
            "name": "Illinois",
            "abrr": "IL"
        },
        {
            "name": "Indiana",
            "abrr": "IN"
        },
        {
            "name": "Iowa",
            "abrr": "IA"
        },
        {
            "name": "Kansas",
            "abrr": "KS"
        },
        {
            "name": "Kentucky",
            "abrr": "KY"
        },
        {
            "name": "Louisiana",
            "abrr": "LA"
        },
        {
            "name": "Maine",
            "abrr": "ME"
        },
        {
            "name": "Maryland",
            "abrr": "MD"
        },
        {
            "name": "Massachusetts",
            "abrr": "MA"
        },
        {
            "name": "Michigan",
            "abrr": "MI"
        },
        {
            "name": "Minnesota",
            "abrr": "MN"
        },
        {
            "name": "Mississippi",
            "abrr": "MS"
        },
        {
            "name": "Missouri",
            "abrr": "MO"
        },
        {
            "name": "Montana",
            "abrr": "MT"
        },
        {
            "name": "Nebraska",
            "abrr": "NE"
        },
        {
            "name": "Nevada",
            "abrr": "NV"
        },
        {
            "name": "New Hampshire",
            "abrr": "NH"
        },
        {
            "name": "New Jersey",
            "abrr": "NJ"
        },
        {
            "name": "New Mexico",
            "abrr": "NM"
        },
        {
            "name": "New York",
            "abrr": "NY"
        },
        {
            "name": "North Carolina",
            "abrr": "NC"
        },
        {
            "name": "North Dakota",
            "abrr": "ND"
        },
        {
            "name": "Ohio",
            "abrr": "OH"
        },
        {
            "name": "Oklahoma",
            "abrr": "OK"
        },
        {
            "name": "Oregon",
            "abrr": "OR"
        },
        {
            "name": "Pennsylvania",
            "abrr": "PA"
        },
        {
            "name": "Rhode Island",
            "abrr": "RI"
        },
        {
            "name": "South Carolina",
            "abrr": "SC"
        },
        {
            "name": "South Dakota",
            "abrr": "SD"
        },
        {
            "name": "Tennessee",
            "abrr": "TN"
        },
        {
            "name": "Texas",
            "abrr": "TX"
        },
        {
            "name": "Utah",
            "abrr": "UT"
        },
        {
            "name": "Vermont",
            "abrr": "VT"
        },
        {
            "name": "Virginia",
            "abrr": "VA"
        },
        {
            "name": "Washington",
            "abrr": "WA"
        },
        {
            "name": "West Virginia",
            "abrr": "WV"
        },
        {
            "name": "Wisconsin",
            "abrr": "WI"
        },
        {
            "name": "Wyoming",
            "abrr": "WY"
        }
    ];
    
    
    if(SessionService.get('isLogged')){
        $http({
            method: "GET",
            url: $rootScope.baseurl + "/1.6/leagues/types"
        }).success(function(data){
            console.log(data.response_data);
            $scope.type_league = data.response_data;
        });
    }
    
    var uploadLeague = function(arg){
        
        console.log(arg);
        
            dataLeague.name = $scope.name;
            dataLeague.city = $scope.city;
            dataLeague.state = $scope.state;
            dataLeague.state_asociation = $scope.state_ass;
            dataLeague.section = $scope.section_dist;
            dataLeague.type_id = $scope.type;
            dataLeague.logo = arg.logo;
            dataLeague.photo = arg.photo;
            dataLeague.color_1 = $("#box-color-1").val();
            dataLeague.color_2 = $("#box-color-2").val();
            dataLeague.founded_date = $('#datetimepicker4').val();
            dataLeague.coordinator_name = $scope.coordinator;
            dataLeague.email = $scope.email;
            dataLeague.title = $scope.title;
            dataLeague.phone_number = $scope.phone;
            dataLeague.school = $scope.school;
            dataLeague.twiter_account = $scope.twitter;
            dataLeague.office_address = $scope.address;
        
            
            console.log(dataLeague);
            $http({
             method: 'POST',
             url: $rootScope.baseurl + "/1.6/leagues",
             headers: {
               'Content-Type': "application/json"
             },
             data: dataLeague
        }).then(function successCallback(res){
                console.log(res);
            },function errorCallback(res){
                console.log(res); 
            });
    };
    
    
    $scope.create = function(){
        
        var objImgs = {};
        
            var logo_image = $scope.file_logo;
            var photo_image = $scope.file_photo;
        
            uploadImg.create(logo_image, photo_image).then(function(res){
                
                console.log(res);
                
                objImgs.logo = res.data.response_data.logo;
                objImgs.photo = res.data.response_data.photo;
                
                uploadLeague(objImgs);
            });
        
    };
    

    $scope.stateList = state; 
    
    $('#choose-1')
        .colorpicker()
        .on('changeColor.colorpicker',function(event){
        
        $('#box-color-1').val(event.color.toHex());
        $('#box-color-1').css('background',event.color.toHex());
        
    });
    
    $('#choose-2')
        .colorpicker()
        .on('changeColor.colorpicker',function(event){
        $('#box-color-2').val(event.color.toHex());
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
