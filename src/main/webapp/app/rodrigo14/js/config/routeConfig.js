angular.module("listaTelefonica").config(function ($routeProvider) {
	$routeProvider.when("/contatos", {
		templateUrl: "view/contato.html",
		controller: "listaTelefonicaCtrl",
		resolve: {
			contatos: function (contatosAPI) {
				return contatosAPI.getContatos();
			},
                       cidades: function (cidadesAPI) {
				return cidadesAPI.getCidades();
			}
		}
	});
	$routeProvider.when("/novoContato", {
		templateUrl: "view/novoContato.html",
		controller: "novoContatoCtrl",
		resolve: {
			cidades: function (cidadesAPI) {
				return cidadesAPI.getCidades();
			}
                        /*
                         * operadoras: function (operadorasAPI) {
				return operadorasAPI.getOperadoras();
			}
                         */
		}
	});
	$routeProvider.when("/detalhesContato/:id", {
		templateUrl: "view/detalhesContato.html",
		controller: "detalhesContatoCtrl",
		resolve: {
			contato: function (contatosAPI, $route) {
				return contatosAPI.getContato($route.current.params.id);
			}
		}
	});
	$routeProvider.otherwise({redirectTo: "/contatos"});
});