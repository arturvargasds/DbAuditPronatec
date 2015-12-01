/* global angular, auditoresAPI */

angular.module("app").controller("AuditoresCtrl", function ($scope, auditores) {
	$scope.app = "DbAuditoria";
	$scope.auditores = auditores.data.list;
	

	$scope.adicionarAuditores= function (auditores) {
		
		auditoresAPI.saveAuditores(auditores).success(function (data) {
			delete $scope.auditores;
			$scope.auditoresForm.$setPristine();
			carregarAuditores();
		});
	};
	$scope.apagarAuditores = function (auditores) {
		$scope.auditores =  auditores.filter(function (auditores) {
			if (!auditores.selecionado) return auditores;
		});
	};
	$scope.isAuditoreSelecionado = function (auditores) {
		return auditores.some(function (auditores) {
			return auditores.selecionado;
		});
	};
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
	
	
});