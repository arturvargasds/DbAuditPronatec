/* global angular */

angular.module("app").factory("cepsAPI", function ($http, config) {
	var _getCeps = function () {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/ceps");
	};

	var _getCep = function (id) {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/ceps/" + id);
	};

	var _saveCep = function (cep) {
		return $http.post(config.baseUrl + "DbAuditPronatec-3.2/api/ceps", cep);
	};

	return {
		getCeps: _getCeps,
		getCep: _getCep,
		saveCep: _saveCep
	};
});