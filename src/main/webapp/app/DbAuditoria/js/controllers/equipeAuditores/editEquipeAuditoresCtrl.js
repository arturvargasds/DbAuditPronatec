angular.module("app").controller("editEquipeAuditoresCtrl", function ($scope, $routeParams, EquipeAuditor) {

	$scope.EquipeAuditor = EquipeAuditor.data.list;
});