angular.module("app").service("ufsAPI", function ($http, config) {
	this.getUfs = function () {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/app/rodrigo14/dados/uf.json");
	};
});