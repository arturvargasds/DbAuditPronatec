/* global angular */

angular.module("app").controller("cadCertsCtrl", function ($scope, certsAPI, $location) {
	
	$scope.adicionarCerts = function (cert) {	
		certsAPI.saveCerts(cert).success(function (data) {
			delete $scope.cert;
			$scope.certForm.$setPristine();
			$location.path("/certificadoras");
		});
	};
});