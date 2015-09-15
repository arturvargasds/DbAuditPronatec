/* global angular */

angular.module("app").factory("certsAPI", function ($http, config) {
	
	var _getCertificadoras = function () {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/certificadoras");
	};

	var _getCertificadora = function (id) {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/certificadoras/" + id);
	};

	var _saveCertificadoras= function (certificadora) {
		return $http.post(config.baseUrl + "DbAuditPronatec-3.2/api/certificadoras", certificadora);
	};

	return {
		getCertificadoras: _getCertificadoras,
		getCertificadora : _getCertificadora,
		saveCertificadoras: _saveCertificadoras
	};
});