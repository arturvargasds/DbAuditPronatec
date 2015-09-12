angular.module("app").controller("editNCsCtrl", function ($scope, $routeParams, NC) {

	$scope.NC = NC.data.list;
});