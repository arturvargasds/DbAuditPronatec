/* global angular, equipeAuditoresAPI */

angular.module("app").controller("cadEqAuditsCtrl", function ($scope, equipeAuditoresAPI, $location) {
	

	$scope.adicionarEquipeAuditor = function (equipeauditor) {	
		equipeAuditoresAPI.saveEquipeAuditor(equipeauditor).success(function (data) {
			delete $scope.equipeauditor;
			$scope.EquipeAuditoresForm.$setPristine();
			$location.path("/equipeAuditores");
		});
	};
});