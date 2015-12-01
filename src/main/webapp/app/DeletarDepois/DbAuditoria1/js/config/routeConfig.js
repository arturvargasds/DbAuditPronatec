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
        
        //*****************************************************************Auditores
                   $routeProvider.when("/auditores", {
            templateUrl: "auditores/listAuditore.html",
            controller: "AuditoresCtrl",
            resolve: {
                    auditores: function (auditoresAPI) {
                            return auditoresAPI.getAuditores();
                    }       
            }
        });
        	$routeProvider.when("/CadAuditores", {
		templateUrl: "auditores/cadasAuditore.html",
		controller: "cadAuditoreCtrl"
	});
        
	$routeProvider.when("/EditarBai/:id", {
		templateUrl: "auditores/editarAuditore.html",
		controller: "EditarBaiCtrl",
		resolve: {
			bairro: function (auditoresAPI, $route) {
				return auditoresAPI.getAuditore($route.current.params.id);
			}
		}
	});
        
        //********************************************final

//*****************************************************************Auditores
    $routeProvider.when("/auditores", {
    templateUrl: "auditores/listAuditores.html",
    controller: "AuditoresCtrl",
    resolve: {
             auditores: function (auditoresAPI){
             return auditoresAPI.getAuditores();
             }       
             }
    });
    
    
    $routeProvider.when("/cadAuditores", {
	templateUrl: "auditores/cadAuditores.html",
	controller: "cadAuditoresCtrl"
	});
    
        
	$routeProvider.when("/editAuditores/:id", {
	templateUrl: "auditores/ediAuditores.html",
	controller: "editAuditoresCtrl",
	resolve: {
			 bairro: function (auditoresAPI, $route) {
			 return auditoresAPI.getAuditores($route.current.params.id);
			 }
		     }
	});
        
//********************************************final 
    
    
    
	$routeProvider.otherwise({redirectTo: "/"});
});