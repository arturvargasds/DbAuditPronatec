

//---CONTROLLER 
serviceApp.controller('controlCidade', function($scope, $location, cidadeService) {

  $scope.filtro = "";
  
  $scope.today = cidadeService.getToday();
  $scope.letras = cidadeService.getLetters();

  $scope.addCidade = function() {
    cidadeService.addCidadeIntoCollection($scope.nome, $scope.sigla, $scope.status ); 
    $location.path('#cidades');
  };

  $scope.deleteCidade = function(index) {
    cidadeService.removeCidadeFromCollection(index); 
    $location.path('#cidades');
  };

});
