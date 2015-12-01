angular.module("app").controller("editCepsCtrl", function ($scope, $routeParams, cep) {

	$scope.cep = cep.data.list;
});