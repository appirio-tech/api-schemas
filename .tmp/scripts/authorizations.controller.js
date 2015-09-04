(function() {
  'use strict';
  var AuthorizationsController;

  AuthorizationsController = function(AuthorizationsAPIService) {
    var activate, vm;
    vm = this;
    activate = function() {
      var params, resource;
      params = {
        id: 123
      };
      resource = AuthorizationsAPIService.get(params, function(data) {
        return vm.get = data;
      });
      return vm;
    };
    return activate();
  };

  AuthorizationsController.$inject = ['AuthorizationsAPIService'];

  angular.module('example').controller('AuthorizationsController', AuthorizationsController);

}).call(this);
