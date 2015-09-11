/* global angular */

angular.module("app").factory("NCAPI", function ($http, config) {
	var _getNaoConformidades = function () {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/naoconformidades");
	};

	var _getNaoConformidade = function (id) {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/naoconformidades/" + id);
	};

	var _saveNaoConformidades = function (NC) {
		return $http.post(config.baseUrl + "DbAuditPronatec-3.2/api/naoconformidades", NC);
	};

	return {
		getNaoConformidades: _getNaoConformidades,
		getNaoConformidade: _getNaoConformidades,
		saveNaoConformidades: _saveNaoConformidades
	};
});