/* global angular, ocorrenciasAPI */

angular.module("app").controller("OcorrenciasCtrl", function ($scope, ocorrencias) {
	$scope.app = "DbAuditoria";
	$scope.ocorrencias = ocorrencias.data.list;
	

	$scope.adicionarCidade= function (ocorrencia) {
		
		ocorrenciasAPI.saveCidade(ocorrencia).success(function (data) {
			delete $scope.ocorrencia;
			$scope.cidForm.$setPristine();
			carregarCidades();
		});
	};
	$scope.apagarCidades = function (ocorrencias) {
		$scope.ocorrencias =  ocorrencias.filter(function (ocorrencia) {
			if (!ocorrencia.selecionado) return ocorrencia;
		});
	};
	$scope.isCidadeSelecionado = function (ocorrencias) {
		return ocorrencias.some(function (ocorrencia) {
			return ocorrencia.selecionado;
		});
	};
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
	
	
});