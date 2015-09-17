/* global angular */

angular.module("app").controller("editEqAuditsCtrl", function ($scope, $routeParams, equipeauditor) {

	$scope.equipeauditor = equipeauditor.data.list;
});