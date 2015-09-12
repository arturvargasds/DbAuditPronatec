angular.module("app").controller("editarCertificadorasCtrl", function ($scope, $routeParams, certificadora) {

	$scope.certificadora = certificadora.data.list;
});