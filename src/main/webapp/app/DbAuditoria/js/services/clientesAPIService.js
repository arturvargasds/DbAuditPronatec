/* global angular */

angular.module("app").factory("clientesAPI", function ($http, config) {
	var _getClientes = function () {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/clientes");
	};

	var _getCliente = function (id) {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/clientes/" + id);
	};

	var _saveCliente = function (cliente) {
		return $http.post(config.baseUrl + "DbAuditPronatec-3.2/api/clientes", cliente);
	};

	return {
		getClientes: _getClientes,
		getCliente: _getCliente,
		saveCliente: _saveCliente
	};
});