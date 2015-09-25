/* global angular */

angular.module("app").controller("editAuditoriasCtrl", function ($scope, $routeParams, auditoria) {

	$scope.auditoria = auditoria.data.list;
});