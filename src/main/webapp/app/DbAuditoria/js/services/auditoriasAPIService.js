/* global angular */

angular.module("app").factory("auditoriasAPI", function ($http, config) {
	var _getAuditorias = function () {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/auditorias");
	};

	var _getAuditoria = function (id) {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/auditorias/" + id);
	};

	var _saveAuditoria = function (auditoria) {
		return $http.post(config.baseUrl + "DbAuditPronatec-3.2/api/auditorias", auditoria);
	};

	return {
		getAuditorias : _getAuditorias,
		getAuditoria  : _getAuditoria,
		saveAuditoria : _saveAuditoria
	};
});