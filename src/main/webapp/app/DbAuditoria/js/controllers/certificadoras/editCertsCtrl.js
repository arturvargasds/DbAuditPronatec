angular.module("app").controller("editCertsCtrl", function ($scope, $routeParams, certificadora) {

	$scope.certificadora = certificadora.data.list;
});