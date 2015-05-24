
package WebServiceRESTful;

import data.Cep;
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
public class CepResource 
{
    
      
  private EntityManager entityManager ;

    public CepResource() {
        entityManager = Persistence.createEntityManagerFactory("PathPersist").createEntityManager();
    }
  
  

    private Integer countCeps() {
        Query query = entityManager.createQuery("SELECT COUNT(cep.id) FROM Cep cep");
        return ((Long) query.getSingleResult()).intValue();
    }

    @SuppressWarnings("unchecked")
    private List<Cep> findCeps(int startPosition, int maxResults, String sortFields, String sortDirections) {
        Query query =
                entityManager.createQuery("SELECT cep.* FROM CEP cep ORDER BY cep." + sortFields + " " + sortDirections);
        query.setFirstResult(startPosition);
        query.setMaxResults(maxResults);
        return query.getResultList();
    }

    private PaginatedListWrapper findCeps(PaginatedListWrapper wrapper) {
        wrapper.setTotalResults(countCeps());
        int start = (wrapper.getCurrentPage() - 1) * wrapper.getPageSize();
        wrapper.setList(findCeps(start,
                                    wrapper.getPageSize(),
                                    wrapper.getSortFields(),
                                    wrapper.getSortDirections()));
        return wrapper;
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public PaginatedListWrapper listCeps(@DefaultValue("1")
                                            @QueryParam("page")
                                            Integer page,
                                            @DefaultValue("id")
                                            @QueryParam("sortFields")
                                            String sortFields,
                                            @DefaultValue("asc")
                                            @QueryParam("sortDirections")
                                            String sortDirections) {
        PaginatedListWrapper paginatedListWrapper = new PaginatedListWrapper();
        paginatedListWrapper.setCurrentPage(page);
        paginatedListWrapper.setSortFields(sortFields);
        paginatedListWrapper.setSortDirections(sortDirections);
        paginatedListWrapper.setPageSize(10);
        return findCeps(paginatedListWrapper);
    }

    @GET
    @Path("{id}")
    public Cep getCeps(@PathParam("id") Long id) {
        return entityManager.find(Cep.class, id);
    }

    @POST
    public Cep saveCep(Cep cep) {
        if (cep.getId()== null) {
            Cep cepToSave = new Cep();
            cepToSave.setCep(cep.getCep());
            cepToSave.setIdCid(cep.getIdCid());            
            cepToSave.setIdBai(cep.getIdBai());            
            cepToSave.setLograCep(cep.getLograCep());
            cepToSave.setObsCep(cep.getObsCep());
            cepToSave.setStatusCep(cep.getStatusCep());          
            entityManager.persist(cep);
        } else {
            Cep cepToUpdate = getCeps(cep.getId());            
            cepToUpdate.setCep(cep.getCep());
            cepToUpdate.setIdCid(cep.getIdCid());            
            cepToUpdate.setIdBai(cep.getIdBai());            
            cepToUpdate.setLograCep(cep.getLograCep());
            cepToUpdate.setObsCep(cep.getObsCep());
            cepToUpdate.setStatusCep(cep.getStatusCep());            
            cep = entityManager.merge(cepToUpdate);
        }

        return cep;
    }

    @DELETE
    @Path("{id}")
    public void deleteCep(@PathParam("id") Long id) {
        entityManager.remove(getCeps(id));
    }   
    
    
}
