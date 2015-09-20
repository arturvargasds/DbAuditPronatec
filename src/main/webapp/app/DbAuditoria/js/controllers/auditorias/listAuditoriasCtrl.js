/* global angular, auditorias, auditoriasAPI */

angular.module("app").controller("listAuditoriasCtrl", function ($scope, auditorias) {
	$scope.app = "DbAuditoria";
	$scope.auditorias = auditorias.data.list;
        
 
	$scope.adicionarAuditoria= function (auditoria) {		
		auditoriasAPI.saveAuditoria(auditoria).success(function (data) {
                    $scope.auditoria.statusaudit ="A";
			delete $scope.auditoria;
			$scope.auditoriasForm.$setPristine();
			carregarAuditorias();
		});
	};
    
	$scope.apagarAuditorias = function (auditorias) {
		$scope.auditorias =  auditorias.filter(function (auditoria) {
			if (!auditoria.selecionado) return auditoria;
		});
	};
    
	$scope.isAuditoriaSelecionado = function (auditorias) {
		return auditorias.some(function (auditoria) {
			return auditoria.selecionado;
		});
	};
    
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
	
	
});