(function() {
  'use strict';
  var TimelineAPIController;

  TimelineAPIController = function(TimelineAPIService) {
    var activate, vm;
    vm = this;
    activate = function() {
      var params, resource;
      params = {
        id: 123
      };
      resource = TimelineAPIService.get(params, function(data) {
        return vm.get = data;
      });
      return vm;
    };
    return activate();
  };

  TimelineAPIController.$inject = ['TimelineAPIService'];

  angular.module('example').controller('TimelineAPIController', TimelineAPIController);

}).call(this);
