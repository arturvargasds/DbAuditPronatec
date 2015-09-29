
package com.cortez.samples.javaee7angular.data;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.SecondaryTable;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "Ceps")
@SecondaryTable(name = "Cidades", pkJoinColumns = { @PrimaryKeyJoinColumn(name = "idcid") })
public class Ceps implements Serializable 
{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "IDCEP")
    @SequenceGenerator(name = "IDCEP", sequenceName = "seq_ceps")
    @Column(name = "idcep")
    private Long id;     
    
    @Column(name = "CEP",length = 8)
    private String cep;
    
    @Column(table = "Cidades", name = "DESCRICID")
    private String descriCid;
     
    @Column(name = "IDCID")
    private int idCid;
  
    @Column(name = "IDBAI")
    private int idBai;
   
    @Column(name = "LOGRACEP", length = 60)
    private String lograCep;
    
    @Column(name = "OBSCEP", length = 100)
    private String obsCep;
       
    @Column(name = "STATUSCEP", length = 1)
    private String statusCep; 
    
    

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }    

    public String getCep() {
        return cep;
    }

    public void setCep(final String cep) {
        this.cep = cep;
    }

    public int getIdCid() {
        return idCid;
    }

    public void setIdCid(final int idCid) {
        this.idCid = idCid;
    }

    public int getIdBai() {
        return idBai;
    }

    public void setIdBai(final int idBai) {
        this.idBai = idBai;
    }

    public String getLograCep() {
        return lograCep;
    }

    public void setLograCep(final String lograCep) {
        this.lograCep = lograCep;
    }

    public String getObsCep() {
        return obsCep;
    }

    public void setObsCep(final String obsCep) {
        this.obsCep = obsCep;
    }

    public String getStatusCep() {
        return statusCep;
    }

    public void setStatusCep(final String statusCep) {
        this.statusCep = statusCep;
    }  

    
    

    public String getDescriCid() {
        return descriCid;
    }

    public void setDescriCid( final String descriCid) {
        this.descriCid = descriCid;
    }
    
    
    
    
    
    @Override
    public boolean equals(Object obj) {
        return super.equals(obj);
    }
    @Override
    public int hashCode() {
        return super.hashCode();
    }
}
