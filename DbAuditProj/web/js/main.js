/* global angular */

var app = angular.module('DbAudit_App', ['ngRoute']);

/**
 * configurando as rotas (Routes)
 */
app.config(['$routeProvider', function ($routeProvider) {$routeProvider
    // Home
    .when("/", {templateUrl: "views/home.html", controller: "PageCtrl"})
    // Paginas
    .when("/contato", {templateUrl: "views/contato.html", controller: "PageCtrl"})
    .when("/cadastrocli", {templateUrl: "views/cadastrocli.html", controller: "PageCtrl"})
    .when("/cadastro", {template:"", controller: "PageCtrl"})
    .when("/sobre", {templateUrl: "views/sobre.html", controller: "PageCtrl"})
    .when("/calendario", {templateUrl: "calendario/index.html", controller: "PageCtrl"})
    
    // é  como um else 
    .otherwise("/", {templateUrl: "views/home.html", controller: "PageCtrl"});
}]);
