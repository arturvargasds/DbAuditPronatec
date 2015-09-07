angular.module("app").controller("cadCidadeCtrl", function ($scope, cidadesAPI, $location, ufs) {
	$scope.ufs = ufs.data;

	$scope.adicionarCidade = function (cidade) {
	
		cidadesAPI.saveCidade(cidade).success(function (data) {
			delete $scope.cidade;
			$scope.cidForm.$setPristine();
			$location.path("/cidades");
		});
	};
});