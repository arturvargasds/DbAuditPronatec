/* global angular, cepsAPI */

angular.module("app").controller("editCepsCtrl", function ($scope, $routeParams, cep,$location,cepsAPI) {

	$scope.cep = cep.data;

	$scope.adicionarCep = function (cep) {	
		cepsAPI.saveCep(cep).success(function (data) {
			delete $scope.cep;
			$scope.cepForm.$setPristine();
			$location.path("/ceps");
		});
	};
});