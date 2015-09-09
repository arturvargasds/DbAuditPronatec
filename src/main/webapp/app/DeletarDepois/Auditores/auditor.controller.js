app.controller('auditorCtrl', function($scope, auditorService) {
    $scope.list = auditorService.get();
});