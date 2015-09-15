
package com.cortez.samples.javaee7angular.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import java.sql.Timestamp;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
public class NaoConformidades 
{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "IDNC")
    @SequenceGenerator(name = "IDNC", sequenceName = "seq_naoconformidades")
    @Column(name = "IDNC")
    private Long id;
    
    @Column(name = "IDCOLA" )
    private int idCola;  
    
    @Column(name = "IDPONTOCTRL" )
    private int idPontoCtrl;      
    
    @Column(name = "DTHRCADNC", length =19 )
    private Timestamp dtHrCadNc;  
    
    @Column(name = "DTPREVRESOLNC", length =19 )
    private Timestamp dtPrevResolNc;  
    
    @Column(name = "DTATUALIZA", length =19 )
    private Timestamp dtAtualiza; 
    
    @Column(name = "DESCRINC", length =254 )
    private String DescriNc; 
    
    @Column(name = "SUGESTAONC", length =254 )
    private String SugestaoNc;  
    
    @Column(name = "OBSNC", length =100 )
    private String obsNc; 
    
    @Column(name = "STATUSNC", length =1 )
    private String statusNc;     

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public int getIdCola() {
        return idCola;
    }

    public void setIdCola(final int idCola) {
        this.idCola = idCola;
    }

    public int getIdPontoCtrl() {
        return idPontoCtrl;
    }

    public void setIdPontoCtrl(final int idPontoCtrl) {
        this.idPontoCtrl = idPontoCtrl;
    }

    public Timestamp getDtHrCadNc() {
        return dtHrCadNc;
    }

    public void setDtHrCadNc(final Timestamp dtHrCadNc) {
        this.dtHrCadNc = dtHrCadNc;
    }

    public Timestamp getDtPrevResolNc() {
        return dtPrevResolNc;
    }

    public void setDtPrevResolNc(final Timestamp dtPrevResolNc) {
        this.dtPrevResolNc = dtPrevResolNc;
    }

    public Timestamp getDtAtualiza() {
        return dtAtualiza;
    }

    public void setDtAtualiza(final Timestamp dtAtualiza) {
        this.dtAtualiza = dtAtualiza;
    }

    public String getDescriNc() {
        return DescriNc;
    }

    public void setDescriNc(final String DescriNc) {
        this.DescriNc = DescriNc;
    }

    public String getSugestaoNc() {
        return SugestaoNc;
    }

    public void setSugestaoNc(final String SugestaoNc) {
        this.SugestaoNc = SugestaoNc;
    }

    public String getObsNc() {
        return obsNc;
    }

    public void setObsNc(final String obsNc) {
        this.obsNc = obsNc;
    }

    public String getStatusNc() {
        return statusNc;
    }

    public void setStatusNc(final String statusNc) {
        this.statusNc = statusNc;
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
