package WebServiceRESTful;
import javax.ejb.Stateless;
import javax.ws.rs.ApplicationPath;
import javax.ws.rs.Consumes;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Application;
import javax.ws.rs.core.MediaType;
import data.*;

@Stateless
@ApplicationPath("/api")
@Path("")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)

public class GenericResource extends Application
{
    
    @Path("cidades")
    public CidadeResource cidadeResource()
    {
       return new CidadeResource(); 
    }  
    
    
    
    
    
    
    
    
    
    
    
    
 
}
