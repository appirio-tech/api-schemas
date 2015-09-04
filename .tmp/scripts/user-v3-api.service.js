(function() {
  'use strict';
  var srv, transformResponse;

  transformResponse = function(response) {
    var parsed, ref;
    parsed = JSON.parse(response);
    return (parsed != null ? (ref = parsed.result) != null ? ref.content : void 0 : void 0) || {};
  };

  srv = function($resource, API_URL) {
    var actions, params, url;
    url = API_URL + '/v3/users/:id';
    params = {
      id: '@id'
    };
    actions = {
      get: {
        method: 'GET',
        isArray: false,
        transformResponse: transformResponse
      },
      post: {
        method: 'POST'
      }
    };
    return $resource(url, params, actions);
  };

  srv.$inject = ['$resource', 'API_URL'];

  angular.module('appirio-tech-ng-api').factory('UserV3APIService', srv);

}).call(this);
