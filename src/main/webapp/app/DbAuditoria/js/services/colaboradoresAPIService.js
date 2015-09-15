/* global angular */

angular.module("app").factory("colaboradoresAPI", function ($http, config) {

	var _getColaboradores = function () {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/colaboradores");
	};

	var _getColaborador = function (id) {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/colaboradores" + id);
	};

	var _saveColaborador= function (colaborador) {
		return $http.post(config.baseUrl + "DbAuditPronatec-3.2/api/colaboradores", colaborador);
	};

	return {
		getColaboradores: _getColaboradores,
		getColaborador : _getColaborador,
		saveColaborador: _saveColaborador
	};
});