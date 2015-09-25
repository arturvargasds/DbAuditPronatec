/* global angular */

angular.module("app").controller("cadCertsCtrl", function ($scope, certificadorasAPI, $location) {
	
	$scope.adicionarCertificadora = function (certificadora) {	
		certificadorasAPI.saveCertificadora(certificadora).success(function (data) {
			delete $scope.certificadora;
			$scope.certForm.$setPristine();
			$location.path("/certs");
		});
	};
});