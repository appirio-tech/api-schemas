(function() {
  'use strict';
  var MessagesAPIController;

  MessagesAPIController = function(MessagesAPIService) {
    var activate, vm;
    vm = this;
    activate = function() {
      var params, resource;
      params = {
        id: 123
      };
      resource = MessagesAPIService.put(params, function(data) {
        return vm.get = data;
      });
      return vm;
    };
    return activate();
  };

  MessagesAPIController.$inject = ['MessagesAPIService'];

  angular.module('example').controller('MessagesAPIController', MessagesAPIController);

}).call(this);
