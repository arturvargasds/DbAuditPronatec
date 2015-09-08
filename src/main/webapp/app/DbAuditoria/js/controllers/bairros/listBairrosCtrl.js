/* global angular, bairrosAPI */

angular.module("app").controller("BairrosCtrl", function ($scope, bairros) {
	$scope.app = "DbAuditoria";
	$scope.bairros = bairros.data.list;
	

	$scope.adicionarCidade= function (bairro) {
		
		bairrosAPI.saveCidade(bairro).success(function (data) {
			delete $scope.bairro;
			$scope.cidForm.$setPristine();
			carregarCidades();
		});
	};
	$scope.apagarCidades = function (cidades) {
		$scope.cidades =  cidades.filter(function (bairro) {
			if (!bairro.selecionado) return bairro;
		});
	};
	$scope.isCidadeSelecionado = function (cidades) {
		return cidades.some(function (bairro) {
			return bairro.selecionado;
		});
	};
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
	
	
});