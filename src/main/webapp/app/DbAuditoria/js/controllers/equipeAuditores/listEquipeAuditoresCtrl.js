/* global angular, equipeauditores, equipeauditoresAPI */

angular.module("app").controller("listEquipeAuditoresCtrl", function ($scope, equipeauditores) {
	$scope.app = "DbAuditoria";
	$scope.equipeauditores = equipeauditores.data.list;
	

	$scope.adicionarEquipeAuditor= function (equipeauditore) {
		
		equipeauditoresAPI.saveEquipeAuditor(equipeauditore).success(function (data) {
			delete $scope.equipeauditore;
			$scope.EquipeAuditoresForm.$setPristine();
			carregarEquipeauditores();
		});
	};
    
	$scope.apagarEquipeAuditores = function (equipeauditores) {
		$scope.equipeauditores =  equipeauditores.filter(function (equipeauditore) {
			if (!equipeauditore.selecionado) return equipeauditore;
		});
	};
    
	$scope.isEquipeAuditorSelecionado = function (equipeauditores) {
		return equipeauditores.some(function (equipeauditores) {
			return equipeauditore.selecionado;
		});
	};
    
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
	
	
});