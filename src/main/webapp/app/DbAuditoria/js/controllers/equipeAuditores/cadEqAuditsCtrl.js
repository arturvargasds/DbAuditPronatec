/* global angular, equipeAuditoresAPI */

angular.module("app").controller("cadEqAuditsCtrl", function ($scope, eqAuditsAPI, $location) {	

	$scope.adicionarEqAudit = function (eqAudit) {	
		eqAuditsAPI.saveEqAudit(eqAudit).success(function (data) {
			delete $scope.eqAudit;
			$scope.EquipeAuditoresForm.$setPristine();
			$location.path("/eqAudits");
		});
	};
});