angular.module("app").controller("cadNCsCtrl", function ($scope, NCsAPI, $location) {
	

	$scope.adicionarNC = function (NC) {
	
		NCsAPI.saveNC(NC).success(function (data) {
			delete $scope.NC;
			$scope.NCForm.$setPristine();
			$location.path("/naoConformidades");
		});
	};
});