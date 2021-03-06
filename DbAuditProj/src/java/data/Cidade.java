package data;

import data.*;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.xml.bind.annotation.XmlRootElement;


@Entity
@XmlRootElement
public class Cidade 
{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "IDCID")
    @SequenceGenerator(name = "IDCID", sequenceName = "CIDADES")
    @Column(name = "idcid")
    private Long id;
    
    @Column(name = "DESCRICID", length = 60)
    private String nomeCid;
    
    @Column(name = "UFCID", length = 2)
    private String siglaUf;
    
    @Column(name = "STATUSCID", length = 60)
    private String statusCid ;     

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public String getNomeCid() {
        return nomeCid;
    }

    public void setNomeCid(final String nomeCid) {
        this.nomeCid = nomeCid;
    }

    public String getSiglaUf() {
        return siglaUf;
    }

    public void setSiglaUf(final String siglaUf) {
        this.siglaUf = siglaUf;
    }

    public String getStatusCid() {
        return statusCid;
    }

    public void setStatusCid(final String statusCid) {
        this.statusCid = statusCid;
    }
    
}