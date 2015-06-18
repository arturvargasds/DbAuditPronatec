
package WebServiceRESTful;
import data.Bairro;
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
public class BairroResource  {
    
    private  EntityManager entityManager ;

    public BairroResource() {
        entityManager = Persistence.createEntityManagerFactory("PathPersist").createEntityManager();
    }
    
    

    private Integer countBairros() {
        Query query = entityManager.createQuery("SELECT COUNT(c.id) FROM Bairros c");
        return ((Long) query.getSingleResult()).intValue();
    }

    @SuppressWarnings("unchecked")
    private List<Bairro> findBairros(int startPosition, int maxResults, String sortFields, String sortDirections) {
        Query query =
                entityManager.createQuery("SELECT c FROM Bairros c ORDER BY c." + sortFields + " " + sortDirections);
        query.setFirstResult(startPosition);
        query.setMaxResults(maxResults);
        return query.getResultList();
    }

    private PaginatedListWrapper findCidades(PaginatedListWrapper wrapper) {
        wrapper.setTotalResults(countBairros());
        int start = (wrapper.getCurrentPage() - 1) * wrapper.getPageSize();
        wrapper.setList(findBairros(start,
                                    wrapper.getPageSize(),
                                    wrapper.getSortFields(),
                                    wrapper.getSortDirections()));
        return wrapper;
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public PaginatedListWrapper listCidades(@DefaultValue("1")
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
        return findCidades(paginatedListWrapper);
    }

    @GET
    @Path("{id}")
    public Bairro getBairro(@PathParam("id") Long id) {
        return entityManager.find(Bairro.class, id);
    }

    @POST
    public Bairro saveBairro(Bairro bairro) {
        entityManager.getTransaction().begin();
        if (bairro.getId() == null) {
            Bairro bairroToSave = new Bairro();
            bairroToSave.setDescricao(bairro.getDescricao());
            bairroToSave.setStatusBai(bairro.getStatusBai());
            entityManager.persist(bairro);
        } else {
            Bairro bairroToUpdate = getBairro(bairro.getId());
            bairroToUpdate.setDescricao(bairro.getDescricao());     
            bairroToUpdate.setStatusBai(bairro.getStatusBai());
            bairro = entityManager.merge(bairroToUpdate);
        }
        entityManager.getTransaction().commit();

        return bairro;
    }

    @DELETE
    @Path("{id}")
    public void deleteBairro(@PathParam("id") Long id) {
        entityManager.getTransaction().begin(); 
        entityManager.remove(getBairro(id));
        entityManager.getTransaction().commit();
    }
}

