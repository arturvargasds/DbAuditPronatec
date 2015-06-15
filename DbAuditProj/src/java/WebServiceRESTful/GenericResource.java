package WebServiceRESTful;
import javax.ejb.Stateless;
import javax.ws.rs.ApplicationPath;
import javax.ws.rs.Consumes;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Application;
import javax.ws.rs.core.MediaType;

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
    
    @Path("bairros")
    public BairroResource bairroResource()
    {
       return new BairroResource(); 
    }
    
    @Path("auditorias")
    public AuditoriaResource auditoriaResource()
    {
       return new AuditoriaResource(); 
    }
    
    @Path("equipeAuditores")
    public EquipeAuditoresResource EquipeAuditoresResource()
    {
       return new EquipeAuditoresResource(); 
    }
    
     @Path("auditores")
    public AuditorResource AuditorResource()
    {
       return new AuditorResource(); 
    }
    
    @Path("ceps")
    public CepResource CepResource()
    {
       return new CepResource(); 
    }
    
     @Path("clientes")
    public ClienteResource ClienteResource()
    {
       return new ClienteResource(); 
    }
    
      @Path("colaboradores")
    public ColaboradoresResource ColaboradoresResource()
    {
       return new ColaboradoresResource(); 
    }
    
     @Path("certificadoras")
    public CertificadorasResource CertificadorasResource()
    {
       return new CertificadorasResource(); 
    }
    
    @Path("checklist")
    public CheckListResource CheckListResource()
    {
       return new CheckListResource(); 
    }
    
    @Path("naoconformidades")
    public NaoConformidadesResource NaoConformidadesResource()
    {
       return new NaoConformidadesResource(); 
    }
    
    @Path("ocorrencias")
    public OcorrenciasResource OcorrenciasResource()
    {
       return new OcorrenciasResource(); 
    }
    
    
    
    
    
    
    
    
    
    
    
 
}
