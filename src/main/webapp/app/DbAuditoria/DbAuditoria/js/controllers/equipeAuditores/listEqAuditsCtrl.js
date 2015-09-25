/* global angular, equipeauditores, equipeAuditoresAPI */

angular.module("app").controller("listEqAuditsCtrl", function ($scope, eqAudits) {
	$scope.app = "DbAuditoria";
	$scope.eqAudits = eqAudits.data.list;
	

	$scope.adicionarEqAudit= function (eqAudit) {		
		eqAuditsAPI.saveEqAudit(eqAudit).success(function (data) {
			delete $scope.eqAudit;
			$scope.EquipeAuditoresForm.$setPristine();
			carregarEqAudits();
		});
	};
    
	$scope.apagarEqAudits = function (eqAudits) {
		$scope.eqAudits =  eqAudits.filter(function (eqAudit) {
			if (!eqAudit.selecionado) return eqAudit;
		});
	};
    
	$scope.isEqAuditSelecionado = function (eqAudits) {
		return eqAudits.some(function (eqAuditor) {
			return eqAudit.selecionado;
		});
	};
    
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
	
	
});