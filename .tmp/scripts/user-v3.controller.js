(function() {
  'use strict';
  var UserV3Controller;

  UserV3Controller = function(UserV3APIService) {
    var activate, vm;
    vm = this;
    activate = function() {
      var params, resource;
      params = {
        id: 123
      };
      resource = UserV3APIService.get(params, function(data) {
        return vm.get = data;
      });
      return vm;
    };
    return activate();
  };

  UserV3Controller.$inject = ['UserV3APIService'];

  angular.module('example').controller('UserV3Controller', UserV3Controller);

}).call(this);
