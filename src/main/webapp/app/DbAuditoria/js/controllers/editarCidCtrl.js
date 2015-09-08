angular.module("app").controller("EditarCidCtrl", function ($scope, $routeParams, cidade) {

	$scope.cidade = cidade.data.list;
});