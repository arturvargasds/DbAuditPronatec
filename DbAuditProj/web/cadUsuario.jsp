<%@ page contentType="text/html; charset=iso-8859-1" language="java" import="java.sql.*" errorPage="" %>


<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <link href="css.css" rel="stylesheet" type="text/css" /> 
        <title>JSP Page</title>
    </head>
    <body>
        <p align="center"><span class="style1">Cadastro de Usuários</span></p>
        
        <% 

          if (request.getParameter("acao") == null)
           { 
            //out.println("não houve ação");
        %>
        
        <form id="frmInserirUsuario" name="frmInserirUsuario" method="post" action= "cadUsuario.jsp?acao=gravar">
          <label>Código.:
          <input name="tf_codigo" type="text" id="tf_codigo" value="automatico" size="15" maxlength="15" disabled="disabled"/>
          </label>
          <p>
            <label>Nome Usuário.:
            <input name="tf_usuario" type="text" id="tf_usuario" size="15" maxlength="10" />
            </label>
            <label>Senha.:
            <input name="tf_senha" type="password" id="tf_senha" size="15" maxlength="10" />
            </label>
          </p>
          <p>
            <label>Nível Acesso.:
            <input name="tf_nivelacesso" type="text" id="tf_nivelacesso" size="3" maxlength="1" />
            </label>
          </p>
          <p>
            <label>
            <input type="submit" name="gravar" id="gravar" value="gravar" />
            </label>
            <label></label>
            <input type="reset" name="Limpar" id="Limpar" value="Limpar" />
          </p>
        </form>
        <% } 
		   else 
		   {
		       //out.println("houve a ação");
			   
			   if ((request.getParameter("tf_usuario").length() <= 0) || (request.getParameter("tf_senha").length() <= 0) || (request.getParameter("tf_nivelacesso").length() <= 0))
			   {	       
				   //out.println("Atenção, você deve digitar o nome do usuario");
				   response.sendRedirect("cadUsuario.jsp");
			   }
			   else
			   {		   
			       try
  		           {
	 			      Class.forName("org.postgresql.Driver");
	 		          Connection con = DriverManager.getConnection("jdbc:postgresql://localhost/aula_neri","postgres","admin");
				      Statement st = con.createStatement();
				  
				      st.executeUpdate("insert into login (log_usuario, log_senha, log_nivelacesso) values ('"+request.getParameter("tf_usuario")+"','"+request.getParameter("tf_senha")+"','"+request.getParameter("tf_nivelacesso")+"')");
				  
				       response.sendRedirect("usuario.jsp"); //vai para o usuario.jsp
				  
					}
    				  catch(ClassNotFoundException erroClass)
				  	{
						 out.println("Classe Driver JDBC não foi localizado, erro = "+erroClass);
				  	}
				  	catch(SQLException erroSQL)
				  	{
						 out.println("Erro de conexão com o Banco de dados, erro = "+erroSQL);
				  	}

		   
		    } 
		}%>
    </body>
</html>


<%-- 
    Document   : cadUsuario
    Created on : 01/05/2015, 10:40:00
    Author     : PEDRO-SATC
--%>