'use strict';

/**
 * @ngdoc function
 * @name adminAppApp.controller:CreateleagueCtrl
 * @description
 * # CreateleagueCtrl
 * Controller of the adminAppApp
 */
angular.module('adminAppApp')
  .controller('CreateleagueCtrl', function ($scope,SessionService, $location, $rootScope, $http) {
    
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
    
    
     $rootScope.headerLeft = true;
     $rootScope.header_text = false
     $rootScope.header = true;
     $rootScope.dataHeader = {
         rightHeader:'',
         pathRight:'',
         leftHeader:'Create New League',
         pathLeft:''
     };
    $scope.stateList = state; 
    console.log($scope.stateList);
    
    $('#choose-1')
        .colorpicker()
        .on('changeColor.colorpicker',function(event){
        
        $('#box-color-1').html(event.color.toHex());
        $('#box-color-1').css('background',event.color.toHex());
        
    });
    
    $('#choose-2')
        .colorpicker()
        .on('changeColor.colorpicker',function(event){
        $('#box-color-2').html(event.color.toHex());
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
