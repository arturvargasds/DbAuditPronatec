/* global angular */

angular.module("app").factory("auditoresAPI", function ($http, config) {
	
	var _getAuditores = function () {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/auditores");
	};

	var _getAuditor = function (id) {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/auditores/" + id);
	};

	var _saveAuditor= function (auditor) {
		return $http.post(config.baseUrl + "DbAuditPronatec-3.2/api/auditores", auditor);
	};

	return {
		getAuditores: _getAuditores,
		getAuditor  : _getAuditor,
		saveAuditor : _saveAuditor
	};
});