angular.module("app").controller("editNCsCtrl", function ($scope, $routeParams, nc, NCsAPI, $location) {

	$scope.nc = nc.data;

	$scope.adicionarNC = function (nc) {	
		NCsAPI.saveNC(nc).success(function (data) {
			delete $scope.nc;
			$scope.NCForm.$setPristine();
			$location.path("/NCs");
		});
	};
});