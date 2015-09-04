(function() {
  'use strict';
  var WorkAPIController;

  WorkAPIController = function(WorkAPIService) {
    var activate, vm;
    vm = this;
    activate = function() {
      var params, resource;
      params = {
        id: 123
      };
      resource = WorkAPIService.get(params, function(data) {
        return vm.get = data;
      });
      return vm;
    };
    return activate();
  };

  WorkAPIController.$inject = ['WorkAPIService'];

  angular.module('example').controller('WorkAPIController', WorkAPIController);

}).call(this);
