package com.cortez.samples.javaee7angular.rest;

import com.cortez.samples.javaee7angular.data.Ocorrencias;
import com.cortez.samples.javaee7angular.pagination.PaginatedListWrapper;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;
import javax.persistence.Persistence;

@Stateless
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class OcorrenciaResource 
{
   private final EntityManager entityManager ;

    public OcorrenciaResource() {
        entityManager = Persistence.createEntityManagerFactory("localPU").createEntityManager();
    }
  
  

    private Integer countOcorrencias() {
        Query query = entityManager.createQuery("SELECT COUNT(ocor.id) FROM Ocorrencias ocor");
        return ((Long) query.getSingleResult()).intValue();
    }

    @SuppressWarnings("unchecked")
    private List<Ocorrencias> findOcorrencias(int startPosition, int maxResults, String sortFields, String sortDirections) {
        Query query =
                entityManager.createQuery("SELECT ocor FROM Ocorrencias ocor ORDER BY ocor." + sortFields + " " + sortDirections);
        query.setFirstResult(startPosition);
        query.setMaxResults(maxResults);
        return query.getResultList();
    }

    private PaginatedListWrapper findOcorrencias(PaginatedListWrapper wrapper) {
        wrapper.setTotalResults(countOcorrencias());
        int start = (wrapper.getCurrentPage() - 1) * wrapper.getPageSize();
        wrapper.setList(findOcorrencias(start,
                                    wrapper.getPageSize(),
                                    wrapper.getSortFields(),
                                    wrapper.getSortDirections()));
        return wrapper;
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public PaginatedListWrapper listOcorrencias(@DefaultValue("1")
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
        return findOcorrencias(paginatedListWrapper);
    }

    @GET
    @Path("{id}")
    public Ocorrencias getOcorrencias(@PathParam("id") Long id) {
        return entityManager.find(Ocorrencias.class, id);
    }

    @POST
    public Ocorrencias saveOcorrencias(Ocorrencias ocorrencia) {
        if (ocorrencia.getId() == null) {
            Ocorrencias ocorrenciaToSave = new Ocorrencias();
            ocorrenciaToSave.setId(ocorrencia.getId());
            ocorrenciaToSave.setDtAtualiza(ocorrencia.getDtAtualiza());
            ocorrenciaToSave.setDtHrOcorre(ocorrencia.getDtHrOcorre());
            ocorrenciaToSave.setIdCola(ocorrencia.getIdCola());
            ocorrenciaToSave.setIdPontoCtrl(ocorrencia.getIdPontoCtrl());
            ocorrenciaToSave.setDescriOcorre(ocorrencia.getDescriOcorre());
            ocorrenciaToSave.setSugesOcorre(ocorrencia.getSugesOcorre());
            ocorrenciaToSave.setObsOcorre(ocorrencia.getObsOcorre());
            ocorrenciaToSave.setStatusOcorre(ocorrencia.getStatusOcorre());
            entityManager.persist(ocorrencia);
        } else {
            Ocorrencias ocorrenciaToUpdate = getOcorrencias(ocorrencia.getId());
            ocorrenciaToUpdate.setId(ocorrencia.getId());
            ocorrenciaToUpdate.setDtAtualiza(ocorrencia.getDtAtualiza());
            ocorrenciaToUpdate.setDtHrOcorre(ocorrencia.getDtHrOcorre());
            ocorrenciaToUpdate.setIdCola(ocorrencia.getIdCola());
            ocorrenciaToUpdate.setIdPontoCtrl(ocorrencia.getIdPontoCtrl());
            ocorrenciaToUpdate.setDescriOcorre(ocorrencia.getDescriOcorre());
            ocorrenciaToUpdate.setSugesOcorre(ocorrencia.getSugesOcorre());
            ocorrenciaToUpdate.setObsOcorre(ocorrencia.getObsOcorre());
            ocorrenciaToUpdate.setStatusOcorre(ocorrencia.getStatusOcorre());
            ocorrencia = entityManager.merge(ocorrenciaToUpdate);
        }
        return ocorrencia;
    }

    @DELETE
    @Path("{id}")
    public void deleteOcorrencias(@PathParam("id") Long id) {
        entityManager.remove(getOcorrencias(id));
    }   
         
}
