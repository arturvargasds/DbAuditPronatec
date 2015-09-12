angular.module("app").controller("listNCsCtrl", function ($scope, NCs) {
	$scope.app = "DbAuditoria";
	$scope.NCs = NCs.data.list;
	

	$scope.adicionarNC= function (NC) {
        
		NCsAPI.saveNC(NC).success(function (data) {
			delete $scope.NC;
			$scope.NCForm.$setPristine();
			carregarNCs();
		});
	};
    
	$scope.apagarNCs = function (NCs) {
		$scope.NCs =  NCs.filter(function (NC) {
			if (!NC.selecionado) return NC;
		});
	};
    
	$scope.isNCSelecionado = function (NCs) {
		return NCs.some(function (NC) {
			return NC.selecionado;
		});
	};
    
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
	
	
});