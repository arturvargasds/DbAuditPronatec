/* global angular */

angular.module("app").config(function ($routeProvider) {
    
    $routeProvider.when("/", {
        templateUrl: "home.html", 
        controller : "HomeCtrl"		
	}); 
        
   $routeProvider.when("/exemplo", {
    templateUrl: "exemploCliente/clientes.html", 
    controller : "exemploCtrl"		
    });
    
    $routeProvider.when("/settings-pills", {
    templateUrl: "exemploCliente/clientes.html", 
    controller : "cadexemploCtrl"		
    }); 
    
//***********************************************************cidades
    $routeProvider.when("/cidades", {
        templateUrl: "cidades/listCidades.html",
        controller : "CidadesCtrl",
        resolve    : {
            cidades: function (cidadesAPI){
            return cidadesAPI.getCidades();
            }       
        }
    });
    
    $routeProvider.when("/CadCidades", {
        templateUrl: "cidades/cadCidade.html",
        controller : "cadCidadeCtrl"
    });
        
    $routeProvider.when("/editarCidade/:id", {
        templateUrl: "cidades/editarCidade.html",
        controller : "editarCidCtrl",
        resolve    : {
            cidade: function (cidadesAPI, $route) {
            return cidadesAPI.getCidade($route.current.params.id);
            }
    }
    });
    
    $routeProvider.when("/deleteCidade/:id", {
        templateUrl: "cidades/listCidades.html",
        controller : "CidadesCtrl",
        resolve    : {
            cidade: function (cidadesAPI, $route) {
            return cidadesAPI.deleteCidade($route.current.params.id);
            },
             cidades: function (cidadesAPI){
             return cidadesAPI.getCidades();
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
            nc: function (NCsAPI, $route) {
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
        templateUrl: "auditores/cadAuditores.html",
        controller : "editAuditoresCtrl",
        resolve    : {
            auditor: function (auditoresAPI, $route) {
                return auditoresAPI.getAuditor($route.current.params.id);
            }
        }
    });

    $routeProvider.when("/deleteAuditor/:id", {
        templateUrl: "auditores/listAuditores.html",
        controller : "AuditoresCtrl",
        resolve    : {
            auditor: function (auditoresAPI, $route) {
                return auditoresAPI.deleteAuditor($route.current.params.id);
            },
            auditores: function (auditoresAPI){
                return auditoresAPI.getAuditores();
            } 
        }
    });
        
//**********************************************************Certificadoras
    $routeProvider.when("/certs", {
        templateUrl: "certificadoras/listCerts.html",
        controller : "listCertsCtrl",
        resolve    : {
            certificadoras: function (certsAPI) {
            return certsAPI.getCertificadoras();
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
            certificadora: function (certsAPI, $route) {
            return certsAPI.getCertificadora($route.current.params.id);
            }
        }
    });
        
//***********************************************************ocorrencias
    $routeProvider.when("/ocorrencias", {
        templateUrl: "ocorrencias/listOcorrencias.html",
        controller : "listOcorrenciasCtrl",
        resolve    : {
            ocorrencias: function (ocorrenciasAPI) {
                return ocorrenciasAPI.getOcorrencias();
            }       
        }
    });
     
    $routeProvider.when("/cadOcorrencias", {
       templateUrl: "ocorrencias/cadOcorrencias.html",
       controller : "cadOcorrenciasCtrl"
     });

    $routeProvider.when("/editOcorrencias/:id", {
        templateUrl: "ocorrencias/editOcorrencias.html",
        controller : "editOcorrenciasCtrl",
        resolve    : {
            ocorrencia: function (ocorrenciasAPI, $route) {
                return ocorrenciasAPI.getOcorrencia($route.current.params.id);
            }
        }
    });

    $routeProvider.when("/deleteOcorrencia/:id", {
        templateUrl: "ocorrencias/listOcorrencias.html",
        controller : "listOcorrenciasCtrl",
        resolve    : {
            auditor: function (ocorrenciasAPI, $route) {
                return ocorrenciasAPI.deleteOcorrencia($route.current.params.id);
            },
            ocorrencias: function (ocorrenciasAPI){
                return ocorrenciasAPI.getOcorrencias();
            } 
        }
    });
     
     //*********************************************Clientes
        $routeProvider.when("/clientes", {
            templateUrl: "clientes/listClientes.html",
            controller: "ClientesCtrl",
            resolve: {
                    clientes: function (clientesAPI) {
                            return clientesAPI.getClientes();
                    }       
            }
        });
        
        $routeProvider.when("/cadClientes", {
		templateUrl: "clientes/cadCliente.html",
		controller: "cadClientesCtrl"
	});
        
	$routeProvider.when("/editClientes/:id", {
		templateUrl: "clientes/editCliente.html",
		controller: "editClientesCtrl",
		resolve: {
			cliente: function (clientesAPI, $route) {
				return clientesAPI.getCliente($route.current.params.id);
			}
		}
	});
        
        $routeProvider.when("/deleteCliente/:id", {
        templateUrl: "clientes/listClientes.html",
        controller : "ClientesCtrl",
        resolve    : {
            cliente: function (clientesAPI, $route) {
                return clientesAPI.deleteCliente($route.current.params.id);
            },
            clientes: function (clientesAPI){
                return clientesAPI.getClientes();
            } 
        }
    });
            //***********************************************************ceps
        $routeProvider.when("/ceps", {
            templateUrl: "ceps/listCep.html",
            controller: "CepsCtrl",
            resolve: {
                   ceps: function (cepsAPI) {
                            return cepsAPI.getCeps();
                    }       
            }
        });
	$routeProvider.when("/CadCeps", {
		templateUrl: "ceps/cadastro.html",
		controller: "cadasCepsCtrl"
	});
        
	$routeProvider.when("/EditarCep/:id", {
		templateUrl: "ceps/editarCeps.html",
		controller: "editarCepCtrl",
		resolve: {
			cep: function (cepsAPI, $route) {
				return cepsAPI.getCep($route.current.params.id);
			}
		}
	});
 
            //********************************************Equipe Auditores
    $routeProvider.when("/equipeAuditores", {
    templateUrl: "equipeAuditores/listEquipeAuditores.html",
    controller : "listEAuditsCtrl",
    resolve    : {
        equipeauditores: function (equipeAuditoresAPI){
        return equipeAuditoresAPI.getEquipeauditores();
        }       
        }
    });    
    
    $routeProvider.when("/cadEquipeAuditores", {
        templateUrl: "equipeAuditores/cadEquipeAuditores.html",
        controller : "cadEqAuditsCtrl"   
    });
 
    $routeProvider.when("/editEquipeAuditores/:id", {
        templateUrl: "equipeAuditores/editEquipeAuditores.html",
        controller : "editEqAuditsCtrl",
        resolve    : {
             equipeauditores: function (equipeAuditoresAPI, $route) {
             return equipeAuditoresAPI.getEquipeauditores($route.current.params.id);
            }
        }
    });
        
         //********************************************Auditorias
    $routeProvider.when("/auditorias", {
        templateUrl: "auditorias/listAuditorias.html",
        controller : "listAuditoriasCtrl",
        resolve    : {
            auditorias: function (auditoriasAPI){
            return auditoriasAPI.getAuditorias();
            }       
        }
    }); 
   
    $routeProvider.when("/cadAuditorias", {
        templateUrl: "auditorias/cadAuditorias.html",
        controller : "cadAuditoriasCtrl",
        resolve    : {
            certificadoras: function (certsAPI) {
            return certsAPI.getCertificadoras();
            },
            clientes: function (clientesAPI) {
                            return clientesAPI.getClientes();
                    }
        }
    });
 
    $routeProvider.when("/editAuditorias/:id", {
        templateUrl: "auditorias/editAuditorias.html",
        controller : "editAuditoriasCtrl",
        resolve    : {
            auditoria: function (auditoriasAPI, $route) {
            return auditoriasAPI.getAuditoria($route.current.params.id);
            }, 
            certificadoras: function (certsAPI) {
            return certsAPI.getCertificadoras();
            },
            clientes: function (clientesAPI) {
            return clientesAPI.getClientes();
            }
        }
    });
   
    $routeProvider.when("/deleteAuditoria/:id", {
        templateUrl: "auditorias/listAuditorias.html",
        controller : "listAuditoriasCtrl",
        resolve    : {
            auditoria: function (auditoriasAPI, $route) {
            return auditoriasAPI.deleteAuditoria($route.current.params.id);
            },
            auditorias: function (auditoriasAPI){
            return auditoriasAPI.getAuditorias();
            } 
        }
    });

//***********************************************************Checklist
    $routeProvider.when("/checklists", {
        templateUrl: "checklists/listChecklist.html",
        controller : "checklistsCtrl",
        resolve    : {
            chekclists: function (checklistsAPI) {
                return checklistsAPI.getChecklists();
            }       
        }
    });

    $routeProvider.when("/cadChecklists", {
        templateUrl: "checklists/cadChecklist.html",
        controller : "cadChecklistsCtrl"
    });

    $routeProvider.when("/editChecklists/:id", {
        templateUrl: "checklists/editChecklist.html",
        controller : "editChecklistsCtrl",
        resolve    : {
            cidade: function (chekclistsAPI, $route) {
                return chekclistsAPI.getChekclist($route.current.params.id);
            }
        }
    });
            
//*****************************************************************Colaboradores
    $routeProvider.when("/colaboradores", {
        templateUrl: "colaboradores/listColaboradores.html",
        controller : "listColaboradoresCtrl",
        resolve    : {
            colaboradores: function (colaboradoresAPI){
            return colaboradoresAPI.getColaboradores();
            }       
        }
    });    
    
    $routeProvider.when("/cadColaboradores", {
        templateUrl: "colaboradores/cadColaboradores.html",
        controller : "cadColaboradoresCtrl"
    });
 
    $routeProvider.when("/editColaboradores/:id", {
    templateUrl: "colaboradores/editColaboradores.html",
    controller : "editColaboradoresCtrl",
    resolve    : {
        colaboradore: function (colaboradoresAPI, $route) {
        return colaboradoresAPI.getColaboradores($route.current.params.id);
        }
    }
    });
        
//********************************************final        
        
	$routeProvider.otherwise({redirectTo: "/"});
});
