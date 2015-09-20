/* global angular */

angular.module("app").factory("equipeAuditoresAPI", function ($http, config) {
	var _getEquipeauditores = function () {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/equipeauditores");
	};

	var getEquipeauditor = function (id) {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/equipeauditores/" + id);
	};

	var _saveEquipeAuditor= function (equipeauditor) {
		return $http.post(config.baseUrl + "DbAuditPronatec-3.2/api/equipeauditores", equipeauditor);
	};

	return {
		getEquipeauditores: _getEquipeauditores,
		getEquipeauditor  : getEquipeauditor,
		saveEquipeAuditor : _saveEquipeAuditor
	};
});