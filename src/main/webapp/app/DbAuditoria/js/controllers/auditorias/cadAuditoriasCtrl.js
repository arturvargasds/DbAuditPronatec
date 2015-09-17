/* global angular */

angular.module("app").controller("cadAuditoriasCtrl", function ($scope, auditoriasAPI, $location) {
	

	$scope.adicionarAuditoria = function (auditoria) {
                
	
		auditoriasAPI.saveAuditoria(auditoria).success(function (data) {                       
			delete $scope.auditoria;
			$scope.auditoriasForm.$setPristine();
			$location.path("/auditorias");
		});
	};
});