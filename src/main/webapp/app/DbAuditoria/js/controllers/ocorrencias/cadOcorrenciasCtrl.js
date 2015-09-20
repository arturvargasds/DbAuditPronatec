/* global angular */

angular.module("app").controller("cadOcorrenciasCtrl", function ($scope, ocorrenciasAPI, $location) {
	

	$scope.adicionarOcorrencia = function (ocorrencia) {
	
		ocorrenciasAPI.saveOcorrencia(ocorrencia).success(function (data) {
			delete $scope.ocorrencia;
			$scope.ocorrenciasForm.$setPristine();
			$location.path("/ocorrencias");
		});
	};
        
       /// $scope.today = statesService.getToday();
});