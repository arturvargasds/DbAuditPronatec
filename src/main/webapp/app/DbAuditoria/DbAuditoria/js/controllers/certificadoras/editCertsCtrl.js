angular.module("app").controller("editCertsCtrl", function ($scope, $routeParams, certificadora, certificadorasAPI, $location) {

	$scope.certificadora = certificadora.data;
	
	$scope.adicionarCertificadora = function (certificadora) {	
		certificadorasAPI.saveCertificadora(certificadora).success(function (data) {
			delete $scope.certificadora;
			$scope.certForm.$setPristine();
			$location.path("/certs");
		});
	};

});