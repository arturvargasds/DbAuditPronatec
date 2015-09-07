angular.module("app").service("ufsAPI", function ($http, config) {
	this.getUfs = function () {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/app/Cidade/dados/uf.json");
	};
});