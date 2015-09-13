/* global angular, ocorrencias, ocorrenciasAPI  */

angular.module("app").controller("ocorrenciasCtrl", function ($scope, ocorrencias) {
	$scope.app = "DbAuditoria";
	$scope.ocorrencias = ocorrencias.data.list;
	

	$scope.adicionarOcorrencia= function (ocorrencia) {
		
		ocorrenciasAPI.saveOcorrencia(ocorrencia).success(function (data) {
			delete $scope.ocorrencia;
			$scope.ocorrenciasForm.$setPristine();
			carregarOcorrencias();
		});
	};
	$scope.apagarOcorrencias= function (ocorrencias) {
		$scope.ocorrencias =  ocorrencias.filter(function (ocorrencia) {
			if (!ocorrencia.selecionado) return ocorrencia;
		});
	};
	$scope.isOcorrenciaSelecionado = function (ocorrencias) {
		return ocorrencias.some(function (ocorrencia) {
			return ocorrencia.selecionado;
		});
	};
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
	
	
});