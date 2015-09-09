app.controller('equipeAuditorCtrl', function($scope, equipeAuditorService) {
    $scope.list = equipeAuditorService.get();
});