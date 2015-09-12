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
	templateUrl: "auditores/editAuditores.html",
	controller: "editAuditoresCtrl",
	resolve: {
			 auditores: function (auditoresAPI, $route) {
			 return auditoresAPI.getAuditores($route.current.params.id);
			 }
		     }
	});
        
        //**********************************************************Certificadoras
        $routeProvider.when("/certificadoras", {
            templateUrl: "certificadoras/listCertificadoras.html",
            controller: "CertificadorasCtrl",
            resolve: {
                    certificadoras: function (certificadorasAPI) {
                            return certificadorasAPI.getCertificadoras();
                    }       
            }
        });
        
        $routeProvider.when("/CadCertificadoras", {
		templateUrl: "certificadoras/cadasCertificadora.html",
		controller: "cadCertificadoraCtrl"
	});
        
	$routeProvider.when("/editarCertificadorasCtrl/:id", {
		templateUrl: "certificadora/editarCerticadora.html",
		controller: "editarCertificadorasCtrl",
		resolve: {
			certificadora: function (certificadorasAPI, $route) {
				return certificadorasAPI.getCertificadora($route.current.params.id);
			}
		}
	});
        
        //***********************************************************cidades
        $routeProvider.when("/ocorrencias", {
            templateUrl: "ocorrencias/listOcorrencias.html",
            controller: "OcorrenciasCtrl",
            resolve: {
                    ocorrencias: function (ocorrenciasAPI) {
                            return ocorrenciasAPI.getOcorrencias();
                    }       
            }
        });
        
//********************************************final 
        
        
	$routeProvider.otherwise({redirectTo: "/"});
});