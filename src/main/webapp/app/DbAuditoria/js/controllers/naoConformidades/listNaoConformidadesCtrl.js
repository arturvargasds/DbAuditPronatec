/* global angular, NCAPI */

angular.module("app").controller("naoConformidadesCtrl", function ($scope, NC) {
	$scope.app = "DbAuditoria";
	$scope.NC = NC.data.list;
	

	$scope.adicionarNaoConformidades= function (NC) {
		
		NCAPI.saveNaoConformidades(NC).success(function (data) {
			delete $scope.NC;
			$scope.NCForm.$setPristine();
			carregarNaoConformidades();
		});
	};
	$scope.apagarNaoConformidades = function (NC) {
		$scope.NC =  NC.filter(function (NC) {
			if (!NC.selecionado) return NC;
		});
	};
	$scope.isNaoConformidadesSelecionado = function (NC) {
		return NC.some(function (NC) {
			return NC.selecionado;
		});
	};
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
	
	
});