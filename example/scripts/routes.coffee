'use strict'

config = ($stateProvider) ->
  states = {}

  states['user-v3-api'] =
    url         : '/'
    title       : 'user-v3-api'
    controller  : 'UserV3Controller as vm'
    templateUrl : 'views/api.html'

  states['authorizations'] =
    url         : '/authorizations'
    title       : 'authorizations'
    controller  : 'AuthorizationsController as vm'
    templateUrl : 'views/api.html'

  for key, state of states
    $stateProvider.state key, state

config.$inject = ['$stateProvider']

angular.module('example').config(config).run()


