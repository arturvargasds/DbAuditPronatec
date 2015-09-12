/* global angular, NCAPI */

angular.module("app").controller("naoConformidadesCtrl", function ($scope, NC) {
	$scope.app = "DbAuditoria";
	$scope.NC = NC.data.list;
	

	$scope.adicionarNaoConformidades= function (nc) {
		
		NCAPI.saveNaoConformidades(nc).success(function (data) {
			delete $scope.nc;
			$scope.NCForm.$setPristine();
			carregarNaoConformidades();
		});
	};
	$scope.apagarNaoConformidades = function (NC) {
		$scope.NC =  NC.filter(function (NC) {
			if (!nc.selecionado) return nc;
		});
	};
	$scope.isNaoConformidadesSelecionado = function (NC) {
		return NC.some(function (nc) {
			return nc.selecionado;
		});
	};
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
	
	
});