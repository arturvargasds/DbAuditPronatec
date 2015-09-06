angular.module("listaTelefonica").controller("CidadesCtrl", function ($scope, cidades, serialGenerator) {
	$scope.app = "Lista Telefonica";
	$scope.cidades = cidades.data;
	

  /*	var generateSerial = function (cidades) {
		cidades.forEach(function (item) {
			item.serial = serialGenerator.generate();
		});
	}; */

	$scope.adicionarContato = function (cidade) {
		cidade.serial = serialGenerator.generate();
		contatosAPI.saveContato(cidade).success(function (data) {
			delete $scope.cidade;
			$scope.contatoForm.$setPristine();
			carregarContatos();
		});
	};
	$scope.apagarContatos = function (cidades) {
		$scope.cidades =  cidades.filter(function (cidade) {
			if (!cidade.selecionado) return cidade;
		});
	};
	$scope.isContatoSelecionado = function (cidades) {
		return cidades.some(function (cidade) {
			return cidade.selecionado;
		});
	};
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
	
/*	generateSerial($scope.cidades); */
});