/* global angular, cepsAPI */

angular.module("app").controller("CepsCtrl", function ($scope, ceps) {
	$scope.app = "DbAuditoria";
	$scope.ceps = ceps.data.list;
	

	$scope.adicionarCep = function (cep) {
		
		cepsAPI.saveCep(cep).success(function (data) {
			delete $scope.ceps;
			$scope.cepForm.$setPristine();
			carregarCeps();
		});
	};
	$scope.apagarCeps = function (ceps) {
		$scope.ceps =  ceps.filter(function (cep) {
			if (!cep.selecionado) return cep;
		});
	};
	$scope.isCepSelecionado = function (ceps) {
		return ceps.some(function (cep) {
			return ceps.selecionado;
		});
	};
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
	
	
});