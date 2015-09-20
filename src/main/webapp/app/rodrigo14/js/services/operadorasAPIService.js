angular.module("listaTelefonica").service("cidadesAPI", function ($http, config) {
	this.getCidades = function () {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/colaboradores");
	};
});