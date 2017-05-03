(function () {
    'use strict';
    appConfig.inject = ['$stateProvider', '$urlRouterProvider'];

    function appConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/estado1");

        $stateProvider
            .state('pestaña1', {
                url: "/pestaña1",
                templateUrl: "pestaña1.html"
            })
            .state('pestaña2', {
                url: "/pestaña2",
                templateUrl: "pestaña2.html",
            })
            .state('pestaña3', {
                url: "/pestaña3",
                templateUrl: "pestaña3.html"
            })
    }

    angular.module('app')
        .config(appConfig);
})();