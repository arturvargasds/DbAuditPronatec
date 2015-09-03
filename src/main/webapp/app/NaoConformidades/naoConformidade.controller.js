app.controller('naoConformidadeCtrl', function($scope, naoConformidadeService) {
    $scope.list = naoConformidadeService.get();
});