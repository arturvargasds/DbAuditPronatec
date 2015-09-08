/* global angular */

angular.module("app").config(function ($routeProvider) {
        $routeProvider.when("/", {
                templateUrl: "home.html", 
                controller: "HomeCtrl"
		
	});
        $routeProvider.when("/cidades", {
            templateUrl: "cidades/listCidade.html",
            controller: "CidadesCtrl",
            resolve: {
                    cidades: function (cidadesAPI) {
                            return cidadesAPI.getCidades();
                    }       
            }
        });
   
	$routeProvider.when("/CadCidades", {
		templateUrl: "cidades/cadastro.html",
		controller: "cadCidadeCtrl"
	});
        
	$routeProvider.when("/EditarCid/:id", {
		templateUrl: "cidades/editarCidade.html",
		controller: "EditarCidCtrl",
		resolve: {
			cidade: function (cidadesAPI, $route) {
				return cidadesAPI.getCidade($route.current.params.id);
			}
		}
	});
	$routeProvider.otherwise({redirectTo: "/cidades"});
});