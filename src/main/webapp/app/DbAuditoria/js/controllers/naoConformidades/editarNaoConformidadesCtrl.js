angular.module("app").controller("editarNaoConformidadesCtrl", function ($scope, $routeParams, NC) {

	$scope.NC = NC.data.list;
});