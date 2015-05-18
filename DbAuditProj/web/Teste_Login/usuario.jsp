<%@ page contentType="text/html; charset=iso-8859-1" language="java" import="java.sql.*" errorPage="" %>


<html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <link href="css.css" rel="stylesheet" type="text/css" />  
      <title>JSP Page</title>
    </head>
    
    <body>
      <p   align="center" class="style1">Controle de Usuário </p>
      <p   align="center" class="style1"> 
      <a   href="cadUsuario.jsp"><img src="imagens/cadastro2.png" width="100" height="64" title="Registrar novo Cadastro" /></a>
      <%-- <a   href="imprime_usuario.jsp"> <img src="imagens/print.gif" width="0" height="0"/></a> --%>
   
      <p align="center"><span class="style2">Ordenar por: 
      <a href="usuario.jsp?ordenacao=crescente">Código</a> - 
      <a href="usuario.jsp?ordenacao=alfabetica">Alfabética</a></span></p>

    
     <table width="561" border="1" align="center">
      <tr bgcolor="#FFFF00">
        <td width="58"><div align="center" class="style4">Código</div></td>
        <td width="147"><div align="center" class="style4">Usuário</div></td>
        <td width="77"><div align="center" class="style4">Senha</div></td>
        <td width="104"><div align="center" class="style4">Tip. Auditor </div></td>
        <td width="104"><div align="center" class="style4">Auditor </div></td>
        <td width="60"><div align="center" class="style4">Alterar</div></td>
        <td width="75"><div align="center" class="style4">Excluir</div></td>
      </tr>
      <%
      try
        {
          Class.forName("org.postgresql.Driver");

	 Connection con = DriverManager.getConnection("jdbc:postgresql://localhost/DbAudit","postgres","admin");

	  Statement st = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE,
	  ResultSet.CONCUR_READ_ONLY); 
			
	  if (request.getParameter("acao") != null)
	   {
            // st.executeUpdate("delete from login where log_codigo = "+request.getParameter("codigo"));
     	   }
     		
            ResultSet rs = null;

            if(request.getParameter("ordenacao") == null)
            {
                   rs = st.executeQuery("select * from auditor order by nomeaudit");
            }
            else if (request.getParameter("ordenacao").equals("crescente"))
               {
                   rs = st.executeQuery("select * from autidor");
               }
            else if (request.getParameter("ordenacao").equals("alfabetica"))
               {
                   rs = st.executeQuery("select * from auditor order by nomeaudit");
               }
            
	    while(rs.next())
      { %> 
  
      <tr bgcolor="#CCFFCC">
        <td><div align="center"><%=rs.getString("idauditor")%></div></td>
        <td><%=rs.getString("usuaudit")%></td>
        <td><div align="center"><%=rs.getString("senhaudit")%></div></td>
        <td><div align="center"><%=rs.getString("tipoaudit")%></div></td>
        <td><%=rs.getString("nomeaudit")%></td>
        
        <td><div align="center"><a  href="alteraUsuario.jsp?codigo=<%=rs.getString("log_codigo")%>&amp;usuario=<%=rs.getString("log_usuario")%>&amp;senha=<%=rs.getString("log_senha")%>&amp;nivelacesso=<%=rs.getString("log_nivelacesso")%>&amp;codexc=<%=rs.getString("log_codigo")%>"><img src="imagens/alterar.png" width="24" height="24" /></a></div></td>
        <td><div align="center"><a href="usuario.jsp?acao=Excluir&amp;codigo=<%=rs.getString("log_codigo")%>"><img src="imagens/excluir1.png" alt="" width="24" height="24" /></a></div></td>
      </tr>
       <%}
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
                  
       </table>
    
    </body>
</html>




<%-- 
    Document   : usuario
    Created on : 30/04/2015, 20:35:37
    Author     : PEDRO-SATC
--%>
