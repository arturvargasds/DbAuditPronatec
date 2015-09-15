/* global angular */

angular.module("app").factory("equipeauditoresAPI", function ($http, config) {
	var _getEquipeauditores = function () {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/equipeauditores");
	};

	var _getEquipeAuditor = function (id) {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/equipeauditores/" + id);
	};

	var _saveEquipeAuditor= function (EquipeAuditor) {
		return $http.post(config.baseUrl + "DbAuditPronatec-3.2/api/equipeauditores", EquipeAuditor);
	};

	return {
		getEquipeauditores: _getEquipeauditores,
		getEquipeAuditor  : _getEquipeAuditor,
		saveEquipeAuditor : _saveEquipeAuditor
	};
});