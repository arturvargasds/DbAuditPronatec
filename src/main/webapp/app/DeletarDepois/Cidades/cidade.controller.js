app.controller('cidadeCtrl', function($scope, cidadesService) {
    $scope.list = cidadesService.get();
});