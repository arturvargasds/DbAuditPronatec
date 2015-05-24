package WebServiceRESTful;

import data.Cliente;
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
public class ClienteResource 
{
  private EntityManager entityManager ;

    public ClienteResource() {
        entityManager = Persistence.createEntityManagerFactory("PathPersist").createEntityManager();
    }
  

    private Integer countClientes() {
        Query query = entityManager.createQuery("SELECT COUNT(cli.id) FROM Cliente cli");
        return ((Long) query.getSingleResult()).intValue();
    }

    @SuppressWarnings("unchecked")
    private List<Cliente> findClientes(int startPosition, int maxResults, String sortFields, String sortDirections) {
        Query query =
                entityManager.createQuery("SELECT cli.ID FROM CLIENTE CLI ORDER BY CLI." + sortFields + " " + sortDirections);
        query.setFirstResult(startPosition);
        query.setMaxResults(maxResults);
        return query.getResultList();
    }

    private PaginatedListWrapper findClientes(PaginatedListWrapper wrapper) {
        wrapper.setTotalResults(countClientes());
        int start = (wrapper.getCurrentPage() - 1) * wrapper.getPageSize();
        wrapper.setList(findClientes(start,
                                    wrapper.getPageSize(),
                                    wrapper.getSortFields(),
                                    wrapper.getSortDirections()));
        return wrapper;
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public PaginatedListWrapper listClientes(@DefaultValue("1")
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
        return findClientes(paginatedListWrapper);
    }

    @GET
    @Path("{id}")
    public Cliente getClientes(@PathParam("id") Long id) {
        return entityManager.find(Cliente.class, id);
    }

    @POST
    public Cliente saveClientes(Cliente cliente) {
        if (cliente.getId() == null) {
            Cliente clienteToSave = new Cliente();            
            clienteToSave.setIdcep(cliente.getIdcep());
            clienteToSave.setRazaoCli(cliente.getRazaoCli());
            clienteToSave.setFantaCli(cliente.getFantaCli());
            clienteToSave.setCompleEndCli(cliente.getCompleEndCli());
            clienteToSave.setFone1Cli(cliente.getFone1Cli());
            clienteToSave.setFone2Cli(cliente.getFone2Cli());
            clienteToSave.setEmailCli(cliente.getEmailCli());
            clienteToSave.setSiteCli(cliente.getSiteCli());
            clienteToSave.setContatoCli(cliente.getContatoCli());
            clienteToSave.setEmailContato(cliente.getEmailContato());
            clienteToSave.setCnpjCli(cliente.getCnpjCli());
            clienteToSave.setInscriCli(cliente.getInscriCli());
            clienteToSave.setObsCli(cliente.getObsCli());
            clienteToSave.setStatusCli(cliente.getStatusCli());
            entityManager.persist(cliente);
        } else {
            Cliente clienteToUpdate = getClientes(cliente.getId());
            clienteToUpdate.setIdcep(cliente.getIdcep());
            clienteToUpdate.setRazaoCli(cliente.getRazaoCli());
            clienteToUpdate.setFantaCli(cliente.getFantaCli());
            clienteToUpdate.setCompleEndCli(cliente.getCompleEndCli());
            clienteToUpdate.setFone1Cli(cliente.getFone1Cli());
            clienteToUpdate.setFone2Cli(cliente.getFone2Cli());
            clienteToUpdate.setEmailCli(cliente.getEmailCli());
            clienteToUpdate.setSiteCli(cliente.getSiteCli());
            clienteToUpdate.setContatoCli(cliente.getContatoCli());
            clienteToUpdate.setEmailContato(cliente.getEmailContato());
            clienteToUpdate.setCnpjCli(cliente.getCnpjCli());
            clienteToUpdate.setInscriCli(cliente.getInscriCli());
            clienteToUpdate.setObsCli(cliente.getObsCli());
            clienteToUpdate.setStatusCli(cliente.getStatusCli());
            cliente = entityManager.merge(clienteToUpdate);
        }
        return cliente;
    }

    @DELETE
    @Path("{id}")
    public void deleteCliente(@PathParam("id") Long id) {
        entityManager.remove(getClientes(id));
    }   
      
}

