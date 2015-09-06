angular.module("listaTelefonica").config(function ($routeProvider) {
	$routeProvider.when("/cidades", {
		templateUrl: "view/cidades.html",
		controller: "CidadesCtrl",
		resolve: {
			cidades: function (contatosAPI) {
				return contatosAPI.getContatos();
			}
			
		}
	});
	$routeProvider.when("/CadCidades", {
		templateUrl: "view/cadastro.html",
		controller: "cadCidadeCtrl"
		
	});
	$routeProvider.when("/detalhesContato/:id", {
		templateUrl: "view/detalhesContato.html",
		controller: "detalhesContatoCtrl",
		resolve: {
			cidade: function (contatosAPI, $route) {
				return contatosAPI.getContato($route.current.params.id);
			}
		}
	});
	$routeProvider.otherwise({redirectTo: "/cidades"});
});