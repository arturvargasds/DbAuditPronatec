angular.module("app").controller("editAuditoresCtrl", function ($scope, $routeParams, auditores) {

	$scope.auditores = auditores.data.list;
});