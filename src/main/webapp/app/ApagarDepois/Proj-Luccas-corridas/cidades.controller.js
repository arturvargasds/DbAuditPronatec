app.controller('cidadesCtrl', function($scope, cidadesService) {
    $scope.list = cidadesService.get();
});