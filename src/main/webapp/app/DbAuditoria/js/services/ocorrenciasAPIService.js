/* global angular */

angular.module("app").factory("ocorrenciasAPI", function ($http, config) {
	var _getOcorrencias = function () {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/ocorrencias");
	};

	var _getCidade = function (id) {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/cidades/" + id);
	};

	var _saveCidade= function (ocorrencias) {
		return $http.post(config.baseUrl + "DbAuditPronatec-3.2/api/ocorrencias", ocorrencias);
	};

	return {
		getOcorrencias: _getOcorrencias,
		getCidade: _getCidade,
		saveCidade: _saveCidade
	};
});