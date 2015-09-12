/* global angular */

angular.module("app").factory("auditoresAPI", function ($http, config) {
	var _getAuditores = function () {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/auditores");
	};

	var _getAuditor = function (id) {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/auditores/" + id);
	};

	var _saveAuditores= function (auditores) {
		return $http.post(config.baseUrl + "DbAuditPronatec-3.2/api/auditores", auditores);
	};

	return {
		getAuditores: _getAuditores,
		getAuditor: _getAuditor,
		saveAuditores: _saveAuditores
	};
});