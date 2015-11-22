'use strict';

/**
 * @ngdoc service
 * @name adminAppApp.uploadImg
 * @description
 * # uploadImg
 * Service in the adminAppApp.
 */
angular.module('adminAppApp')
  .service('uploadImg', function ($http, $rootScope, $q) {
    
        this.create = function(logo_image, photo_image)
        {
            var deferred = $q.defer();
            var formData = new FormData();
            formData.append("logo_image", logo_image);
            formData.append("photo_image", photo_image);
            
            return $http.post($rootScope.baseurl + '/1.6/leagues/uploadPictures',formData,{
                headers:{
                    'Content-type': undefined
                },
                transformRequest: angular.identity
            }
                
            ).success(function(res){
                console.log(res);
                deferred.resolve(res);
            }).error(function(res, code){
                console.log(res);
                console.log(code);
                deferred.reject(res);
            })
            return deferred.promise;
            
        }
    
  });
