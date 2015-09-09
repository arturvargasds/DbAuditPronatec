/* global angular */

angular.module("app").factory("bairrosAPI", function ($http, config) {
	var _getBairros = function () {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/bairros");
	};

	var _getBairro = function (id) {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/bairros/" + id);
	};

	var _saveBairro = function (bairro) {
		return $http.post(config.baseUrl + "DbAuditPronatec-3.2/api/bairros", bairro);
	};

	return {
		getBairros: _getBairros,
		getBairro: _getBairro,
		saveBairro: _saveBairro
	};
});