/* global angular */

          angular.module('DbAudit_App', ['ngRoute']);
          angular.module('DbAudit_App',['ngMessages']);
          angular.module('DbAudit_App').controller("PageCtrl", function ($scope)
        {
            $scope.app = "DB Auditoria";                   
        }); 

/**
 * configurando as rotas (Routes)
 */
app.config(['$routeProvider', function ($routeProvider) {$routeProvider
    // Home
    .when("/", {templateUrl: "views/home.html", controller: "PageCtrl"})
    // Paginas
    .when("/contato", {templateUrl: "views/contato.html", controller: "PageCtrl"})
    .when("/sobre", {templateUrl: "views/sobre.html", controller: "PageCtrl"})
    
    // é  como um else 
    .otherwise("/", {templateUrl: "views/home.html", controller: "PageCtrl"});
}]);
