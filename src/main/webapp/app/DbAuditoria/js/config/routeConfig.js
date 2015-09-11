/* global angular */

angular.module("app").config(function ($routeProvider) {
        $routeProvider.when("/", {
                templateUrl: "home.html", 
                controller: "HomeCtrl"
		
	}); 
       //***********************************************************cidades
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
        
        //*****************************************************************Bairros
                   $routeProvider.when("/bairros", {
            templateUrl: "bairros/listBairro.html",
            controller: "BairrosCtrl",
            resolve: {
                    bairros: function (bairrosAPI) {
                            return bairrosAPI.getBairros();
                    }       
            }
        });
        	$routeProvider.when("/CadBairros", {
		templateUrl: "bairros/cadasBairro.html",
		controller: "cadBairroCtrl"
	});
        
	$routeProvider.when("/EditarBai/:id", {
		templateUrl: "bairros/editarBairro.html",
		controller: "EditarBaiCtrl",
		resolve: {
			bairro: function (bairrosAPI, $route) {
				return bairrosAPI.getBairro($route.current.params.id);
			}
		}
	});
        
        //********************************************final
        
        
        //*****************************************************************Nao Conformidades
                   $routeProvider.when("/naoConformidades", {
            templateUrl: "naoConformidades/listNaoConformidades.html",
            controller: "naoConformidadesCtrl",
            resolve: {
                    NC: function (NCAPI) {
                            return NCAPI.getNaoConformidades();
                    }       
            }
        });
        	$routeProvider.when("/CadNaoConformidades", {
		templateUrl: "naoConformidades/cadNaoConformidades.html",
		controller: "cadNaoConformidadesCtrl"
	});
        
	$routeProvider.when("/EditarNC/:id", {
		templateUrl: "naoConformidades/editarNaoConformidades.html",
		controller: "editarNaoConformidadesCtrl",
		resolve: {
			NC: function (NCAPI, $route) {
				return NCAPI.getNaoConformidade($route.current.params.id);
			}
		}
	});
        
        //********************************************final
        
	$routeProvider.otherwise({redirectTo: "/"});
});