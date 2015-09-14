angular.module("app").controller("editEqAuditsCtrl", function ($scope, $routeParams, EquipeAuditor) {

	$scope.EquipeAuditor = EquipeAuditor.data.list;
});