'use strict';

/**
 * @ngdoc service
 * @name adminAppApp.sessionservice
 * @description
 * # sessionservice
 * Service in the adminAppApp.
 */
angular.module('adminAppApp')
    .factory('SessionService', function() {
        // AngularJS will instantiate a singleton by calling "new" on this function
        return {
            prefix: '',
            get: function(key) {
                var item = sessionStorage.getItem(this.prefix + key) || localStorage.getItem(this.prefix + key);
                // angular.toJson will convert null to 'null', so a proper conversion is needed
                // FIXME not a perfect solution, since a valid 'null' string can't be stored
                if (!item || item === 'null') {
                    return null;
                }
                if (item.charAt(0) === "{" || item.charAt(0) === "[") {
                    return angular.fromJson(item);
                }
                return item;
            },
            set: function(key, value, permanent) {
                if (angular.isObject(value) || angular.isArray(value)) {
                    value = angular.toJson(value);
                }
                if (permanent)
                    localStorage.setItem(this.prefix + key, value);
                return sessionStorage.setItem(this.prefix + key, value);
            },
            unset: function(key) {
                localStorage.removeItem(this.prefix + key);
                return sessionStorage.removeItem(this.prefix + key);
            },
            unsetAll: function() {
                localStorage.clear();
                return sessionStorage.clear();
            }
        };
    });