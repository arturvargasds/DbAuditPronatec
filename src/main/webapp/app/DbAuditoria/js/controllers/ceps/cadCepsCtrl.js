/* global angular */

angular.module("app").controller("cadCepsCtrl", function ($scope, cepsAPI, $location) {	

	$scope.adicionarCep = function (cep) {	
		cepsAPI.saveAuditor(cep).success(function (data) {
			delete $scope.cep;
			$scope.cepForm.$setPristine();
			$location.path("/ceps");
		});
	};
});