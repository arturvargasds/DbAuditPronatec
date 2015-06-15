package WebServiceRESTful;

import data.Cidade;
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
public class CidadeResource  {
    
    private EntityManager entityManager ;

    public CidadeResource() {
        
        entityManager = Persistence.createEntityManagerFactory("PathPersist").createEntityManager();
        
    }
    
    

    private Integer countCidades() {
        Query query = entityManager.createQuery("SELECT COUNT(c.id) FROM Cidades c");
        return ((Long) query.getSingleResult()).intValue();
    }

    @SuppressWarnings("unchecked")
    private List<Cidade> findCidades(int startPosition, int maxResults, String sortFields, String sortDirections) {
        Query query =
                entityManager.createQuery("SELECT c FROM Cidades c ORDER BY c." + sortFields + " " + sortDirections);
        query.setFirstResult(startPosition);
        query.setMaxResults(maxResults);
        return query.getResultList();
    }

    private PaginatedListWrapper findCidades(PaginatedListWrapper wrapper) {
        wrapper.setTotalResults(countCidades());
        int start = (wrapper.getCurrentPage() - 1) * wrapper.getPageSize();
        wrapper.setList(findCidades(start,
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
    public Cidade getCidade(@PathParam("id") Long id) {
        return entityManager.find(Cidade.class, id);
    }

    @POST
    public Cidade saveCidade(Cidade cidade) 
    {
        entityManager.getTransaction().begin();
        /////
        if (cidade.getId() == null) {
            Cidade cidadeToSave = new Cidade();
            cidadeToSave.setNomeCid(cidade.getNomeCid());
            cidadeToSave.setSiglaUf(cidade.getSiglaUf());
            cidadeToSave.setStatusCid(cidade.getStatusCid());
            entityManager.persist(cidade);
        } else {
            Cidade cidadeToUpdate = getCidade(cidade.getId());
            cidadeToUpdate.setNomeCid(cidade.getNomeCid());
            cidadeToUpdate.setSiglaUf(cidade.getSiglaUf());
            cidadeToUpdate.setStatusCid(cidade.getStatusCid());
            cidade = entityManager.merge(cidadeToUpdate);
        }
        entityManager.getTransaction().commit();
        /////
        return cidade;
    }

    @DELETE
    @Path("{id}")
    public void deleteCidade(@PathParam("id") Long id) 
    {
        entityManager.getTransaction().begin(); 
        ////Startando a transação
        entityManager.remove(getCidade(id));  
        
        entityManager.getTransaction().commit();
        ////Tentando gravar a transação
    }
}
