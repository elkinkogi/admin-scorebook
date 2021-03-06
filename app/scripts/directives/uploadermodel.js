'use strict';

/**
 * @ngdoc directive
 * @name adminAppApp.directive:uploaderModel
 * @description
 * # uploaderModel
 */
angular.module('adminAppApp')
  .directive('uploaderModel', function ($parse) {
    return {
      restrict: 'A',
      link: function (scope, iElement, iAttrs) {
          iElement.on("change",function(e)
          {
              console.log(e);
              $parse(iAttrs.uploaderModel).assign(scope, iElement[0].files[0]);
          });
        }
    };
  });

angular.module('adminAppApp')
  .directive('removeLeague', function ($http,$rootScope) {
    return {
      link: function (scope, iElement, iAttrs) {
          
          scope.remove = function(id_league, name_league){
              
        bootbox.confirm({
            message: "Are you sure you want to delete League " + name_league + "?",
            callback:function(result){
                if(result){
                    iElement.hide();
                    $http.delete(
                        
                        $rootScope.baseurl + "/1.6/leagues/" + id_league
                        
                    ).then(function(res){
                        console.log(res);
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
              
              
              
          }
          
        }
    };
  });

angular.module('adminAppApp')
  .directive('removeTeam', function ($http,$rootScope) {
    return {
      link: function (scope, iElement, iAttrs) {
          
              scope.removeteam = function(){
                  
                iElement.hide();

              }
          }
    };
  })

