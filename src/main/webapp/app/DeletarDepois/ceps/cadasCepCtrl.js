/* global angular */

angular.module("app").controller("cadCepCtrl", function ($scope, cepsAPI, $location) {
	

	$scope.adicionarCep = function (cep) {
	
		cepsAPI.saveCep(cep).success(function (data) {
			delete $scope.cep;
			$scope.cepForm.$setPristine();
			$location.path("/ceps");
		});
	};
});