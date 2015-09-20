/* global angular, certsAPI*/

angular.module("app").controller("listCertsCtrl", function ($scope, certificadoras) {
	$scope.app = "DbAuditoria";
	$scope.certificadoras = certificadoras.data.list;


	$scope.adicionarCertificadora= function (certificadora) {
		certsAPI.saveCertificadoras(certificadora).success(function (data) {
			delete $scope.certificadora;
			$scope.certForm.$setPristine();
			carregarCertificadoras();
		});
	};

	$scope.apagarCerts = function (certificadoras) {
		$scope.certificadoras =  certificadoras.filter(function (certificadora) {
			if (!certificadora.selecionado) return certificadora;
		});
	};

	$scope.isCertSelecionado = function (certificadoras) {
		return certificadoras.some(function (certificadora) {
			return certificadora.selecionado;
		});
	};

	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

});