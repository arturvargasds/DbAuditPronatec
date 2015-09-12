angular.module("app").config(function ($routeProvider) {
    
    $routeProvider.when("/", {
        templateUrl: "home.html", 
        controller : "HomeCtrl"		
	}); 
    
//***********************************************************cidades
    $routeProvider.when("/cidades", {
        templateUrl: "cidades/listCidade.html",
        controller : "CidadesCtrl",
        resolve    : {
            cidades: function (cidadesAPI){
            return cidadesAPI.getCidades();
            }       
        }
    });
    
	$routeProvider.when("/CadCidades", {
		templateUrl: "cidades/cadastro.html",
		controller : "cadCidadeCtrl"
	});
        
	$routeProvider.when("/EditarCid/:id", {
		templateUrl: "cidades/editarCidade.html",
		controller : "EditarCidCtrl",
		resolve    : {
			cidade: function (cidadesAPI, $route) {
			return cidadesAPI.getCidade($route.current.params.id);
			}
		}
    });
        
//*****************************************************************Bairros
    $routeProvider.when("/bairros", {
        templateUrl: "bairros/listBairro.html",
        controller : "BairrosCtrl",
        resolve    : {
            bairros: function (bairrosAPI) {
            return bairrosAPI.getBairros();
            }       
        }
    });
    
    $routeProvider.when("/CadBairros", {
		templateUrl: "bairros/cadasBairro.html",
		controller : "cadBairroCtrl"
	});
        
	$routeProvider.when("/EditarBai/:id", {
		templateUrl: "bairros/editarBairro.html",
		controller : "EditarBaiCtrl",
		resolve    : {
            bairro : function (bairrosAPI, $route) {
            return bairrosAPI.getBairro($route.current.params.id);
			}
		}
	});        
        
//*****************************************************************Nao Conformidades
    $routeProvider.when("/NCs", {
        templateUrl: "naoConformidades/listNCs.html",
        controller : "listNCsCtrl",
        resolve    :{
            NCs: function (NCsAPI) {
            return NCsAPI.getNCs();
            }       
        }
    });
    
    $routeProvider.when("/cadNCs", {
        templateUrl: "naoConformidades/cadNCs.html",
        controller : "cadNCsCtrl"
	});
        
	$routeProvider.when("/editNCs/:id", {
        templateUrl: "naoConformidades/editNCs.html",
        controller : "editNCsCtrl",
        resolve    :{
            NC: function (NCsAPI, $route) {
            return NCsAPI.getNC($route.current.params.id);
            }
        }
	});
        
//*****************************************************************Auditores
    $routeProvider.when("/auditores", {
        templateUrl: "auditores/listAuditores.html",
        controller : "AuditoresCtrl",
        resolve    : {
            auditores: function (auditoresAPI){
            return auditoresAPI.getAuditores();
            }       
        }
    });    
    
    $routeProvider.when("/cadAuditores", {
        templateUrl: "auditores/cadAuditores.html",
        controller : "cadAuditoresCtrl"
	});
    
        
	$routeProvider.when("/editAuditores/:id", {
        templateUrl: "auditores/editAuditores.html",
        controller : "editAuditoresCtrl",
        resolve    : {
            auditores: function (auditoresAPI, $route) {
            return auditoresAPI.getAuditores($route.current.params.id);
            }
        }
	});
        
//**********************************************************Certificadoras
    $routeProvider.when("/certs", {
        templateUrl: "certificadoras/listCerts.html",
        controller : "listCertsCtrl",
        resolve    : {
            certs: function (certsAPI) {
            return certsAPI.getCerts();
            }       
        }
    });

    $routeProvider.when("/cadCerts", {
        templateUrl: "certificadoras/cadCerts.html",
        controller : "cadCertsCtrl"
    });

    $routeProvider.when("/editCertCtrl/:id", {
        templateUrl: "certificadoras/editCerts.html",
        controller : "editCertsCtrl",
        resolve    : {
            cert: function (certsAPI, $route) {
            return certsAPI.getCert($route.current.params.id);
            }
        }
    });
        
//***********************************************************cidades
     $routeProvider.when("/ocorrencias", {
         templateUrl: "ocorrencias/listOcorrencias.html",
         controller : "OcorrenciasCtrl",
         resolve    : {
             ocorrencias: function (ocorrenciasAPI) {
             return ocorrenciasAPI.getOcorrencias();
             }       
         }
     });
        
//********************************************final        
        
	$routeProvider.otherwise({redirectTo: "/"});
});