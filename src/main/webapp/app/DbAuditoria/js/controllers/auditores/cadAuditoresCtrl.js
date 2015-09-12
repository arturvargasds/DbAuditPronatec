/* global angular */

angular.module("app").controller("cadAuditoresCtrl", function ($scope, bairrosAPI, $location) {
	

	$scope.adicionarAuditores = function (auditores) {
	
		bairrosAPI.saveAuditores(auditores).success(function (data) {
			delete $scope.auditores;
			$scope.auditoresForm.$setPristine();
			$location.path("/auditores");
		});
	};
});