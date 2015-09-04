(function() {
  'use strict';
  var SubmissionDetailAPIController;

  SubmissionDetailAPIController = function(SubmissionDetailAPIService) {
    var activate, vm;
    vm = this;
    activate = function() {
      var params, resource;
      params = {
        workId: 'workId',
        submissionId: 'submissionId'
      };
      resource = SubmissionDetailAPIService.get(params, function(data) {
        return vm.get = data;
      });
      return vm;
    };
    return activate();
  };

  SubmissionDetailAPIController.$inject = ['SubmissionDetailAPIService'];

  angular.module('example').controller('SubmissionDetailAPIController', SubmissionDetailAPIController);

}).call(this);
