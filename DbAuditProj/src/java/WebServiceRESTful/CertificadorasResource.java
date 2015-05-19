
package WebServiceRESTful;

import data.Certificadora;
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
public class CertificadorasResource {
    private EntityManager entityManager = Persistence.createEntityManagerFactory("localPU").createEntityManager();

    private Integer countCertificadoras() {
        Query query = entityManager.createQuery("SELECT COUNT(cert.id) FROM Certificadora cert");
        return ((Long) query.getSingleResult()).intValue();
    }

    @SuppressWarnings("unchecked")
    private List<Certificadora> findCertificadoras(int startPosition, int maxResults, String sortFields, String sortDirections) {
        Query query =
                entityManager.createQuery("SELECT cert.ID FROM CERTIFICADORA CERT ORDER BY CERT." + sortFields + " " + sortDirections);
        query.setFirstResult(startPosition);
        query.setMaxResults(maxResults);
        return query.getResultList();
    }

    private PaginatedListWrapper findCertificadoras(PaginatedListWrapper wrapper) {
        wrapper.setTotalResults(countCertificadoras());
        int start = (wrapper.getCurrentPage() - 1) * wrapper.getPageSize();
        wrapper.setList(findCertificadoras(start,
                                    wrapper.getPageSize(),
                                    wrapper.getSortFields(),
                                    wrapper.getSortDirections()));
        return wrapper;
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public PaginatedListWrapper listCertificadoras(@DefaultValue("1")
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
        return findCertificadoras(paginatedListWrapper);
    }

    @GET
    @Path("{id}")
    public Certificadora getCertificadoras(@PathParam("id") Long id) {
        return entityManager.find(Certificadora.class, id);
    }

    @POST
    public Certificadora saveCertificadoras(Certificadora certificadora) {
        if (certificadora.getId() == null) {
            Certificadora certificadoraToSave = new Certificadora();            
            certificadoraToSave.setId(certificadora.getId());
            certificadoraToSave.setCep(certificadora.getCep());
            certificadoraToSave.setFantaCert(certificadora.getFantaCert());
            certificadoraToSave.setCompleEndCert(certificadora.getCompleEndCert());
            certificadoraToSave.setFone1Cert(certificadora.getFone1Cert());
            certificadoraToSave.setFone2Cert(certificadora.getFone2Cert());
            certificadoraToSave.setEmailCert(certificadora.getEmailCert());
            certificadoraToSave.setSiteCert(certificadora.getSiteCert());
            certificadoraToSave.setContatoCert(certificadora.getContatoCert());
            certificadoraToSave.setRazaoCert(certificadora.getRazaoCert());
            certificadoraToSave.setCnpjCert(certificadora.getCnpjCert());
            certificadoraToSave.setInscriCert(certificadora.getInscriCert());
            certificadoraToSave.setObsCert(certificadora.getObsCert());
            certificadoraToSave.setStatusCert(certificadora.getStatusCert());
            entityManager.persist(certificadora);
        } else {
            Certificadora certificadoraToUpdate = getCertificadoras(certificadora.getId());
            certificadoraToUpdate.setCep(certificadora.getCep());
            certificadoraToUpdate.setFantaCert(certificadora.getFantaCert());
            certificadoraToUpdate.setCompleEndCert(certificadora.getCompleEndCert());
            certificadoraToUpdate.setFone1Cert(certificadora.getFone1Cert());
            certificadoraToUpdate.setFone2Cert(certificadora.getFone2Cert());
            certificadoraToUpdate.setEmailCert(certificadora.getEmailCert());
            certificadoraToUpdate.setSiteCert(certificadora.getSiteCert());
            certificadoraToUpdate.setContatoCert(certificadora.getContatoCert());
            certificadoraToUpdate.setRazaoCert(certificadora.getRazaoCert());
            certificadoraToUpdate.setCnpjCert(certificadora.getCnpjCert());
            certificadoraToUpdate.setInscriCert(certificadora.getInscriCert());
            certificadoraToUpdate.setObsCert(certificadora.getObsCert());
            certificadoraToUpdate.setStatusCert(certificadora.getStatusCert());
            certificadora = entityManager.merge(certificadoraToUpdate);
        }
        return certificadora;
    }

    @DELETE
    @Path("{id}")
    public void deleteCliente(@PathParam("id") Long id) {
        entityManager.remove(getCertificadoras(id));
    }
}
