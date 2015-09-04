(function() {
  'use strict';
  var srv;

  srv = function($resource, API_URL) {
    var params, url;
    url = API_URL + '/v3/authorizations/:id';
    params = {
      id: '@id'
    };
    return $resource(url, params);
  };

  srv.$inject = ['$resource', 'API_URL'];

  angular.module('appirio-tech-ng-api').factory('AuthorizationsAPIService', srv);

}).call(this);
