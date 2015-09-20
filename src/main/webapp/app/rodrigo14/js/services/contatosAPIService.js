angular.module("listaTelefonica").factory("contatosAPI", function ($http, config) {
	var _getContatos = function () {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/app/rodrigo14/dados/contatos.json");
	};

	var _getContato = function (id) {
		return $http.get(config.baseUrl + "/DbAuditPronatec-3.2/app/rodrigo14/dados/contatos.json/" + id);
	};

	var _saveContato = function (contato) {
		return $http.post(config.baseUrl + "DbAuditPronatec-3.2/app/rodrigo14/dados/contatos.json", contato);
	};

	return {
		getContatos: _getContatos,
		getContato: _getContato,
		saveContato: _saveContato
	};
});