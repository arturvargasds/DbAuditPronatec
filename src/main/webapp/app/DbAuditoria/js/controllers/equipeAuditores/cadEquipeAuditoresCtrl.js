/* global angular */

angular.module("app").controller("cadEquipeAuditoresCtrl", function ($scope, EquipeAuditoresAPI, $location) {
	

	$scope.adicionarEquipeAuditor = function (EquipeAuditor) {
	
		EquipeAuditoresAPI.saveEquipeAuditor(EquipeAuditor).success(function (data) {
			delete $scope.EquipeAuditor;
			$scope.EquipeAuditorForm.$setPristine();
			$location.path("/EquipeAuditores");
		});
	};
});