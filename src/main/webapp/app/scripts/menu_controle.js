/* global angular */

var app = angular.module('DbAudit_App', ['ngRoute']);

/**
 * configurando as rotas (Routes)
 */
app.config(['$routeProvider', function ($routeProvider) {$routeProvider
    // Home
    .when("/", {templateUrl: "views/home.jsp", controller: "HomeCtrl"})
    // Paginas
    .when("/contato", {templateUrl: "views/contato.jsp", controller: "ContatoCtrl"})
    .when("/cliente", {templateUrl: "pages/cadastro/cliente.jsp", controller: "PageCtrl"})
    .when("/exemplo", {templateUrl: "pages/cadastro/exemplo.jsp", controller: "PageCtrl"})
    .when("/cid_edit", {templateUrl: "cidades_gerencia.jsp", controller: "PageCtrl"})
    .when("/calendario", {templateUrl: "calendario/index.html", controller: "PageCtrl"})
    
    // é  como um else 
    .otherwise("/", {templateUrl: "views/  home.html", controller: "PageCtrl"});
    
}]);
