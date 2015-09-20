angular.module("app").controller("editNCsCtrl", function ($scope, $routeParams, nc) {

	$scope.nc = nc.data.list;
});