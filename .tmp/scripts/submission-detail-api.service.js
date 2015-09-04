(function() {
  'use strict';
  var srv, transformResponse, updateRank;

  transformResponse = function(response) {
    var parsed, ref;
    parsed = JSON.parse(response);
    return (parsed != null ? (ref = parsed.result) != null ? ref.content : void 0 : void 0) || {};
  };

  updateRank = function(submission) {
    var dataToUpdate;
    dataToUpdate = {
      rank: submission.rank
    };
    return dataToUpdate;
  };

  srv = function($resource, API_URL) {
    var actions, params, url;
    url = API_URL + '/v3/projects/:workId/submissions/:submissionId';
    params = {
      workId: '@workId',
      submissionId: '@submissionId'
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
      },
      updateRank: {
        method: 'PUT',
        transformRequest: updateRank
      }
    };
    return $resource(url, params, actions);
  };

  srv.$inject = ['$resource', 'API_URL'];

  angular.module('appirio-tech-ng-api').factory('SubmissionDetailAPIService', srv);

}).call(this);
