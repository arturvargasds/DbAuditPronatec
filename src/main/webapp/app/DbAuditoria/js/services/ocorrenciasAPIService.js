/* global angular */

angular.module("app").factory("ocorrenciasAPI", function ($http, config) {
	var _getOcorrencias = function () {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/ocorrencias");
	};

	var _getOcorrencia = function (id) {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/ocorrencias/" + id);
	};

	var _saveOcorrencia= function (ocorrencias) {
		return $http.post(config.baseUrl + "DbAuditPronatec-3.2/api/ocorrencias", ocorrencias);
	};

	return {
		getOcorrencias: _getOcorrencias,
		getOcorrencia: _getOcorrencia,
		saveOcorrencia: _saveOcorrencia
	};
        
       //  this.getToday = function(){
        // return new Date();
         // };
});