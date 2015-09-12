angular.module("app").controller("cadAuditoresCtrl", function ($scope, auditoresAPI, $location) {
	

	$scope.adicionarAuditor = function (auditor) {
	
		auditoresAPI.saveAuditor(auditor).success(function (data) {
			delete $scope.auditor;
			$scope.auditoresForm.$setPristine();
			$location.path("/auditores");
		});
	};
});