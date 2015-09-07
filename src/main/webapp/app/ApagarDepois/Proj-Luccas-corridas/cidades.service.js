app.service('cidadesService', function($http,$rootScope) {
    this.get = function() {
        $http.get('http://localhost:8080/DbAuditPronatec-3.2/api/cidades/1')
            .success(function(data) {
             $rootScope.states = data;    
            });
    };
});