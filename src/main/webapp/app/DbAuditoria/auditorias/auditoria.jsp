<div id="page-wrapper">     <br>
  <div class="row">
   <div class="col-lg-12">
     <div class="panel panel-info">
       <div class="panel-heading">
           <h4>  Auditoria <b style="color: red;font-size: 23px;">{{auditoria.idaudit}}</b> em Andamento </h4>   
       </div>  <br>
       <div class="container-fluid" style="text-align: center;">
            <!--  < style="background-color: #dff0d8;">  -->
         
	<form name="auditoriasForm"  id="formAu">
 
                 <div class="row"> <p> 
            <!--*************************************************************Certificadoras-->
                <div class="col-md-6"> 
                    <div class="panel panel-green">
                        <div class="panel-heading">
                         Empresas Certificadoras
                        </div>
                        
                        <div class="panel-body">
                           <div class="col-lg-3">  <label>Codigo</label>    <input class="form-control"    type="number" ng-model="auditoria.certificadora.idcert  " name="certi" placeholder="Codigo Certificadora"  ng-required="true" /> </div>
                           <div class="col-lg-9">  <label>Nome Fantasia</label>    <input class="form-control"    type="text" ng-model="auditoria.certificadora.fantacert " name="certi" placeholder="Codigo Certificadora"  ng-required="true" /> </div>
                          
                             <div ng-show="auditoriasForm.certi.$dirty" ng-messages="auditoriasForm.certi.$error">
		                <div ng-message="required" class="alert alert-danger">
			               Por favor, preencha o campo Codigo da Certificadora!
		                </div>
	                     </div>
                             
                             <div name="certi" class="col-lg-12">
                                 <select class="form-control" ng-model="auditoria.certificadora" ng-options="certificadora.fantacert + ' ( ' + (certificadora.idcert) + ' )' for certificadora in certificadoras  ">
		        	    <option value="">Lista de Certificadora</option>
		                 </select>
                             </div>
                             <hr>
                            <div >
                               <a class="btn btn-outline btn-success  btn-sm glyphicon glyphicon-pencil "   name="salvar" href="#/cadCerts" > Nova Certificadora</a>
                            </div>
                        </div> <br>
                       
                    </div>
                </div> 
                                 
        <!--*************************************************************Clientes-->
                <div class="col-lg-6"> 
                    <div class="panel panel-green">
                        <div class="panel-heading">
                          Empresas Clientes
                        </div>
                        
                        <div class="panel-body">
                            <div class="col-lg-12">  <label>Clientes</label>  <input class="form-control"  type="number" ng-model="auditoria.idcli.id " name="clie" placeholder="Codigo Cliente"  ng-required="true"/> </div>
                             <div ng-show="auditoriasForm.clie.$dirty" ng-messages="auditoriasForm.clie.$error">
		                <div ng-message="required" class="alert alert-danger">
			               Por favor, preencha o campo Codigo da Cliente!
		                </div>                              
	                     </div>
                            
                             <div class="col-lg-12">
                                 <select class="form-control" ng-model="auditoria.idcli.id" ng-options="cliente.fantaCli + ' ( ' + (cliente.id) + ' )' for cliente in clientes | orderBy:'id'">		        	
                                  <option value="">lista de Clientes</option>
                                  </select>
                             </div>   
                            <div >
                               <a class="btn btn-outline btn-success  btn-sm glyphicon glyphicon-pencil "   name="salvar" href="#/CadClientes" > Novo Clientes</a>
                            </div>
                       </div><br>
                    </div>
                </div> <p>
                 </div>    <p>   
                      
        <!-- ***************************************************************************dados Auditorias -->            
               <div class="row"> <p>       
               <div class="col-lg-12"> 
                <div class="panel panel-green">
                   <div class="panel-heading">
                       Dados da Auditorias
                    </div>
                        
                        <div class="panel-body">
                           <div class="panel-collapse">
                               <input class="form-control" type="hidden" ng-model="auditoria.descriaudit " id="desc" name="descr" placeholder="Descrição Auditoria" 
                                  ng-required="true" ng-minlength="1" ng-maxlength="400"/>
          
                               <div  class="col-lg-12"> <label>Descrição Auditoria</label>  <textarea class="form-control" pattern="[A-Za-z]++"  type="text" ng-model="auditoria.descriaudit " name="descr"  placeholder="Descrição....." ng-required="true" required="" ng-minlength="10" ng-maxlength="500"></textarea> </div>
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
                        </div><br>
                </div>
              </div>  
            </div>  <p>
                           
       <!-- ***************************************************************************data e hora -->
             <div class="row"> <p>
                     
              <div class="col-md-3">
                <div class="panel panel-green">
                        <div class="panel-heading">
                           Data do cadastro
                        </div>
                    <div class="panel-body" style="text-align: center;"> <p>
                        <div class="col-lg-12"> <input class="form-control" placeholder="DD/MM/AAAA HH:MM:SS" type="text" ng-model="auditoria.dthrcadaudit" name="dthrcad" ng-required="true" ng-minlength="19"/></div>
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
                    </div><br>
                </div>
              </div>
            
              <div class="col-md-3">
                <div class="panel panel-green">
                        <div class="panel-heading">
                           Data inicial da Auditoria
                        </div>
                    <div class="panel-body" style="text-align: center;"> <p>
                          <div class="col-lg-12"> <input class="form-control" placeholder="DD/MM/AAAA HH:MM:SS" type="text" ng-model="auditoria.dthriniaudit" name="dthrinic" ng-required="true" ng-minlength="19"/></div>
                          <div ng-show="auditoriasForm.dthrinic.$dirty" ng-messages="auditoriasForm.dthrinic.$error">
		            <div ng-message="required" class="alert alert-danger">
			          Por favor, preencha o campo Data / Hora Cadastro da Auditoria!
		            </div>
                            <div ng-message="minlength" class="alert alert-danger">
                                 O formato DD/MM/AAAA HH:MM:SS.
                             </div>
	                  </div>                        
                               <a class="btn btn-outline btn-danger  btn-sm glyphicon glyphicon-calendar "   name="salvar"  > </a>
                    </div><br>
                </div>
              </div>
                
              <div class="col-md-3"> 
                <div class="panel panel-green">
                        <div class="panel-heading">
                           Data da realização 
                        </div>
                    <div class="panel-body" style="text-align: center;"> <p>
                          <div class="col-lg-12"> <input class="form-control" placeholder="DD/MM/AAAA HH:MM:SS" type="text" ng-model="auditoria.dthrrealiaudit" name="dthrrealiz" ng-required="true" ng-minlength="19"/></div>
                          <div ng-show="auditoriasForm.dthrrealiz.$dirty" ng-messages="auditoriasForm.dthrrealiz.$error">
		            <div ng-message="required" class="alert alert-danger">
			          Por favor, preencha o campo Data / Hora Cadastro da Auditoria!
		            </div>
                            <div ng-message="minlength" class="alert alert-danger">
                                  O formato DD/MM/AAAA HH:MM:SS.
                             </div>
	                  </div>     
                               <a class="btn btn-outline btn-danger  btn-sm glyphicon glyphicon-calendar "   name="salvar"  > </a>
                    </div><br>
                </div><p>
              </div> <p> 
        <!--*********************<div class="row"> <p>***********************************************Observação-->            
              <div class="col-lg-12"><p>
                    <div class="panel panel-green">
                        <div class="panel-heading">
                           Observação
                        </div>
                        <div class="panel-body"> <p>
                            <div class="col-lg-12">
                                <textarea  ng-model="auditoria.obsaudit" name="obs" class="form-control" rows="3" ></textarea> <br>
                                 <input class="form-control" type="hidden"   ng-model="auditoria.statusaudit" name="status" placeholder="Status" />      
                            </div>
                       </div>
                      </div>
                     </div>                                   
                    </div> <p>
          <!--************************************************Equipe de Auditores-->
            <div class="row"> <p> 
             <div class="col-md-12"> 
               <div class="panel panel-red">
                 <div class="panel-heading">
                      Equipe de Auditores
                 </div>  <p>
                <div class="panel-body">    
                 <div class="container-fluid">
                  <input class="form-control" type="text" ng-model="criterioDeBusca" placeholder="Pesquisar por Equipe.."/>
                    <div class="tab-content">
                      <div class="tab-pane fade in active" id="home-pills">
                        <div class="panel-body">
                          <div class="table-responsive" style="text-align: center;" >

                            <!--tabela-->
                            <table ng-show="eqAudits.length > 0" class="table table-xs btn-xs table-striped table-bordered table-responsive table-hover" style="text-align: center;">		
                              <tr> 
                                <td><b>Equipe</b></td>
                                <td><b> Auditoria</b></td>                          
                                <td><b><a href="" ng-click="ordenarPor('tipoAuditor')">Tipo Auditoria</a> <i class="fa fa-sort"></i> </b></td>
                                <td><b>Auditor 1</b></td>
                                <td><b>Auditor 2</b></td>
                                <td><b>Data de formação Equipe</b></td>
                                <td><b><a href="" ng-click="ordenarPor('statusEquipe')">Status</a> <i class="fa fa-sort"></i> </b></td>  
                                <td><b>Editar </b></td>
                                <td><b>Excluir </b></td>
                              </tr>
                              <tr ng-class="{'selecionado negrito': eqAudit.selecionado}" ng-repeat="eqAudit in eqAudits | filter:criterioDeBusca | orderBy:criterioDeOrdenacao:direcaoDaOrdenacao">                  
                                <td> {{eqAudit.id }} </td>
                                <td> {{eqAudit.idaudit }} </td>
                                <td> {{eqAudit.tipoAuditor | uppercase}} </td>
                                <td> {{eqAudit.idAuditor }} </td>
                                <td> {{eqAudit.idAuditor2 }} </td>
                                <td> {{eqAudit.dtHrIncEquipe}} </td>
                                <td> {{eqAudit.statusEquipe}} </td>
                                <td> <a href="#/editEqAudits/{{eqAudit.id}}" class="btn btn-outline btn-warning btn-xs glyphicon glyphicon-edit"></a> </td>
                                <td> <a href="#/deleteEqAudit/{{eqAudit.id}}" class="btn btn-outline btn-danger  btn-xs glyphicon glyphicon-remove"></a></td>
                              </tr>
                              </table>
                                   <div><a class="btn btn-outline btn-success  btn-xs glyphicon glyphicon-plus "   name="equipe" href="#/cadEqAudits" > Nova Equipe</a>
                                        <a class="btn btn-outline btn-success  btn-xs glyphicon glyphicon-search "   name="equipe" href="#/eqAudits" > Todas as Equipes</a><br>
                                   </div>    <p>
                          </div><br>       
                        </div>
                      </div>
                     </div>                    
                   </div>
                  </div> 
               </div>   
             </div><p>
            </div><p>
          <!--************************************************ *CheckPoint-->
            <div class="row"> <p> 
             <div class="col-lg-12"> 
               <div class="panel panel-red">
                 <div class="panel-heading">
                      CheckList
                 </div>  <p>
                  <div class="panel-body">
                   <div class="container-fluid">
                       <input class="form-control" type="text" ng-model="criterioDeBusca" placeholder="Pesquisar..Digite o codigo da auditoria..!"/>
                    <div class="tab-content">
                     <div class="tab-pane fade in active" >
                      <div class="panel-body">
                       <div class="table-responsive"  style="text-align: center;" >

                          <!--tabela-->          
                          <table ng-show="checklists.length > 0" style="text-align: center;" class="table table-xs btn-xs table-striped table-bordered table-responsive table-hover" id="dataTables-example">  
                            <tr>  
                              <td><b>Abrir</b></td>
                              <td><b>CheckPoint</b></td>
                              <td><b>Auditoria</b></td>
                              <td><a href="" ng-click="ordenarPor('descriChklist')"><b>Descrição</b><i class="fa fa-sort"></i></a></td>                     
                              <td><b>Data Realização</b></td>   
                              <td><a href="" ng-click="ordenarPor('statusChklist')"><b>Status </b> <i class="fa fa-sort"></i></a></td>                                           
                              <td><b>Excluir</b></td>
                            </tr>
                            <tr ng-class="{'selecionado negrito': checklist.selecionado}" ng-repeat="checklist in checklists | filter:criterioDeBusca | orderBy:criterioDeOrdenacao:direcaoDaOrdenacao">
                              <td><a href="#/CheckPoint/{{checklist.id}}"><i  class="btn btn-success btn-outline  btn-xs  fa fa-folder-open " title="Click para abrir CheckPoint"></i></a></td>             
                              <td>{{checklist.id}}</td>
                              <td>{{checklist.idAudit}}</td>
                              <td>{{checklist.descriChklist}}</td> 
                              <td>{{checklist.dtHrRealiChklist}}</td>                      
                              <td>{{checklist.statusChklist}}</td>
                             <td><a href="#/deleteChecklist/{{checklist.id}}" ng-click="deleteChecklist(checklists)" class="btn btn-outline btn-danger  btn-xs glyphicon glyphicon-remove"></a></td> 
                    
                            </tr>
                          </table> 
                           <div><a class="btn btn-outline btn-success  btn-xs glyphicon glyphicon-plus "   name="checkPoint" href="#/cadChecklists" > Novo CheckPoint</a>                     
                               <a class="btn btn-outline btn-success  btn-xs glyphicon glyphicon-search "   name="checkPoints" href="#/checklists" > Todos CheckPoint</a><br>
                           </div>    <p>                
                        </div>   <p>     
                      </div>
                    </div>
                  </div>                    
                </div>              
              </div>
             </div>
           </div>
          </div><p>
          
       </form>  
           
            <hr>
              <!--botoes--> 
           <div>
              <a class="btn btn-outline  btn-lg  btn-primary glyphicon glyphicon-floppy-save"    ng-click="(auditoria.statusaudit ='A');adicionarAuditoria(auditoria)" ng-disabled="auditoriasForm.$invalid" > SALVAR</a>
              <a href="#/auditorias"  class="btn btn-lg btn-outline btn-danger glyphicon glyphicon-remove"> CANCELAR</a>   
         </div> 
        </div> <br>
		
	  </div>
         </div>              
                   <div ng-include="'footer.html'"></div>            
    </div>
      <!--         <p>Formaçao do Objeto(json): {{auditoria | json }}</p>''    -->          
  </div>    

 
