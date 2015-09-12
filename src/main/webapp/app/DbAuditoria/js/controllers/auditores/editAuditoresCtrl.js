angular.module("app").controller("editAuditoresCtrl", function ($scope, $routeParams, auditor) {

	$scope.auditor = auditor.data.list;
});