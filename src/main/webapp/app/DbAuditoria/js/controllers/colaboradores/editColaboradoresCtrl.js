/* global angular */

angular.module("app").controller("editColaboradoresCtrl", function ($scope, $routeParams, colaborador) {

	$scope.colaborador = colaborador.data.list;
});