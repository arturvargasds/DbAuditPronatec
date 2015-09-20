/* global angular, auditoresAPI */

angular.module("app").controller("AuditoresCtrl", function ($scope, auditores) {
	$scope.app = "DbAuditoria";
	$scope.auditores = auditores.data.list;
	

	$scope.adicionarAuditor= function (auditor) {		
		auditoresAPI.saveAuditor(auditor).success(function (data) {
			delete $scope.auditor;
			$scope.auditoresForm.$setPristine();
			carregarAuditores();
		});
	};
    
	$scope.apagarAuditores = function (auditores) {
		$scope.auditores =  auditores.filter(function (auditor) {
			if (!auditor.selecionado) return auditor;
		});
	};
    
	$scope.isAuditorSelecionado = function (auditores) {
		return auditores.some(function (auditor) {
			return auditor.selecionado;
		});
	};
    
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
	
	
});