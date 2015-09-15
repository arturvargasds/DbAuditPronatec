/* global angular */

angular.module("app").factory("checklistsAPI", function ($http, config) {
	var _getChecklists = function () {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/checklists");
	};

	var _getChecklist = function (id) {
		return $http.get(config.baseUrl + "DbAuditPronatec-3.2/api/checklists/" + id);
	};

	var _saveChecklist = function (bairro) {
		return $http.post(config.baseUrl + "DbAuditPronatec-3.2/api/checklists", checklist);
	};

	return {
		getChecklists: _getChecklists,
		getChecklist : _getChecklist,
		saveChecklist: _saveChecklist
	};
});