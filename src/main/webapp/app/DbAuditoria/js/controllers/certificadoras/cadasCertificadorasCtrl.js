/* global angular */

angular.module("app").controller("cadCertificadorasCtrl", function ($scope, CerticadorasAPI, $location) {
	

	$scope.adicionarCertificadoras = function (certificadora) {
	
		CertificadoraAPI.saveCertificadoras(certificadora).success(function (data) {
			delete $scope.certificadora;
			$scope.CertificadorasForm.$setPristine();
			$location.path("/Certificadora");
		});
	};
});