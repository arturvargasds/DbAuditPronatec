<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
 <link href="../../lib/bower/bootstrap/dist/css/bootstrap.css" rel="stylesheet">
    <!-- MetisMenu CSS -->
     <link href="../../lib/bower/metisMenu/dist/metisMenu.min.css" rel="stylesheet">
    <!-- DataTables CSS -->
    <link href="../../lib/bower/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.css" rel="stylesheet">
    <!-- DataTables Responsive CSS -->
    <link href="../../lib/bower/datatables-responsive/css/dataTables.responsive.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="../styles/css/sb-admin-2.css" rel="stylesheet">
    <link href="../styles/sb-admin-2.css" rel="stylesheet">
    <!-- Custom Fonts -->
    <link href="../../lib/bower/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"> 
</head>

<body>
    <%@include file="menu.html" %>
    
   
<div id="page-wrapper">     <br>
            <div class="row">
                <div class="col-lg-12">
                    <div class="panel panel-info">
                        <div class="panel-heading">
                            <h4>Controle de Não Conformidades</h4>   
                        </div>
                        
                        <div class="panel-body">                           
                            <ul class="nav nav-pills">
                                <li class="active"><a href="#home-pills" data-toggle="tab">Lista</a>
                                </li>
                                <li><a href="#settings-pills" data-toggle="tab">Cadastro</a>
                                </li>
                            </ul>

 <!--********************************************************************************************** Lista-->   
                            <div class="tab-content">
                               <div class="tab-pane fade in active" id="home-pills">
                                  <div class="panel-body">
                                     <div class="dataTable_wrapper">
                                      <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                                        <thead>
                                            <tr>
                                                <th>Cod. da NC</th>
                                                <th>Colaborador</th>
                                                <th>Cod. Ponto de Controle</th>
                                                <th>Data/Hora Cadastro da NC</th>
                                                <th>Data Prevista p/ Resolver</th>
                                                <th>Descrição da NC</th>
                                                <th>Sugestão</th>
                                                <th>Observação</th>
                                                <th>Status da NC</th>
                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="odd gradeX">
                                                <td>1</td>
                                                <td>Bruno Luiz</td>
                                                <td>1</td>
                                                <td>25/02/2015 ás 9:20hrs</td>
                                                <td>30/03/2015</td>
                                                <td>Extintores Vencidos</td>
                                                <td>Troca de Extintores</td>
                                                <td>Sala do Financeiro</td>
                                                <td>A</td>
                                            </tr>
                                            <tr class="even gradeC">
                                                <td>2</td>
                                                <td>Pedro Barros</td>
                                                <td>2</td>
                                                <td>10/06/2015 ás 13:10hrs</td>
                                                <td>22/09/2015</td>
                                                <td>Telhado está Caindo</td>
                                                <td>Troca de Telhas e Forro</td>
                                                <td>Galpão 2</td>
                                                <td>A</td>
                                            </tr>
                                            <tr class="odd gradeA">
                                                <td>3</td>
                                                <td>Gian Kleber</td>
                                                <td>3</td>
                                                <td>01/02/2015 ás 15:25hrs</td>
                                                <td>01/03/2015</td>
                                                <td>Moveis Enferrujados</td>
                                                <td>Compra de Móveis novos</td>
                                                <td>Portaria</td>
                                                <td>C</td>
                                            </tr>
                                 
                                        </tbody>
                                      </table>
                                  </div>
                               </div>                    
                           </div>
 <!--********************************************************************************************** Cadastro-->                               
                            <div class="tab-pane fade" id="settings-pills">  
                                 <form id="addForm" method="POST" action="Exemplo.jsp" class="form-group">  
                                     <div class=" container-fluid " > <br>
                                        <div class="row">
                                                       
                                       <!--     <div class="col-lg-offset-0">  
                                                <div class="col-lg-3">  <input  disabled=""  placeholder="Codigo Automatico:"  name="id" ></div>                
                                            </div>  <br><br>
                                       -->     
                                            <div class="col-lg-offset-0">
                                            <div class="col-lg-12">  <label>Cod. Colaborador</label> <input class="form-control" placeholder="Cod. Colaborador"></div>
                                            <div class="col-lg-3">   <label>Cod. Ponto de Controle</label>         <input class="form-control" placeholder="Cod. Ponto de Controle"></div>                
                                            <div class="col-lg-9">   <label>Data/Hora de Cadastro da NC</label>   <input required="required" data-placement="left" title="Data/Hora de Cadastro da NC" class="form-control js-tooltip"  placeholder="Data/Hora de Cadastro da NC" pattern="[A-Za-z]++"  type="text" name="descricao"> </div>
                                            </div>  <br><br>
                                            
                                            <div class="col-lg-offset-0">
                                            <div class="col-lg-12">  <label>Data p/ Resolver</label> <input class="form-control" placeholder="Data p/ Resolver"> </div>
                                            <div class="col-lg-3">  <label>Descrição da NC</label><input required="required"  data-placement="left" title="Descrição da NC" class="form-control js-tooltip"  placeholder="Descrição da NC"  type="text" name="uf"> </div>
                                            <div class="col-lg-9">  <label>Sugestão</label><input class="form-control" placeholder="Sugestão"> </div>
                                            
                                            </div>  <br><br>
                                                         
                                            <div class="col-lg-offset-0" >
                                                <div class="col-lg-12">
                                                            <label>Observação</label>  <textarea class="form-control" rows="3"></textarea>
                                                </div>
                                            </div> 
                                        </div> 
                                     </div>                                   
                                    
                                                   
                                  <div  class="col-lg-offset-0 modal-footer">
                                      <div class="col-lg-7">  <!--class="modal-footer"-->
                                          <button class="btn btn-success glyphicon glyphicon-floppy-save " type="submit" name="salvar" value="Salvar" > SALVAR</button>
                                          <a href="Exemplo.jsp"  class="btn btn-danger glyphicon glyphicon-remove"> CANCELAR</a>
                                          <a onclick=""></a>
                                    </div>
                                  </div>
                                   </form>    
                               </div>
  <!--****************************************************************************************************-->  
                      </div>                             
                    </div>                
                </div>               
            </div><!-- /.row -->
        </div><!-- /#page-wrapper -->
    </div> <!-- /#wrapper -->
    
 <!--****************************************************************************************************-->
    <script src="../../lib/bower/jquery/dist/jquery.min.js"></script>
     
     <!--  Javascripts criado -->
     <script src="../../lib2/ angularJS/menu_controle.js"></script> 
     <script src="../scripts/menu_controle.js"></script> 
     
     
     <!-- Bootstrap Core JavaScript -->
     <script src="../../lib/bower/bootstrap/dist/js/bootstrap.min.js"></script>

     <!-- Metis Menu Plugin JavaScript -->
     <script src="../../lib/bower/metisMenu/dist/metisMenu.min.js"></script>

     <!-- DataTables JavaScript -->
     <script src="../../lib/bower/datatables/media/js/jquery.dataTables.min.js"></script>
     <script src="../../lib/bower/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.min.js"></script>

     <!-- Custom Theme JavaScript -->
     <script src="../scripts/js/sb-admin-2.js"></script>
    <!-- Page-Level Demo Scripts - Tables - Use for reference -->
    <script>
    $(document).ready(function() {
        $('#dataTables-example').DataTable({
                responsive: true
        });
    });
    </script>

</body>

</html>

         