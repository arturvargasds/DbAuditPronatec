/* global angular, certsAPI*/

angular.module("app").controller("listCertsCtrl", function ($scope, certs) {
	$scope.app = "DbAuditoria";
	$scope.certs = certs.data.list;


	$scope.adicionarCerts= function (cert) {
		certsAPI.saveCert(cert).success(function (data) {
			delete $scope.cert;
			$scope.certForm.$setPristine();
			carregarCerts();
		});
	};

	$scope.apagarCerts = function (certs) {
		$scope.certs =  certs.filter(function (cert) {
			if (!cert.selecionado) return cert;
		});
	};

	$scope.isCertSelecionado = function (certs) {
		return certs.some(function (cert) {
			return cert.selecionado;
		});
	};

	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

});