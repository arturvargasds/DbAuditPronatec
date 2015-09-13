/* global angular ,clientes */

angular.module("app").controller("editarClienteCtrl", function ($scope, $routeParams, cliente) {

	$scope.cliente = cliente.data.list;
});