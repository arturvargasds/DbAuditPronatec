/* global angular, colaboradores, colaboradoresAPI */

angular.module("app").controller("listColaboradoresCtrl", function ($scope, colaboradores) {
	$scope.app = "DbAuditoria";
	$scope.colaboradores = colaboradores.data.list;
	

	$scope.adicionarColaborador = function (colaborador) {		
		colaboradoresAPI.saveColaborador(colaborador).success(function (data) {
			delete $scope.colaborador;
			$scope.colaboradorForm.$setPristine();
			carregarColaboradores();
		});
	};

	$scope.apagarColaboradores = function (colaboradores) {
		$scope.colaboradores =  colaboradores.filter(function (colaborador) {
			if (!colaborador.selecionado) return colaborador;
		});
	};

	$scope.isColaboradorSelecionado = function (colaboradores) {
		return colaboradores.some(function (colaborador) {
			return colaborador.selecionado;
		});
	};

	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
	
	
});