/* global angular */

angular.module("app").factory("bairrosAPI", function ($http, config) {
	var _getBairros = function () {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/bairros");
	};

	var _getCidade = function (id) {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/cidades/" + id);
	};

	var _saveCidade= function (bairro) {
		return $http.post(config.baseUrl + "DbAuditPronatec-3.2/api/cidades", bairro);
	};

	return {
		getBairros: _getBairros,
		getCidade: _getCidade,
		saveCidade: _saveCidade
	};
});