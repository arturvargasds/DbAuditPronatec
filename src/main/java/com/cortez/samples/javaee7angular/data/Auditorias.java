
package com.cortez.samples.javaee7angular.data;

import java.io.Serializable;
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
public class Auditorias implements Serializable 
{
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "IDAUDIT")
    @SequenceGenerator(name = "IDAUDIT", sequenceName = "seq_auditorias",allocationSize = 1)
    @Column(name = "idaudit")
    private Long id;   
    
    @Column(name = "IDCERT" )
    private int idCert ;    
    
    @Column(name = "IDCLI" )
    private int idCli ;  
    
    @Column(name = "DESCRIAUDIT", length =254 )
    private String descriAudit;  
        
    @Column(name = "DESCRIOBJAUDIT", length =254 )
    private String descriObjAudit;  
     
    @Column(name = "DTHRCADAUDIT" )
    private Timestamp dtHrCadAudit ;  
    
    @Column(name = "DTHRINIAUDIT", length =19 )
    private Timestamp dtHrIniAudit;  
    
    @Column(name = "DTHRREALIAUDIT", length =19 )
    private Timestamp dtHrRealiaudit;  
    
    @Column(name = "DTATUALIZA", length =19 )
    private Timestamp dtAtualiza;  

    @Column(name = "OBSAUDIT", length =100 )
    private String obsaudit;  
    
    @Column(name = "STATUSaudit", length =1 )
    private String statusaudit;   

    public Long getId() 
    {
        return id;
    }

    public void setId(final Long id) 
    {
        this.id = id;
    }

    public int getIdCert() {
        return idCert;
    }

    public void setIdCert(final int idCert) {
        this.idCert = idCert;
    }

    public int getIdCli() {
        return idCli;
    }

    public void setIdCli(final int idCli) {
        this.idCli = idCli;
    }

    public String getDescriAudit() 
    {
        return descriAudit;
    }

    public void setDescriAudit(final String descriAudit) 
    {
        this.descriAudit = descriAudit;
    }

    public String getDescriObjAudit() 
    {
        return descriObjAudit;
    }

    public void setDescriObjAudit(final String descriObjAudit) 
    {
        this.descriObjAudit = descriObjAudit;
    }

    public Timestamp getDtHrCadAudit() 
    {
        return dtHrCadAudit;
    }

    public void setDtHrCadAudit(final Timestamp dtHrCadAudit) 
    {
        this.dtHrCadAudit = dtHrCadAudit;
    }

    public Timestamp getDtHrIniAudit() 
    {
        return dtHrIniAudit;
    }

    public void setDtHrIniAudit(final Timestamp dtHrIniAudit) 
    {
        this.dtHrIniAudit = dtHrIniAudit;
    }

    public Timestamp getDtHrRealiaudit() 
    {
        return dtHrRealiaudit;
    }

    public void setDtHrRealiaudit(final Timestamp dtHrRealiaudit) 
    {
        this.dtHrRealiaudit = dtHrRealiaudit;
    }

    public Timestamp getDtAtualiza() 
    {
        return dtAtualiza;
    }

    public void setDtAtualiza(final Timestamp dtAtualiza) 
    {
        this.dtAtualiza = dtAtualiza;
    }

    public String getObsaudit() 
    {
        return obsaudit;
    }

    public void setObsaudit(final String obsaudit) 
    {
        this.obsaudit = obsaudit;
    }

    public String getStatusaudit() 
    {
        return statusaudit;
    }

    public void setStatusaudit(final String statusaudit) 
    {
        this.statusaudit = statusaudit;
    }
    
    
    
    
    
    
        
}
