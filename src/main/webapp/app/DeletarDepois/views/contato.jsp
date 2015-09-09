<%-- 
    Document   : contato
    Created on : 20/07/2015, 12:37:49
    Author     : pedro
--%>
<%
  int  acesso = 1;
%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
         <form class="container">

      <div class="page-header">
        <h1>Contato</h1>
      </div>

    
      <input type="text" class="span2" placeholder="nome">
      <select class="span2"><option>UF</option></select>
      <span class="uneditable-input span2 icon-user-md">fone</span><span class=" icon-home"></span>
      
       <table class="table table-responsive  cor_tabale1 table-bordered tdd" >
                  <tbody>                  
                    <tr>                  
                        <td> <input class="col-md-12" hidden=""  name="id" value="">
                            <input class="col-md-12" disabled=""  placeholder="Codigo Automatico:"> 
                       </td>
                    </tr>                           
                    <tr>                     
                        <td><input required="required" data-placement="left" title="Descrição:" class="form-control js-tooltip"   placeholder="Descrição:" pattern="[A-Za-z]++"  type="text" name="descricao" value=""></td>
                    </tr>
                    <tr>
                        <td><input required="required" data-placement="left" title="Estado:" class="col-md-12 js-tooltip"  placeholder="UF:"  type="text" name="uf" value=""></td>
                    </tr>
                    <tr>
                        <td><input required="required" data-placement="left" title="Status:" class="col-md-12 js-tooltip"  placeholder="Status:"  type="text" name="status"></td>
                   </tr>
                  </tbody>
                 </table>

   

    </form> <!-- /container -->
    
    </body>
</html>
