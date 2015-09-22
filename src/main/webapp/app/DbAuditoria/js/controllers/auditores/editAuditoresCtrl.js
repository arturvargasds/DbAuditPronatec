angular.module("app").controller("editAuditoresCtrl", function ($scope, $routeParams, auditor, auditoresAPI, $location) {

	$scope.auditor = auditor.data;

	$scope.adicionarAuditor = function (auditor) {	
		auditoresAPI.saveAuditor(auditor).success(function (data) {
			delete $scope.auditor;
			$scope.auditorForm.$setPristine();
			$location.path("/auditores");
		});
	};

});