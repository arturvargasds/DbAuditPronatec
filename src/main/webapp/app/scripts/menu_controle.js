/* global angular */

var app = angular.module('app', ['ngRoute']);

/**
 * configurando as rotas (Routes)
 */
app.config(['$routeProvider', function ($routeProvider) {$routeProvider
    // Home
    .when("/", {templateUrl: "views/home.jsp", controller: "HomeCtrl"})
    // Paginas
  
    .when("/cliente", {templateUrl: "views/clientes.jsp", controller: "ClienteCtrl"})
    .when("/bairro", {templateUrl: "views/cadastro/bairro.jsp", controller: "BairroCtrl"})
    .when("/cidade", {templateUrl: "views/cidade.jsp", controller: "ColabCtrl"})
   
    
    // é  como um else 
    .otherwise("/", {templateUrl: "views/home.jsp", controller: "HomeCtrl"});
    
}]);
