"use strict";

var routerApp = angular.module("routerApp", ["ui.router"]);

routerApp.config(
    ["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("app", {
            url: "/",
            views: {
                "navigation": {
                    templateUrl: "views/navigation.html"
                },
                "content": {
                    templateUrl: "views/about.html"
                }
            }
        })
            .state("app.resume", {
            url: "resume",
            views: {
                "content@": {
                    templateUrl: "views/resume.html",
                    controller: "JoanneController"
                }
            }
        })
            .state("app.portfolio", {
            url: "portfolio",
            views: {
                "content@": {
                    templateUrl: "views/portfolio.html",
                    controller: "JoanneController"
                }
            }
        })
            .state("app.references", {
            url: "references",
            views: {
                "content@": {
                    templateUrl: "views/references.html",
                    controller: "JoanneController"
                }
            }
        });
    }]);