angular.module("app").controller("cadNCsCtrl", function ($scope, NCsAPI, $location) {
	

	$scope.adicionarNC = function (nc) {
	
		NCsAPI.saveNC(nc).success(function (data) {
			delete $scope.nc;
			$scope.NCForm.$setPristine();
			$location.path("/naoConformidades");
		});
	};
});