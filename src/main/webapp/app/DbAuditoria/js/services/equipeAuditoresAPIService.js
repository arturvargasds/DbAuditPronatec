/* global angular */

angular.module("app").factory("equipeAuditoresAPI", function ($http, config) {
	var _getEquipeAuditores = function () {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/EquipeAuditores");
	};

	var _getEquipeAuditor = function (id) {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/EquipeAuditores/" + id);
	};

	var _saveEquipeAuditor= function (EquipeAuditor) {
		return $http.post(config.baseUrl + "DbAuditPronatec-3.2/api/EquipeAuditores", EquipeAuditor);
	};

	return {
		getEquipeAuditores: _getEquipeAuditores,
		getEquipeAuditor  : _getEquipeAuditor,
		saveEquipeAuditor : _saveEquipeAuditor
	};
});