/* global angular */

angular.module("app").controller("cadCertsCtrl", function ($scope, certsAPI, $location) {
	
	$scope.adicionarCertificadora = function (certificadora) {	
		certsAPI.saveCertificadoras(certificadora).success(function (data) {
			delete $scope.certificadora;
			$scope.certForm.$setPristine();
			$location.path("/certificadoras");
		});
	};
});