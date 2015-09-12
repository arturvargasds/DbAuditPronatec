angular.module("app").controller("editCertsCtrl", function ($scope, $routeParams, cert) {

	$scope.cert = cert.data.list;
});