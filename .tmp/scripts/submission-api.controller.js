(function() {
  'use strict';
  var SubmissionAPIController;

  SubmissionAPIController = function(SubmissionAPIService) {
    var activate, vm;
    vm = this;
    activate = function() {
      var params, resource;
      params = {
        workId: '133',
        phase: '123'
      };
      resource = SubmissionAPIService.get(params, function(data) {
        return vm.get = data;
      });
      return vm;
    };
    return activate();
  };

  SubmissionAPIController.$inject = ['SubmissionAPIService'];

  angular.module('example').controller('SubmissionAPIController', SubmissionAPIController);

}).call(this);
