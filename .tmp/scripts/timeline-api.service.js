(function() {
  'use strict';
  var srv, transformResponse;

  transformResponse = function(response) {
    var parsed, ref;
    parsed = JSON.parse(response);
    return (parsed != null ? (ref = parsed.result) != null ? ref.content : void 0 : void 0) || [];
  };

  srv = function($resource, API_URL) {
    var methods, params, url;
    url = API_URL + '/v3/work/:workId/timeline';
    params = {
      workId: '@workId'
    };
    methods = {
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
    return $resource(url, params, methods);
  };

  srv.$inject = ['$resource', 'API_URL'];

  angular.module('appirio-tech-ng-api').factory('TimelineAPIService', srv);

}).call(this);
