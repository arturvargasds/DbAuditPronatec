/* global angular, certificadorasAPI*/

angular.module("app").controller("CertificadorasCtrl", function ($scope, certificadoras) {
	$scope.app = "DbAuditoria";
	$scope.certificadoras = certificadoras.data.list;
	

	$scope.adicionarCertificadoras= function (certificadora) {
		
		certificadorasAPI.savecertificadora(certificadora).success(function (data) {
			delete $scope.certificadora;
			$scope.certificadoraForm.$setPristine();
			carregarCertificadoras();
		});
	};
	$scope.apagarCertificadoras = function (certificadoras) {
		$scope.certificadoras =  certificadoras.filter(function (certificadora) {
			if (!certificadora.selecionado) return certificadora;
		});
	};
	$scope.isCertificadoraSelecionado = function (certificadoras) {
		return certificadoras.some(function (certificadora) {
			return certificadora.selecionado;
		});
	};
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
	
	
});