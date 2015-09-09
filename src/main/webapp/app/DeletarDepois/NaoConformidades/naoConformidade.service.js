app.service('naoConformidadeService', function($http) {
    this.get = function() {
        $http
            .get('http://127.0.0.1:8080/DbAuditPronatec-3.2/api/naoConformidade/')
            .success(function(data) {
                alert(1);    
            });
    };
});