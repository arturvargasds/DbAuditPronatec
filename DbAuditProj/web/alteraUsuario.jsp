<%@ page contentType="text/html; charset=iso-8859-1" language="java" import="java.sql.*" errorPage="" %>
<html>
  <head>
     <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
     <title>JSP Page</title>
  </head>
  <body>
        <p align="center"><span class="style1">Alteração de Usuários</span></p>
        <% 
           //out.println("usuario = "+request.getParameter("usuario")); //usado para teste de passagem de parametros
         if (request.getParameter("acao") == null)
            { 
        %>       
        <form id="frmAlteraUsuario" name="frmAlteraUsuario" method="post" action="alteraUsuario.jsp?acao=alterar">
          <label>Código.:
          <input name="tf_codigo" type="text" id="tf_codigo" value="<%=request.getParameter("codigo")%>" size="15" maxlength="15" />
          </label>
          <p>
            <label>Nome Usuário.:
            <input name="tf_usuario" type="text" id="tf_usuario" value="<%=request.getParameter("usuario")%>" size="15" maxlength="10" />
            </label>
            <label>Senha.:
            <input name="tf_senha" type="password" id="tf_senha" value="<%=request.getParameter("senha")%>" size="15" maxlength="10" />
            </label>
          </p>
          <p>
            <label>Nível Acesso.:
            <input name="tf_nivelacesso" type="text" id="tf_nivelacesso" value="<%=request.getParameter("nivelacesso")%>" size="3" maxlength="1" />
            </label>
          </p>
          <p>
            <label>
            <input type="submit" name="gravar" id="gravar" value="Confirmar Altera&ccedil;&atilde;o" />
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
				   response.sendRedirect("Usuario.jsp");
			   }
			   else
			   {		   
			       try
  		           {
	 			      Class.forName("org.postgresql.Driver");
	 		          Connection con = DriverManager.getConnection("jdbc:postgresql://localhost/aula_neri","postgres","admin");
				      Statement st = con.createStatement();
				  
				      String sql = ("update login set log_usuario='"+request.getParameter("tf_usuario")+"',log_senha='"+request.getParameter("tf_senha")+"',log_nivelacesso='"+request.getParameter("tf_nivelacesso")+"' where log_codigo="+request.getParameter("tf_codigo"));
				        
					st.executeUpdate(sql);
					//out.println("sql = "+sql);
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
    Document   : alteraUsuario
    Created on : 01/05/2015, 11:01:20
    Author     : PEDRO-SATC
--%>