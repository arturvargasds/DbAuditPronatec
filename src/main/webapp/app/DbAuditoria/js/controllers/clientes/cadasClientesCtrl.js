/* global angular */

angular.module("app").controller("cadClienteCtrl", function ($scope, clientesAPI, $location) {
	

	$scope.adicionarCliente = function (cliente) {
	
		clientesAPI.saveCliente(cliente).success(function (data) {
			delete $scope.cliente;
			$scope.clienteForm.$setPristine();
			$location.path("/clientes");
		});
	};
});