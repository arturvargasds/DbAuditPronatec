/* global angular, ocorrencia */

angular.module("app").controller("EditarCidCtrl", function ($scope, $routeParams, ocorrencia) {

	$scope.ocorrencia = ocorrencia.data.list;
});