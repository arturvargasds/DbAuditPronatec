/* global angular ,clientes */

angular.module("app").controller("editClientesCtrl", function ($scope, $routeParams, cliente, clientesAPI, $location) {

	$scope.cliente = cliente.data;
        
        $scope.adicionarCliente = function (cliente) {	
		clientesAPI.saveCliente(cliente).success(function (data) {
			delete $scope.cliente;
			$scope.clienteForm.$setPristine();
			$location.path("/clientes");
		});
	};
});