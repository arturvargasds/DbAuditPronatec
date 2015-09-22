/* global angular */
angular.module("app").controller("cadAuditoriasCtrl", function ($scope, auditoriasAPI, certificadoras,clientes,$location) {
    
         $scope.certificadoras = certificadoras.data.list;
          $scope.clientes = clientes.data.list;
	$scope.adicionarAuditoria = function (auditoria) {
		auditoriasAPI.saveAuditoria(auditoria).success(function (data) {                       
			delete $scope.auditoria;
			$scope.auditoriasForm.$setPristine();
			$location.path("/auditorias");
		});
	};    
});