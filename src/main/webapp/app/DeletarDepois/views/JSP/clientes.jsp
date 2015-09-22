<!DOCTYPE html>
<html lang="pt-br">

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
                            <h4>Controle de Clientes</h4>   
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
                                                <th>Raz�o Social</th>
                                                <th>CNPJ</th>
                                                <th>Inscri��o</th>
                                                <th>Nome Fantasia</th>
                                                <th>Cep</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="odd gradeX">
                                                <td>Light Servi�os de Eletricidade S/A </td>
                                                <td>73737373476AS</td>
                                                <td>90044022</td>
                                                <td class="center">Light</td>
                                                <td class="center">99003-122</td>
                                            </tr>
                                            <tr class="even gradeC">
                                                <td>Bisfera Servi�os  L/A</td>
                                                <td>98355777734SD</td>
                                                <td>67347748</td>
                                                <td class="center">Bisfera</td>
                                                <td class="center">99912-000</td>
                                            </tr>
                                            <tr class="odd gradeA">
                                                <td>Trident Equipamento</td>
                                                <td>03355777734AA</td>
                                                <td>55543212</td>
                                                <td class="center">Trindent</td>
                                                <td class="center">84444-111</td>
                                            </tr>
                                            <tr class="even gradeA">
                                                <td>Grta Constru��o</td>
                                                <td>55435571234WW</td>
                                                <td>54772722</td>
                                                <td class="center">Grta</td>
                                                <td class="center">33224-999</td>
                                            </tr>
                                            <tr class="odd gradeA">
                                                <td>Pixeleco empreendimento</td>
                                                <td>84485222222JJ</td>
                                                <td>23436777</td>
                                                <td class="center">Pixeleco</td>
                                                <td class="center">09982-888</td>
                                            </tr>
                                            <tr class="even gradeA">
                                                <td>MERT L/D </td>
                                                <td>88838384848AO</td>
                                                <td>23437772</td>
                                                <td class="center">MERT</td>
                                                <td class="center">76582-341</td>
                                            </tr>
                                            <tr class="gradeA">
                                                <td>Gecko</td>
                                                <td>36474782947HA</td>
                                                <td>84754849</td>
                                                <td class="center">Gecko</td>
                                                <td class="center">98333-988</td>
                                            </tr>
                                            <tr class="gradeA">
                                                <td>Gecko</td>
                                                <td>84777772391HN</td>
                                                <td>23453333</td>
                                                <td class="center">Gecko</td>
                                                <td class="center">874444-998</td>
                                            </tr>
                                            <tr class="gradeA">
                                                <td>Gecko</td>
                                                <td>64545737748HN</td>
                                                <td>84664748</td>
                                                <td class="center">Gecko</td>
                                                <td class="center">87884-984</td>
                                            </tr>
                                            <tr class="gradeA">
                                                <td>Gecko</td>
                                                <td>8464644448KL</td>
                                                <td>86544848</td>
                                                <td class="center">Gecko</td>
                                                <td class="center">342222-233</td>
                                            </tr>
                                            <tr class="gradeA">
                                                <td>Gecko</td>
                                                <td>7464664748NM</td>
                                                <td>84626477</td>
                                                <td class="center">Gecko</td>
                                                <td class="center">999890-978</td>
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
                <!-- ***************************************************************************dados pessoais -->
                <div class="col-lg-12">
                    <div class="panel panel-red">
                        <div class="panel-heading">
                            Dados Pessoais
                        </div>
                        <div class="panel-body">
                           <div class="panel-collapse">
                            
                              <div class="col-lg-12">  <label>Raz�o Social</label> <input class="form-control" placeholder="Raz�o Social"> <p></div>
                              <div class="col-lg-3">   <label>cnpj</label>         <input class="form-control" placeholder="CNPJ"></div>                
                              <div class="col-lg-6">   <label>Nome Fantasia</label>   <input required="required" data-placement="left" title="Nome Fantasia:" class="form-control js-tooltip"  placeholder="Nome Fantasia:" pattern="[A-Za-z]++"  type="text" name="fantasia"> <br></div>
                              <div class="col-lg-3">   <label>Inscri��o</label>   <input required="required" data-placement="left" title="Inscri��o:" class="form-control js-tooltip"  placeholder="Inscri��o:" pattern="[A-Za-z]++"  type="text" name="inscricao"> <br></div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
       <!-- ***************************************************************************endere�o -->
             <div class="row"> <p>
              <div class="col-md-7">
                <div class="panel panel-default">
                        <div class="panel-heading">
                            Endere�o
                        </div>
                        <div class="panel-body">
                            <div class="col-lg-5"><label>Cep</label> <input name="cep" id="cep" class="form-control" placeholder="Cep:"> </div>
                            <div class="col-lg-7"><label>Complemento</label> <input name="comple" id="comple" class="form-control" placeholder="Complemento:"> <p></div>
                            <div class="col-lg-5"><label>Cidade</label> <input name="cidade" id="cidade"class="form-control" placeholder="Cidade:"> </div>
                            <div class="col-lg-2"><label>UF</label> <input name="uf" id="uf"class="form-control" placeholder="Uf:"> </div>
                            <div class="col-lg-5"><label>Bairro</label> <input name="bairro" id="bairro" class="form-control" placeholder="Bairro:"> <br></div>
                        </div>
                </div>
              </div>
        <!--*************************************************************REsponsavel-->
                <div class="col-lg-5">
                    <div class="panel panel-red">
                        <div class="panel-heading">
                            Respons�vel pela auditoria na empresa.
                        </div>
                        <div class="panel-body">
                            <div class="col-lg-12">  <label>Nome</label> <input name="nome" id="nome" required="required" data-placement="left" title="Nome:" class="form-control js-tooltip"  placeholder="Nome"  type="text" name="status"> <p> </div>
                                    <div class="col-lg-12">  <label>E-mail respons�vel</label> <input name="emailR" id="emailR" class="form-control" placeholder="Email respons�vel">  <br></div>
                       </div>
                    </div>
                </div>
        <!--*******************************************************************Contato-->
                <div class="col-md-12"> <p>
                <div class="panel panel-warning">
                        <div class="panel-heading">
                            Contato
                        </div>
                        <div class="panel-body">
                           <div class="col-lg-6"><label>Fone:</label> <input name="fone" id="fone" class="form-control" placeholder="Fone:"> </div>
                           <div class="col-lg-6"><label>Celular:</label> <input name="cel" id="cel" class="form-control" placeholder="Celular:"> <p> </div>
                           <div class="col-lg-12"><label>E-mail:</label> <input name="emailcli" id="emailcli" class="form-control" placeholder="E-mail:"> <p> </div>
                           <div class="col-lg-12"><label>Site:</label> <input name="site" id="site" class="form-control" placeholder="Site:"> <br></div>
                         </div>
                </div>
              </div>
        <!--********************************************************************Observa��o--> 
              <div class="col-lg-12"><p>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                           Observa��o
                        </div>
                        <div class="panel-body"> <p>
                            <div class="col-lg-12">
                                <textarea name="obs" id="obs" class="form-control" rows="3"></textarea> <br>
                            </div>
                        </div>
                    </div>
              </div>                                   
          </div>                  
                               <!--   <div class="col-lg-offset-0">  
                                      <div class="col-lg-12">  <label>Raz�o Social</label> <input class="form-control" placeholder="Raz�o Social"></div>
                                      <div class="col-lg-3">   <label>cnpj</label>         <input class="form-control" placeholder="CNPJ"></div>                
                                      <div class="col-lg-9">   <label>Nome Fantasia</label>   <input required="required" data-placement="left" title="Nome Fantasia:" class="form-control js-tooltip"  placeholder="Nome Fantasia:" pattern="[A-Za-z]++"  type="text" name="descricao"> </div>
                                </div><br><br>
                                        
                                <div class="col-lg-offset-0 ">
                                     <div class="col-lg-3"><label>Cep</label> <input class="form-control" placeholder="Cep:"> </div>
                                </div>
                                            
                                <div class="col-lg-offset-0">
                                    <div class="col-lg-3">  <label>Fone</label><input required="required"  data-placement="left" title="FONE:" class="form-control js-tooltip"  placeholder="FONE:"  type="text" name="uf"> </div>
                                    <div class="col-lg-9">  <label>E-mail</label><input class="form-control" placeholder="EMAIL"> </div>
                                    <div class="col-lg-3">  <label>Contato</label> <input required="required" data-placement="left" title="CONTATO:" class="form-control js-tooltip"  placeholder="CONTATO:"  type="text" name="status"> </div>
                                    <div class="col-lg-9">  <label>E-mail Contato</label> <input class="form-control" placeholder="EMAIL CONTATO">  </div>
                                </div><br><br>
                                                         
                                <div class="col-lg-offset-0" >
                                    <div class="col-lg-12">
                                      <label>Observa��o</label>  <textarea class="form-control" rows="3"></textarea>
                                    </div>
                                </div> 
                           
                         </div>                                   
                            -->           
                                                   
              <div  class="col-lg-offset-0 modal-footer">
                  <div class="col-lg-7">  <!--class="modal-footer"-->
                      <button class="btn btn-success glyphicon glyphicon-floppy-save " type="submit" name="salvar" value="Salvar" > SALVAR</button>
                      <a href="Exemplo.jsp"  class="btn btn-danger glyphicon glyphicon-remove"> CANCELAR</a>
                      <a onclick=""></a>
                </div>
              </div>

         </div>
       </form>    
    </div>
  <!--****************************************************************************************************-->  
                                                   
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

         