/* global angular */

angular.module("app").factory("cidadesAPI", function ($http, config) {
	var _getCidades = function () {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/cidades");
	};

	var _getCidade = function (id) {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/cidades/" + id);
	};

	var _saveCidade = function (cidade) {
		return $http.post(config.baseUrl + "DbAuditPronatec-3.2/api/cidades", cidade);
	};

	return {
		getCidades: _getCidades,
		getCidade: _getCidade,
		saveCidade: _saveCidade
	};
});