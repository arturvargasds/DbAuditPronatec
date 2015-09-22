
package com.cortez.samples.javaee7angular.rest;
import com.cortez.samples.javaee7angular.data.Auditorias;
import com.cortez.samples.javaee7angular.pagination.PaginatedListWrapper;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.Persistence;
import javax.persistence.Query;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

@Stateless
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class AuditoriaResource 
{
   private final EntityManager entityManager ;

    public AuditoriaResource() {
        entityManager = Persistence.createEntityManagerFactory("localPU").createEntityManager();
    }

  
    private Integer countAuditorias()
    {
        Query query = entityManager.createQuery("SELECT COUNT(aud.id) FROM Auditorias aud");
        return ((Long) query.getSingleResult()).intValue();
    }

    @SuppressWarnings("unchecked")
    private List<Auditorias> findAuditorias(int startPosition, int maxResults, String sortFields, String sortDirections)
    {
        Query query =
                entityManager.createQuery("SELECT aud FROM Auditorias aud ORDER BY aud." + sortFields + " " + sortDirections);
        query.setFirstResult(startPosition);
        query.setMaxResults(maxResults);
        return query.getResultList();
    }

    private PaginatedListWrapper findAuditorias(PaginatedListWrapper wrapper)
    {
        wrapper.setTotalResults(countAuditorias());
        int start = (wrapper.getCurrentPage() - 1) * wrapper.getPageSize();
        wrapper.setList(findAuditorias(start,
                                       wrapper.getPageSize(),
                                       wrapper.getSortFields(),
                                       wrapper.getSortDirections()));
        return wrapper;
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public PaginatedListWrapper listAuditorias(@DefaultValue("1")
                                               @QueryParam("page")
                                               Integer page,
                                               @DefaultValue("id")
                                               @QueryParam("sortFields")
                                               String sortFields,
                                               @DefaultValue("asc")
                                               @QueryParam("sortDirections")
                                               String sortDirections)
    {
        PaginatedListWrapper paginatedListWrapper = new PaginatedListWrapper();
        paginatedListWrapper.setCurrentPage(page);
        paginatedListWrapper.setSortFields(sortFields);
        paginatedListWrapper.setSortDirections(sortDirections);
        paginatedListWrapper.setPageSize(10);
        return findAuditorias(paginatedListWrapper);
    }

    @GET
    @Path("{id}")
    public Auditorias getAuditorias(@PathParam("id") Long id)
    {
        return entityManager.find(Auditorias.class, id);
    }

    @POST
    public Auditorias saveAuditoria(Auditorias auditoria)
    {
         entityManager.getTransaction().begin();
        if (auditoria.getId() == null)
          {             
              Auditorias auditoriaToSave = new Auditorias();            
              auditoriaToSave.setId(auditoria.getId());                       
              auditoriaToSave.setDescriAudit(auditoria.getDescriAudit());                         
              auditoriaToSave.setDescriObjAudit(auditoria.getDescriObjAudit());            
              auditoriaToSave.setDtHrCadAudit(auditoria.getDtHrCadAudit());            
              auditoriaToSave.setDtHrIniAudit(auditoria.getDtHrIniAudit());            
              auditoriaToSave.setDtHrRealiaudit(auditoria.getDtHrRealiaudit());            
              auditoriaToSave.setDtAtualiza(auditoria.getDtAtualiza());            
              auditoriaToSave.setObsaudit(auditoria.getObsaudit());                        
              auditoriaToSave.setIdCert(auditoria.getIdCert());
              auditoriaToSave.setIdCli(auditoria.getIdCli());
              auditoriaToSave.setStatusaudit(auditoria.getStatusaudit());
              entityManager.persist(auditoria);
          } 
        else  
          {
              Auditorias auditoriaToUpdate = getAuditorias(auditoria.getId());
              auditoriaToUpdate.setId(auditoria.getId());                       
              auditoriaToUpdate.setDescriAudit(auditoria.getDescriAudit());                         
              auditoriaToUpdate.setDescriObjAudit(auditoria.getDescriObjAudit());            
              auditoriaToUpdate.setDtHrCadAudit(auditoria.getDtHrCadAudit());            
              auditoriaToUpdate.setDtHrIniAudit(auditoria.getDtHrIniAudit());            
              auditoriaToUpdate.setDtHrRealiaudit(auditoria.getDtHrRealiaudit());            
              auditoriaToUpdate.setDtAtualiza(auditoria.getDtAtualiza());            
              auditoriaToUpdate.setObsaudit(auditoria.getObsaudit());                        
              auditoriaToUpdate.setIdCert(auditoria.getIdCert());
              auditoriaToUpdate.setIdCli(auditoria.getIdCli());
              auditoriaToUpdate.setStatusaudit(auditoria.getStatusaudit());                        
              auditoria = entityManager.merge(auditoriaToUpdate);
          }
        entityManager.getTransaction().commit();
        return auditoria;
    }

    @DELETE
    @Path("{id}")
    public void deleteAuditoria(@PathParam("id") Long id)
    {
          entityManager.getTransaction().begin();
        entityManager.remove(getAuditorias(id));
        entityManager.getTransaction().commit();
    }    
}
