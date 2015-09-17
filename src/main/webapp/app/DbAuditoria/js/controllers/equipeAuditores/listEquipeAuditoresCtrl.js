/* global angular, equipeauditores, equipeAuditoresAPI */

angular.module("app").controller("listEAuditsCtrl", function ($scope, equipeauditores) {
	$scope.app = "DbAuditoria";
	$scope.equipeauditores = equipeauditores.data.list;
	

	$scope.adicionarEquipeAuditor= function (equipeauditor) {
		
		equipeAuditoresAPI.saveEquipeAuditor(equipeauditor).success(function (data) {
			delete $scope.equipeauditor;
			$scope.EquipeAuditoresForm.$setPristine();
			carregarEquipeauditores();
		});
	};
    
	$scope.apagarEquipeAuditores = function (equipeauditores) {
		$scope.equipeauditores =  equipeauditores.filter(function (equipeauditor) {
			if (!equipeauditor.selecionado) return equipeauditor;
		});
	};
    
	$scope.isEquipeAuditorSelecionado = function (equipeauditores) {
		return equipeauditores.some(function (equipeauditor) {
			return equipeauditor.selecionado;
		});
	};
    
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
	
	
});