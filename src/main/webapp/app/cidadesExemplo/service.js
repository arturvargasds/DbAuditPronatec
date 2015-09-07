
/* global serviceApp */

serviceApp.service('cidadeService', function($http, $rootScope) {
  
  // público
  this.getLetters = function() {
    return "abcdefghijklmnopqrstuvwyz";
  };
  
  this.getToday = function(){
    return new Date();
  };
  
  this.addCidadeIntoCollection = function(nome, sigla, status) {
    // como acessar esta variável ?
    $rootScope.list.push({
      nomeCid: nome,
      siglaUf: sigla,
      statusCid:status
    });
  };

  this.removeCidadeFromCollection = function(i) {
    $rootScope.list.splice(i, 1);
  };  

  this.getCidade = function(callback) {
    $http.get('http://localhost:8080/DbAuditPronatec-3.2/api/cidades').success(callback);
  };

});


// Inicialização
serviceApp.run ( function($rootScope, cidadeService) {
  
  // carrega os estados
  cidadeService.getCidade(function(data){
    $rootScope.list = data.list;
    
    
  });
  
});

