app.service('bairrosService', function($http,$rootScope) {
    this.get = function() {
     //   $http.get('http://localhost:8080/DbAuditPronatec-3.2/api/bairros')
      $http.get('http://localhost:8080/DbAuditPronatec-3.2/app/Bairros/bairros.json')         
            .success(function(data) {
             $rootScope.bairros = data;    
            });
    };
});