(function() {
  'use strict';
  var FinalFixesAPIController;

  FinalFixesAPIController = function(FinalFixesAPIService) {
    var activate, vm;
    vm = this;
    activate = function() {
      var params, resource;
      params = {
        workId: 123
      };
      resource = FinalFixesAPIService.get(params, function(data) {
        return vm.get = data;
      });
      return vm;
    };
    return activate();
  };

  FinalFixesAPIController.$inject = ['FinalFixesAPIService'];

  angular.module('example').controller('FinalFixesAPIController', FinalFixesAPIController);

}).call(this);
