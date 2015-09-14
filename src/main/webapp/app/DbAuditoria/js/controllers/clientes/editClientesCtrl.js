/* global angular ,clientes */

angular.module("app").controller("editClientesCtrl", function ($scope, $routeParams, cliente) {

	$scope.cliente = cliente.data.list;
});