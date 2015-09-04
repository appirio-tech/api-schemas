(function() {
  'use strict';
  var config;

  config = function($stateProvider) {
    var key, results, state, states;
    states = {};
    states['user-v3-api'] = {
      url: '/',
      title: 'user-v3-api',
      controller: 'UserV3Controller as vm',
      templateUrl: 'views/api.html'
    };
    states['authorizations'] = {
      url: '/authorizations',
      title: 'authorizations',
      controller: 'AuthorizationsController as vm',
      templateUrl: 'views/api.html'
    };
    states['messages-api'] = {
      url: '/messages-api',
      title: 'MessagesAPI',
      controller: 'MessagesAPIController as vm',
      templateUrl: 'views/api.html'
    };
    states['final-fixes-api'] = {
      url: '/final-fixes-api',
      title: 'FinalFixesAPI',
      controller: 'FinalFixesAPIController as vm',
      templateUrl: 'views/api.html'
    };
    states['submission-api'] = {
      url: '/submission-api',
      title: 'SubmissionAPI',
      controller: 'SubmissionAPIController as vm',
      templateUrl: 'views/api.html'
    };
    states['submission-detail-api'] = {
      url: '/submission-detail-api',
      title: 'SubmissionDetailAPI',
      controller: 'SubmissionDetailAPIController as vm',
      templateUrl: 'views/api.html'
    };
    states['threads-api'] = {
      url: '/threads-api',
      title: 'ThreadsAPI',
      controller: 'ThreadsAPIController as vm',
      templateUrl: 'views/api.html'
    };
    states['work-api'] = {
      url: '/work-api',
      title: 'WorkAPI',
      controller: 'WorkAPIController as vm',
      templateUrl: 'views/api.html'
    };
    results = [];
    for (key in states) {
      state = states[key];
      results.push($stateProvider.state(key, state));
    }
    return results;
  };

  config.$inject = ['$stateProvider'];

  angular.module('example').config(config).run();

}).call(this);
