/* global angular, cidade, cidadesAPI, $location */

angular.module("app").controller("editarCidCtrl", function ($scope, $routeParams,cidade,cidadesAPI, $location) {

	$scope.cidade = cidade.data;
        
        $scope.adicionarCidade = function (cidade) {
	
		cidadesAPI.saveCidade(cidade).success(function (data) {
			delete $scope.cidade;
			$scope.cidForm.$setPristine();
			$location.path("/cidades");
		});
	};
        
       /*   $scope.deleteCidade = function (cidade) {
	
		cidadesAPI.deleteCidade(cidade).success(function (data) {
			delete $scope.cidade;
			$scope.cid2Form.$setPristine();
			$location.path("/cidades");
		});
	};*/
        
});