<%-- 
    Document   : index2
    Created on : 20/07/2015, 10:36:07
    Author     : pedro
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- bootstrap-->                  
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
     
    <body   ng-app="DbAudit_App" ng-init="tab=1">
      
     <%@include file="menu.html" %>
    
      <div id="page-wrapper">     <br>
            <div class="row">
                <div class="col-lg-12">
                    <div class="panel panel-info">
                        <div class="panel-heading">
                            <h4>Bem Vindo...! Administardor.</h4>   
                        </div>                      
                        <div class="panel-body">                           
                            <p>Você tem acesso total da aplicação</p>                            
                        </div>                
                    </div>               
                </div>
            </div><!-- /#page-wrapper -->
      </div> <!-- /#wrapper -->
    
      
      

        
        
      <!--  AngularJS 
     <script src="../../lib/bower/angular/1.3.16/angular.min.js"></script>
     <script src="../../lib/bower/angular/1.3.16/angular-route.min.js"></script>
     -->  
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
    
    <script>
       (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
       (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
       m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
       })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
       ga('create', 'UA-XXXXX-X');
       ga('send', 'pageview');
    </script>

    </body>
</html>
