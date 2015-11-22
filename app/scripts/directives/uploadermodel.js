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
