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
    url = API_URL + '/v3/threads/:id';
    params = {
      id: '@id',
      subscriberId: '@subscriberId'
    };
    actions = {
      query: {
        method: 'GET',
        isArray: false,
        transformResponse: transformResponse
      },
      get: {
        method: 'GET',
        isArray: false,
        transformResponse: transformResponse
      }
    };
    return $resource(url, params, actions);
  };

  srv.$inject = ['$resource', 'API_URL'];

  angular.module('appirio-tech-ng-api').factory('ThreadsAPIService', srv);

}).call(this);
