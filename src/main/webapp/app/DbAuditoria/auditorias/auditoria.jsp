<%-- 
    Document   : auditoria
    Created on : 23/09/2015, 06:09:24
    Author     : pedrinho
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<style type="text/css">

</style>

<div id="page-wrapper">     <br>
  <div class="row">
   <div class="col-lg-12">
     <div class="panel panel-info">
       <div class="panel-heading">
           <h4> Cadastro Auditorias </h4>   
       </div>  <br>
       <div class="container-fluid" >
            <!--  < style="background-color: #dff0d8;">  -->
         
	<form name="auditoriasForm"  id="formAu">
 
                 <div class="row"> <p> 
            <!--*************************************************************Certificadoras-->
                <div class="col-md-6"> 
                    <div class="panel panel-red">
                        <div class="panel-heading">
                         Empresas Certificadoras
                        </div>
                        
                        <div class="panel-body">
                           <div class="col-lg-12">  <label>Certificadora</label>    <input class="form-control"    type="number" ng-model="auditoria.idCert  " name="certi" placeholder="Codigo Certificadora"  ng-required="true" /> </div>
                          
                             <div ng-show="auditoriasForm.certi.$dirty" ng-messages="auditoriasForm.certi.$error">
		                <div ng-message="required" class="alert alert-danger">
			               Por favor, preencha o campo Codigo da Certificadora!
		                </div>
	                     </div>
                             
                             <div class="col-lg-12">
                                 <select class="form-control" ng-model="certificadora" ng-options="certificadora.fantaCert + ' ( ' + (certificadora.id) + ' )' for certificadora in certificadoras | orderBy:'id'">
		        	    <option value="">Lista de Certificadora</option>
		                 </select>
                             </div>
                             <hr>
                            <div >
                               <a class="btn btn-outline btn-success  btn-sm glyphicon glyphicon-pencil "   name="salvar" href="#/cadCerts" > Nova Certificadora</a>
                            </div>
                        </div>
                       
                    </div>
                </div> 
                                 
        <!--*************************************************************Clientes-->
                <div class="col-lg-6"> 
                    <div class="panel panel-red">
                        <div class="panel-heading">
                          Empresas Clientes
                        </div>
                        
                        <div class="panel-body">
                            <div class="col-lg-12">  <label>Clientes</label>  <input class="form-control"  type="number" ng-model="auditoria.idCli " name="clie" placeholder="Codigo Cliente"  ng-required="true"/> </div>
                             <div ng-show="auditoriasForm.clie.$dirty" ng-messages="auditoriasForm.clie.$error">
		                <div ng-message="required" class="alert alert-danger">
			               Por favor, preencha o campo Codigo da Cliente!
		                </div>                              
	                     </div>
                            
                             <div class="col-lg-12">
                                 <select class="form-control" ng-model="cliente" ng-options="cliente.fantaCli + ' ( ' + (cliente.id) + ' )' for cliente in clientes | orderBy:'id'">		        	
                                  <option value="">lista de Clientes</option>
                                  </select>
                             </div>   
                            <div >
                               <a class="btn btn-outline btn-success  btn-sm glyphicon glyphicon-pencil "   name="salvar" href="#/CadClientes" > Novo Clientes</a>
                            </div>
                       </div>
                    </div>
                </div> <p>
                 </div>    <p>   
                      
        <!-- ***************************************************************************dados Auditorias -->            
               <div class="row"> <p>       
               <div class="col-lg-12"> 
                <div class="panel panel-red">
                   <div class="panel-heading">
                       Dados da Auditorias
                    </div>
                        
                        <div class="panel-body">
                           <div class="panel-collapse">
                               <input class="form-control" type="hidden" ng-model="auditoria.descriAudit " id="desc" name="descr" placeholder="Descrição Auditoria" 
                                  ng-required="true" ng-minlength="1" ng-maxlength="400"/>
          
                               <div  class="col-lg-12"> <label>Descrição Auditoria</label>  <textarea class="form-control" pattern="[A-Za-z]++"  type="text" ng-model="auditoria.descriAudit " name="descr"  placeholder="Descrição....." ng-required="true" required="" ng-minlength="10" ng-maxlength="500"></textarea> </div>
        <!--************************************************  Validadção dos campos *****************************************-->
                               <div ng-show="auditoriasForm.descr.$dirty" ng-messages="auditoriasForm.descr.$error">
		                    <div ng-message="required" class="alert alert-danger">
			                      Por favor, preencha o campo Descrição !
		                    </div>
                                   <div ng-message="minlength" class="alert alert-danger">
                                              O campo Descrição deve ter no minimo 10 caracteres.
                                    </div>
                                    <div ng-message="maxlength" class="alert alert-danger">
                                              O campo Descriçãos deve ter no maximo 500 caracteres.
                                    </div>
	                      </div><br>
                           </div>
                        </div> 
                        
                        <div class="panel-body">
                           <div class="panel-collapse">
                               <input class="form-control" iu-date type="hidden" ng-model="auditoria.descriObjAudit" name="obj"  placeholder="Objetivo...." ng-required="true" ng-minlength="1" ng-maxlength="500"/>

                               <div class="col-lg-12"> <label>Objetivo Auditoria</label> <textarea class="form-control" iu-date type="text" ng-model="auditoria.descriObjAudit" name="obj"  placeholder="Objetivo Auditoria" ng-required="true" ng-minlength="10" ng-maxlength="400"/></textarea> </div>
        <!--************************************************  Validadção dos campos *****************************************-->
                              <div ng-show="auditoriasForm.obj.$dirty" ng-messages="auditoriasForm.obj.$error">
		                    <div ng-message="required" class="alert alert-danger">
			                      Por favor, preencha o campo Objetivo !
		                    </div>
                                   <div ng-message="minlength" class="alert alert-danger">
                                              O campo Objetivo deve ter no minimo 10 caracteres.
                                    </div>
                                    <div ng-message="maxlength" class="alert alert-danger">
                                              O campo Objetivo deve ter no maximo 500 caracteres.
                                    </div>
	                       </div><br>
                          
                           </div>
                        </div>
                </div>
              </div>  
            </div>  <p>
                           
       <!-- ***************************************************************************data e hora -->
             <div class="row"> <p>
                     
              <div class="col-md-3">
                <div class="panel panel-default">
                        <div class="panel-heading">
                           Data do cadastro
                        </div>
                    <div class="panel-body" style="text-align: center;"> <p>
                        <div class="col-lg-12"> <input class="form-control" placeholder="DD/MM/AAAA HH:MM:SS" type="text" ng-model="auditoria.dtHrCadAudit" name="dthrcad" ng-required="true" ng-minlength="19"/></div>
                          <div ng-show="auditoriasForm.dthrcad.$dirty" ng-messages="auditoriasForm.dthrcad.$error">
		            <div ng-message="required" class="alert alert-danger">
			          Por favor, preencha o campo Data / Hora Cadastro da Auditoria!
		            </div>
                            <div ng-message="minlength" class="alert alert-danger">
                                O formato DD/MM/AAAA HH:MM:SS.
                             </div>
	                  </div>
                        <!--  <div ng-show="auditoriasForm.dthrcad.$error.pattern" class="alert alert-danger">
		                  O campo telefone deve ter o formato dd/mm/aaaa
                          </div>
                         -->   
                               <a class="btn btn-outline btn-danger  btn-sm glyphicon glyphicon-calendar "   name="salvar"  > </a>
                    </div>
                </div>
              </div>
          
              
            
              
              <div class="col-md-3">
                <div class="panel panel-default">
                        <div class="panel-heading">
                           Data inicial da Auditoria
                        </div>
                    <div class="panel-body" style="text-align: center;"> <p>
                          <div class="col-lg-12"> <input class="form-control" placeholder="DD/MM/AAAA HH:MM:SS" type="text" ng-model="auditoria.dtHrIniAudit" name="dthrinic" ng-required="true" ng-minlength="19"/></div>
                          <div ng-show="auditoriasForm.dthrinic.$dirty" ng-messages="auditoriasForm.dthrinic.$error">
		            <div ng-message="required" class="alert alert-danger">
			          Por favor, preencha o campo Data / Hora Cadastro da Auditoria!
		            </div>
                            <div ng-message="minlength" class="alert alert-danger">
                                 O formato DD/MM/AAAA HH:MM:SS.
                             </div>
	                  </div>                        
                               <a class="btn btn-outline btn-danger  btn-sm glyphicon glyphicon-calendar "   name="salvar"  > </a>
                    </div>
                </div>
              </div>
                   
                   
             
               
              <div class="col-md-3">
                <div class="panel panel-default">
                        <div class="panel-heading">
                           Data da realização 
                        </div>
                    <div class="panel-body" style="text-align: center;"> <p>
                          <div class="col-lg-12"> <input class="form-control" placeholder="DD/MM/AAAA HH:MM:SS" type="text" ng-model="auditoria.dtHrRealiaudit" name="dthrrealiz" ng-required="true" ng-minlength="19"/></div>
                          <div ng-show="auditoriasForm.dthrrealiz.$dirty" ng-messages="auditoriasForm.dthrrealiz.$error">
		            <div ng-message="required" class="alert alert-danger">
			          Por favor, preencha o campo Data / Hora Cadastro da Auditoria!
		            </div>
                            <div ng-message="minlength" class="alert alert-danger">
                                  O formato DD/MM/AAAA HH:MM:SS.
                             </div>
	                  </div>     
                               <a class="btn btn-outline btn-danger  btn-sm glyphicon glyphicon-calendar "   name="salvar"  > </a>
                    </div>
                </div>
              </div>
                    
         
              <div class="col-md-3">
                <div class="panel panel-default">
                        <div class="panel-heading">
                           Data de atualização
                        </div>
                    <div class="panel-body" style="text-align: center;"> <p>
                          <div class="col-lg-12"> <input class="form-control" placeholder="DD/MM/AAAA HH:MM:SS" type="text" ng-model="auditoria.dtAtualiza" name="dtHratualiz" ng-required="true"ng-minlength="19"/></div>
                          <div ng-show="auditoriasForm.dtHratualiz.$dirty" ng-messages="auditoriasForm.dtHratualiz.$error">
		            <div ng-message="required" class="alert alert-danger">
			          Por favor, preencha o campo Data / Hora Cadastro da Auditoria!
		            </div>
                            <div ng-message="minlength" class="alert alert-danger">
                                  O formato DD/MM/AAAA HH:MM:SS.
                             </div>
	                  </div>                           
                        <a class="btn btn-outline btn-danger  btn-sm glyphicon glyphicon-calendar "   name="salvar"  > </a> 
                    </div>
                </div><p>
              </div>      
        
      
        <!--*********************<div class="row"> <p>***********************************************Observação--> 
             
              <div class="col-lg-12"><p>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                           Observação
                        </div>
                        <div class="panel-body"> <p>
                            <div class="col-lg-12">
                                <textarea  ng-model="auditoria.statusaudit" name="status" class="form-control" rows="3" ></textarea> <br>
                                 <input class="form-control" type="hidden"   ng-model="auditoria.statusaudit" name="status" placeholder="Status" />      
                            </div>
                        </div>
                    </div>
              </div>                                   
         </div>            
       </form>  
            <hr>
              <!--botoes--> 
           <div style="padding-left:280px;"   >
              <a class="btn btn-outline  btn-lg  btn-primary glyphicon glyphicon-floppy-save"    ng-click="(auditoria.statusaudit ='A');adicionarAuditoria(auditoria)" ng-disabled="auditoriasForm.$invalid" > SALVAR</a>
              <a href="#/auditorias"  class="btn btn-lg btn-outline btn-danger glyphicon glyphicon-remove"> CANCELAR</a>   
         </div> 
        </div> <br>
       
       
        <!--************************************************************************************************
            <input class="form-control" type="text" ng-model="auditoria.DescriAudi " id="desc" name="descr" placeholder="Descrição Auditoria" 
            ng-required="true" ng-minlength="1" ng-maxlength="14"/>
            
	    <input class="form-control" type="number" ng-model="auditoria.idCer  " name="cert" placeholder="Codigo Certificadora" 
                ng-required="true" />                
                
	    <input class="form-control" type="number" ng-model="auditoria.idCl " name="clie" placeholder="Codigo Cliente" 
                    ng-required="true" ng-minlength="1" ng-maxlength="100"/>      

            <input class="form-control" iu-date type="text" ng-model="auditoria.descriObjAudi" name="obj"  placeholder="Objetivo Auditoria" 
                        ng-required="true" ng-minlength="1" ng-maxlength="10"/>

            <input class="form-control" type="text" ng-model="auditoria.dtHrCadAudi" name="dthrca" ng-pattern="/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/" placeholder="Data / Hora cadastro Auditoria" 
                      ng-required="true"/> 

            <input class="form-control" type="text" ng-model="auditoria.dtHrIniAudi " name="dthrini"  ng-pattern="[0-9]+$" placeholder="Data / Hora Inicial da Auditoria " 
                        ng-required="true" />

            <input class="form-control" type="text" ng-model="auditoria.dtHrRealiaudi " name="dthrreal"  pattern="[0-9]{2}\/[0-9]{2}\/[0-9]{4}$"  placeholder="Data / Hora da realização da Auditoria" 
                        ng-required="true" />

            <input class="form-control" type="text" ng-model="auditoria.dtAtualiz " name="dthratual" placeholder="Data da Atualização" 
                        ng-required="true" />

            <input class="form-control" type="text" ng-model="auditoria.obsaudit" name="obs" placeholder="OBS" 
                        ng-required="true" ng-minlength="1" ng-maxlength="100"/>

            <input class="form-control" type="hidden"   ng-model="auditoria.statusaudit" name="status" placeholder="Status" > 
      
	<!--********************************************************************final do forme original -->
    
	    
		
	  </div>
         </div>              
                   <div ng-include="'footer.html'"></div>            
    </div>
               <p>Formaçao do Objeto(json): {{auditoria | json }}</p>''             
  </div>    
 
   
   <script>
  
   
  angular.module("app").controller("datahoraCtrl", function ($scope, $element, $http, $filter) {
  
 
  function General()
  {
   $scope.datahora  = $filter('date')(new Date(), 'yyyy-MM-dd HH:mm:ss');
  }
  
 </script>
 
