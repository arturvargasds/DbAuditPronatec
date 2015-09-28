<div id="page-wrapper">     <br>
 <div class="row">
  <div class="col-lg-12">
   <div class="panel panel-info">
    <div class="panel-heading">
	<h4>Auditando  CheckPoint: <b style="color: red;font-size: 23px;">{{checklist.id}}</b> </h4>   
       </div>  <br>
       <div class="container-fluid" style="text-align: center;" >
	 <form name="checkForm">	<!--formulario-->
             
        <div class="row"> <p>       
         <div class="col-lg-12"> <!--** *************** Auditorias-->
          <div class="panel panel-green">
           <div class="panel-heading">
               Auditorias
            </div> 
             <div class="panel-body">
                 <div class="col-lg-4">  <label>Auditoria</label>  <input class="form-control"  type="number" ng-model="checklist.idAudit " name="audit" placeholder="Codigo da Auditoria"  ng-required="true"/> <br></div> 
               <div ng-show="checkForm.audit.$dirty" ng-messages="checkForm.audit.$error">
                  <div ng-message="required" class="alert alert-danger">
                        Por favor, preencha o campo Codigo da Auditorias!
                   </div>                              
               </div>  
              <div class="container-fluid">
                  <div> <input class="form-control fa fa-search" type="text" ng-model="criterioDeBusca" placeholder="Pesquisar.."/></div>
                    <div class="tab-content">
                     <div class="tab-pane fade in active" > 
                      <div class="panel-body">
                       <div class="table-responsive" style="text-align: center;" >
                         <table style="text-align: center;" ng-show="auditorias.length > 0" class="table table-xs btn-xs table-striped table-bordered table-responsive table-hover"  >		
                            <tr>   
                                <td><a href="" ng-click="ordenarPor('id')"><b>Auditoria</b>  <i class="fa fa-sort"></i></a></td>                        
                                <td><a href="" ng-click="ordenarPor('descriAudit')"><b>Descrição</b>  <i class="fa fa-sort"></i></a></td> 
                                <td><a href="" ng-click="ordenarPor('idCert')"><b>Certificadora</b> <i class="fa fa-sort"></i></a ></td> 
                                <td><a href="" ng-click="ordenarPor('idCli')"><b>Cliente </b> <i class="fa fa-sort"></i></a></td>                          
                                 
                                <td title="Data e Hora do cadastro da Auditoria"><b>Cadastro da Auditoria</b></td>  
                                <td><a href="" ng-click="ordenarPor('statusaudit')"><b>Status </b> <i class="fa fa-sort"></i></a></td>     
                                <td><b>Editar</b></td>
                                <td><b>Excluir</b></td>
                            </tr>
                            <tr ng-class="{'selecionado negrito': auditoria.selecionado}" ng-repeat="auditoria in auditorias | filter:criterioDeBusca | orderBy:criterioDeOrdenacao:direcaoDaOrdenacao">                                      
                              
                                 <td><a href="#/auditoria/{{auditoria.id}}"><b>{{auditoria.id}}</b> </a></td>         
                                <td><a href="" title="{{auditoria.descriAudit}}" style="color: #4cae4c;"> <i  class="btn btn-info btn-outline   btn-xs  fa fa-external-link  "></i></a></td>
                                <td>{{auditoria.idCert| uppercase }}</td>
                                <td>{{auditoria.idCli | uppercase}}</td>                            
                                
                                <td>{{auditoria.dtHrCadAudit | date:'dd/MM/yyyy HH:mm:ss' }}</td>   
                                <td>{{auditoria.statusaudit}}</td> 
                                <td><a href="#/editAuditorias/{{auditoria.id}}"><i  class="btn btn-outline btn-warning btn-xs glyphicon glyphicon-edit "></i></a></td>
                                <td><a href="#/deleteAuditoria/{{auditoria.id}}" ng-click="deleteAuditoria(auditorias)"><i  class="btn btn-outline btn-danger  btn-xs glyphicon glyphicon-remove "></i></a></td>
                            </tr>                        
                            </table> 
                          </div><br>       
                      </div> 
                     </div>
                    </div>                    
                   </div>       
                  </div>
                 </div>
                </div>
               </div> <p>    
        <!-- ***************************************************************************dados Auditorias -->            
               <div class="row"> <p>       
               <div class="col-lg-12"> 
                <div class="panel panel-green">
                   <div class="panel-heading">
                       Dados da CheckPoint
                    </div>
                        
                        <div class="panel-body">
                           <div class="panel-collapse">
                               <input class="form-control" type="hidden" ng-model="checklist.descriChklist" id="desc" name="descr" placeholder="Descrição CheckPoint" 
                                  ng-required="true" ng-minlength="1" ng-maxlength="400"/>
          
                               <div  class="col-lg-12"> <label>Descrição CheckPoint</label>  <textarea class="form-control" pattern="[A-Za-z]++"  type="text" ng-model="checklist.descriChklist" name="descr"  placeholder="Descrição....." ng-required="true" required="" ng-minlength="10" ng-maxlength="500"></textarea> </div>
        <!--************************************************  Validadção dos campos *****************************************-->
                               <div ng-show="checkForm.descr.$dirty" ng-messages="checkForm.descr.$error">
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
                               <div  class="col-lg-12"><label>N° do Documento do Processo</label>  <input class="form-control" iu-date type="text" ng-model="checklist.docProcesso" name="docP"  placeholder="N° do Documento.... " ng-required="true" ng-minlength="1" ng-maxlength="12"/></div>
                      <!--******************* *********  Validadção dos campos *****************************************-->
                              <div ng-show="checkForm.docP.$dirty" ng-messages="checkForm.docP.$error">
		                    <div ng-message="required" class="alert alert-danger">
			                      Por favor, preencha o campo Objetivo !
		                    </div>
                                   <div ng-message="minlength" class="alert alert-danger">
                                              O campo Objetivo deve ter no minimo 10 caracteres.
                                    </div>
                                    <div ng-message="maxlength" class="alert alert-danger">
                                              O campo Objetivo deve ter no maximo12 caracteres.
                                    </div>
	                       </div><br> 
                           </div>
                        </div><br>
                </div>
              </div><br>  
            </div>  <p>
                
                
                     
        <div class="row"> <p>       
         <div class="col-lg-12"> <!--** *************** Equipe de Auditores-->
          <div class="panel panel-green">
           <div class="panel-heading">
              Equipe de Auditores
            </div> 
             <div class="panel-body">
                 <div class="col-lg-4">  <label>Equipe</label>  <input class="form-control"  type="number" ng-model="checklist.idEquipe " name="equA" placeholder="Codigo Equipe de Auditores" ng-required="true"/> <br></div> 
               <div ng-show="checkForm.equA.$dirty" ng-messages="checkForm.equA.$error">
                  <div ng-message="required" class="alert alert-danger">
                        Por favor, preencha o campo Codigo da Auditorias!
                   </div>                              
               </div>  
              <div class="container-fluid">
                  <div> <input class="form-control fa fa-search" type="text" ng-model="criterioDeBusca" placeholder="Pesquisar.."/></div>
                    <div class="tab-content">
                     <div class="tab-pane fade in active" > 
                      <div class="panel-body">
                       <div class="table-responsive" style="text-align: center;" >
                         <table style="text-align: center;" ng-show="eqAudits.length > 0" class="table table-xs btn-xs table-striped table-bordered table-responsive table-hover"  >		
                            <tr> 
                                <td><b> Equipe</b></td>  
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
                          </div><br>       
                      </div> 
                     </div>
                    </div>                    
                   </div>       
                  </div>
                 </div>
                </div>
               </div> <p>  
              
                   
           <div class="row"> <p> 
               <div class="col-lg-6"> <!--** **************Colaboradores--> 
             <div class="panel panel-green">
              <div class="panel-heading">
                   Colaboradores
                  </div>
                  <div class="panel-body">
                   <div class="col-lg-12">  <label>Colaborador</label>  <input class="form-control"  type="number" ng-model="checklist.idCola " name="cola" placeholder="Codigo Colaborador"  ng-required="true"/> </div>

                   <div ng-show="ocorrenciaForm.cola.$dirty" ng-messages="ocorrenciaForm.cola.$error">
                        <div ng-message="required" class="alert alert-danger">
                               Por favor, preencha o campo Codigo da Colaborador!
                        </div>                              
                    </div> 
                   <div class="col-lg-12">
                       <select class="form-control" ng-model="colaborador" ng-options="colaborador.nomeCola + ' ( ' + (colaborador.id) + ' )' for colaborador in colaboradores | orderBy:'nomeCola'">		        	
                          <option value="">lista de Colaboradores</option>
                       </select>
                    </div>   
                    <div>
                       <a class="btn btn-outline btn-success  btn-sm glyphicon glyphicon-pencil "   name="s" href="#/cadOcorrencias" > Novo Colaborador</a>
                    </div>
                   </div><p>
             </div><p>
               </div> <p>
               
                  <div class="col-md-4"> 
                    <div class="panel panel-green">
                            <div class="panel-heading">
                               Data da realização 
                            </div>
                        <div class="panel-body" style="text-align: center;"> <p>
                           <div class="col-lg-12"> <input class="form-control" placeholder="DD/MM/AAAA HH:MM:SS" type="text" ng-model="checklist.dtHrRealiChklist" name="dthrrealiz" ng-required="true" ng-minlength="19"/></div>
                              <div ng-show="checkForm.dthrrealiz.$dirty" ng-messages="checkForm.dthrrealiz.$error">
                                <div ng-message="required" class="alert alert-danger">
                                      Por favor, preencha o campo Data / Hora Cadastro da Auditoria!
                                </div>
                                <div ng-message="minlength" class="alert alert-danger">
                                      O formato DD/MM/AAAA HH:MM:SS.
                                 </div>
                              </div>     
                                   <a class="btn btn-outline btn-danger  btn-sm glyphicon glyphicon-calendar " > </a>
                        </div><p>
                    </div><p>
                  </div><p>
                  
                  <div class="col-lg-12"><p>
                    <div class="panel panel-green">
                        <div class="panel-heading">
                           Observação
                        </div>
                        <div class="panel-body"> <p>
                            <div class="col-lg-12"> 
                                <textarea  ng-model="checklist.obsChklist" name="obs" class="form-control" rows="3" ></textarea> <br>
                            <!--     <input class="form-control" type="hidden"   ng-model="auditoria.statusaudit" name="status" placeholder="Status" />   -->   
                            </div>
                        </div>
                    </div><br>
              </div>          
             </div>  <p>  
                 
         <div class="row"> <p> <!--*********Ocorrencia***-->
          <div class="col-lg-12"> 
           <div class="panel panel-red">
            <div class="panel-heading">
               Ocorrencias
             </div>  <p>
                 <div class="panel-body">
                   <div class="container-fluid">
                     <input class="form-control" type="text" ng-model="criterioDeBusca" placeholder="Pesquisar por ocorrencia.."/>
                      <div class="tab-content">
                        <div class="tab-pane fade in active"  >
                          <div class="panel-body">
                            <div class="table-responsive" style="text-align: center;">
             <!--tabela-->    <table ng-show="ocorrencias.length > 0" class="table table-xs btn-xs table-striped table-bordered table-responsive table-hover" style="text-align: center;">
                                <tr> 
                                  <td><b>Abrir</b></td> 
                                  <td><b>Ocorrencia</b></td>
                                  <td><b><a href="" ng-click="ordenarPor('idPontoCtrl')">CheckPoint<i class="fa fa-sort"></i></a></b></td>
                                  <td><b><a href="" ng-click="ordenarPor('descriOcorre')">Descrição<i class="fa fa-sort"></i></a></b></td>
                                  <td><b>Colaboradores</b></td>
                                  <td><b>DtHr Ocorrecia</b></td>			
                                  <td><b><a href="" ng-click="ordenarPor('statusOcorre')">Status<i class="fa fa-sort"></i></a></b></td>
                                  <td><b>Excluir</b></td>
                                </tr>
                                <tr ng-class="{'selecionado negrito': ocorrencia.selecionado}" ng-repeat="ocorrencia in ocorrencias | filter:criterioDeBusca | orderBy:criterioDeOrdenacao:direcaoDaOrdenacao">           
                                  <td><a href="#/editOcorrencias/{{ocorrencia.id}}"><i  class="btn btn-success btn-outline  btn-xs  fa fa-folder-open " title="Click para abrir Ocorrencia"></i></a></td>             
                                  <td>{{ocorrencia.id}}</td>  
                                  <td>{{ocorrencia.idPontoCtrl}}</td>
                                  <td>{{ocorrencia.descriOcorre | uppercase}}</td> 
                                  <td>{{ocorrencia.idCola}}</td>
                                  <td>{{ocorrencia.dtHrOcorre  |  date:'dd/MM/yyyy HH:mm:ss'}}</td>			
                                  <td>{{ocorrencia.statusOcorre | uppercase}}</td>
                                  <td style="text-align: center;" ><a href="#/deleteOcorrencia/{{ocorrencia.id}}" class="btn btn-outline btn-danger  btn-xs glyphicon glyphicon-remove"></a></td>
                                </tr>
                              </table><br>
                                <div><a class="btn btn-outline btn-success  btn-xs glyphicon glyphicon-plus "   name="ocorrencia" href="#/cadOcorrencias" > Nova Ocorrencia</a>                     
                                     <a class="btn btn-outline btn-success  btn-xs glyphicon glyphicon-search "   name="ocorrencia" href="#/ocorrencias" > Todas Ocorrencias</a><br>
                                </div>    <p> 
                            </div>       
                          </div><br> 
                        </div>
                      </div>                    
                    </div>   
                   </div>
                </div>
               </div>
              </div> <p>
             
         <div class="row"> <p>  <!--************Nao Conformidades*****-->
          <div class="col-lg-12"> 
           <div class="panel panel-red">
            <div class="panel-heading">
               Não Conformidades
              </div>  <p>
               <div class="panel-body">
                <div class="container-fluid"> 
                  <input class="form-control" type="text" ng-model="criterioDeBusca" placeholder="Pesquisar por Descrição da nc.."/>
                   <div class="tab-content">
                     <div class="tab-pane fade in active">
                       <div class="panel-body">
                         <div class="table-responsive" style="text-align: center;"> 
              <!--tabela--> <table ng-show="NCs.length > 0" style="text-align: center;" class="table table-xs btn-xs table-striped table-bordered table-responsive table-hover">
                                    <tr>
                                        <td><b>Abrir</b></td>
                                        <td><b>Não Confor.</b></td>
                                        <td><b>CheckPoints</b></td>
                                        <td><b><a href="" ng-click="ordenarPor('descriNc')"><b>Descrição</b><i class="fa fa-sort"></i></a></td>
                                        <td><b>Colaborador</b></td> 
                                        <td><b>Dt/Hr do Cadastro</b></td>  
                                        <td><a href="" ng-click="ordenarPor('statusNc')"><b>Status </b> <i class="fa fa-sort"></i></a></td>                                                                
                                        <td><b>Excluir</b></td>
                                        </tr>
                                    <tr ng-class="{'Selecionado negrito': nc.selecionado}" ng-repeat="nc in NCs | filter:criterioDeBusca | orderBy:criterioDeOrdenacao:direcaoDaOrdenacao">
                                        <td><a href="#/editNCs/{{nc.id}}"><i  class="btn btn-success btn-outline  btn-xs  fa fa-folder-open " title="Click para abrir Não Conformidade"></i></a></td>                                           
                                        <td>{{nc.id}}</td>
                                        <td>{{nc.idPontoCtrl}}</td>
                                        <td>{{nc.descriNc | uppercase}}</td>
                                        <td>{{nc.idCola}}</td> 
                                        <td>{{nc.dtHrCadNc | date:'dd/MM/yyyy HH:mm'}}</td>  
                                        <td>{{nc.statusNc}}</td> 
                                        <td><a href="#/deleteNC/{{nc.id}}" ng-click="deleteNC (NCs)" class="btn btn-outline btn-danger  btn-xs glyphicon glyphicon-remove"></a></td>
                                    </tr>
                                   </table><br>
                                      <div><a class="btn btn-outline btn-success  btn-xs glyphicon glyphicon-plus "   name="cadNC" href="#/cadNCs" > Nova Não Conformidade</a>                     
                                           <a class="btn btn-outline btn-success  btn-xs glyphicon glyphicon-search "   name="NCs" href="#/NCs" > Todas Não Conformidade</a><br>
                                     </div>    <p> 
                                    </div>        
                                  </div><br> 
                                 </div>
                                </div>                    
                               </div>   
                              </div>
                             </div>
                            </div>
                           </div> <p>
          </form>             
           
				<!--botoes-->
				<div >
					<a class="btn btn-outline  btn-lg  btn-primary glyphicon glyphicon-floppy-save" ng-click="checklist.statusChklist='A';adicionarChecklist(checklist)" ng-disabled="checkForm.$invalid"> SALVAR</a>
					<a href="#/checklists"  class="btn btn-lg btn-outline btn-danger glyphicon glyphicon-remove"  > CANCELAR</a>
				</div> 
				</div><br><br>
			</div><br>
			<div ng-include="'footer.html'"></div>
		</div><!-- /.row -->
		<p>Formaçao do Objeto(json): {{checklist| json }}</p>''
	</div><!-- /#page-wrapper -->
</div> <!-- /#wrapper -->

