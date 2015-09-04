(function() {
  'use strict';
  var ThreadsAPIController;

  ThreadsAPIController = function(ThreadsAPIService) {
    var activate, vm;
    vm = this;
    activate = function() {
      var params, resource;
      params = {
        id: 'id',
        subscriberId: 'subscriberId'
      };
      resource = ThreadsAPIService.get(params, function(data) {
        return vm.get = data;
      });
      return vm;
    };
    return activate();
  };

  ThreadsAPIController.$inject = ['ThreadsAPIService'];

  angular.module('example').controller('ThreadsAPIController', ThreadsAPIController);

}).call(this);
