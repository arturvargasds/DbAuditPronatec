angular.module("app").controller("EditarCepCtrl", function ($scope, $routeParams, cep) {

	$scope.cep = cep.data.list;
});