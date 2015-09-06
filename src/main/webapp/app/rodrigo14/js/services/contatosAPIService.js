angular.module("listaTelefonica").factory("contatosAPI", function ($http, config) {
	var _getContatos = function () {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/app/rodrigo14/dados/cidade.json");
	};

	var _getContato = function (id) {
		return $http.get(config.baseUrl + "/cidades/" + id);
	};

	var _saveContato = function (cidade) {
		return $http.post(config.baseUrl + "/cidades", cidade);
	};

	return {
		getContatos: _getContatos,
		getContato: _getContato,
		saveContato: _saveContato
	};
});