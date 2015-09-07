app.controller('bairrosCtrl', function($scope, bairrosService) {
    $scope.list = bairrosService.get();
});