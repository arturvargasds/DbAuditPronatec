angular.module("app").controller("EditarBaiCtrl", function ($scope, $routeParams, bairro) {

	$scope.bairro = bairro.data.list;
});