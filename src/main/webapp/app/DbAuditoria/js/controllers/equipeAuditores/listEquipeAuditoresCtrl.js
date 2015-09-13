/* global angular, auditoresAPI */

angular.module("app").controller("EquipeAuditoresCtrl", function ($scope, EquipeAuditores) {
	$scope.app = "DbAuditoria";
	$scope.EquipeAuditores = EquipeAuditores.data.list;
	

	$scope.adicionarEquipeAuditor= function (EquipeAuditor) {
		
		EquipeAuditoresAPI.saveEquipeAuditor(EquipeAuditor).success(function (data) {
			delete $scope.EquipeAuditor;
			$scope.EquipeAuditoresForm.$setPristine();
			carregarEquipeAuditores();
		});
	};
    
	$scope.apagarEquipeAuditores = function (EquipeAuditores) {
		$scope.EquipeAuditores =  EquipeAuditores.filter(function (EquipeAuditor) {
			if (!EquipeAuditor.selecionado) return EquipeAuditor;
		});
	};
    
	$scope.isEquipeAuditorSelecionado = function (EquipeAuditores) {
		return EquipeAuditores.some(function (EquipeAuditor) {
			return EquipeAuditor.selecionado;
		});
	};
    
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
	
	
});