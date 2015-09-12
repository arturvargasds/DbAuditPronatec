/* global angular */

angular.module("app").factory("NCsAPI", function ($http, config) {
	var _getNCs = function () {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/naoconformidades");
	};

	var _getNC = function (id) {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/naoconformidades" + id);
	};

	var _saveNC = function (NC) {
		return $http.post(config.baseUrl + "DbAuditPronatec-3.2/api/naoconformidades", NC);
	};

	return {
		getNCs: _getNCs,
		getNC : _getNC,
		saveNC: _saveNC
	};
});