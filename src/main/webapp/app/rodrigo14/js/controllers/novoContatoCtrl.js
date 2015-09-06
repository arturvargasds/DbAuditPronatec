angular.module("listaTelefonica").controller("cadCidadeCtrl", function ($scope, contatosAPI, $location) {
	

	$scope.adicionarContato = function (cidade) {
	
		contatosAPI.saveContato(cidade).success(function (data) {
			delete $scope.cidade;
			$scope.contatoForm.$setPristine();
			$location.path("/cidades");
		});
	};
});