/* global angular, ocorrencia */

angular.module("app").controller("editOcorrenciasCtrl", function ($scope, $routeParams, ocorrencia, ocorrenciasAPI, $location) {

	$scope.ocorrencia = ocorrencia.data;

	$scope.adicionarOcorrencia = function (ocorrencia) {	
		ocorrenciasAPI.saveOcorrencia(ocorrencia).success(function (data) {
			delete $scope.ocorrencia;
			$scope.ocorrenciaForm.$setPristine();
			$location.path("/ocorrencias");
		});
	};

});