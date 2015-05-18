<%@ page contentType="text/html; charset=iso-8859-1" language="java" import="java.sql.*" errorPage="" %>

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <link href="css.css" rel="stylesheet" type="text/css" /> 
        <title>JSP Page</title>
    </head>
    <body>
       <%
      try
	  {
			//1º carregar o driver
			Class.forName("org.postgresql.Driver");
			//out.println("Conseguiu carregar o driver");
			
			Connection con = DriverManager.getConnection("jdbc:postgresql://localhost/DbAudit","postgres","admin");
			out.println("Conexão com sucesso");
			
			if (request.getParameter("usuario") != null)
			{
				Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE,
	            ResultSet.CONCUR_READ_ONLY); 
				//out.println("passou pelo statement");
				//prof Neri Neitzke - videoaulas@informaticon.com.br
			
				ResultSet rs = st.executeQuery("select * from auditor where usuaudit = '"+
				request.getParameter("usuario")+"' and senhaudit = '"+
				request.getParameter("senha")+"'");
			
				if (rs.next())
				{
				  //  response.sendRedirect("index.jsp");
                                    response.sendRedirect("usuario.jsp");
				   //out.println("Bem vindo ao sistema");				   
				}   
				else
				   out.println("você não tem acesso ao sistema");   			
			}			
			//while(rs.next())
			//   out.println("usuario = "+ rs.getString("log_usuario"));				  		  
	  }
	  catch(ClassNotFoundException erroClass)
	  {
	     out.println("Classe Driver JDBC não foi localizado, erro = "+erroClass);
	  }
	  catch(SQLException erroSQL)
	  {
  	     out.println("Erro de conexão com o Banco de dados, erro = "+erroSQL);
	  }
%>
<form id="form2" name="form2" method="post" action="">
  <table width="207" border="1" align="center">
    <tr>
      <td colspan="2"><div align="center"><span class="style1">ACESSO AO SISTEMA</span></div></td>
    </tr>
    <tr>
      <td width="90">Usuário</td>
      <td width="101"><label>
        <div align="center">
          <input name="usuario" type="text" id="usuario" size="10" />
          </div>
      </label></td>
    </tr>
    <tr>
      <td>Senha</td>
      <td><label>
        <div align="center">
          <input name="senha" type="password" id="senha" size="10" />
          </div>
      </label></td>
    </tr>
    <tr>
      <td><label>
        <div align="center">
          <input type="reset" name="limpar" id="limpar" value="Limpar" />
          </div>
      </label></td>
      <td><label>
        <div align="center">
          <input type="submit" name="acesso" id="acesso" value="Acessar" />
          </div>
      </label></td>
    </tr>
  </table>
</form>
    </body>
</html>


<%-- 
    Document   : login
    Created on : 30/04/2015, 22:34:51
    Author     : PEDRO-SATC
--%>
