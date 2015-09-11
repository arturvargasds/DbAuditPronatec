/* global angular */

angular.module("app").controller("cadNaoConformidadesCtrl", function ($scope, NCAPI, $location) {
	

	$scope.adicionarNaoConformidades = function (NC) {
	
		NCAPI.saveNaoConformidades(NC).success(function (data) {
			delete $scope.NC;
			$scope.NCForm.$setPristine();
			$location.path("/naoConformidades");
		});
	};
});