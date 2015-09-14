/* global angular */

angular.module("app").factory("certsAPI", function ($http, config) {
	
	var _getCerts = function () {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/certificadoras");
	};

	var _getCert = function (id) {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/certificadoras/" + id);
	};

	var _saveCert= function (cert) {
		return $http.post(config.baseUrl + "DbAuditPronatec-3.2/api/certificadoras", cert);
	};

	return {
		getCerts: _getCerts,
		getCert : _getCert,
		saveCert: _saveCert
	};
});