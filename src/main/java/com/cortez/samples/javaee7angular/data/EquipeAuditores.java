
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
public class EquipeAuditores implements Serializable 
{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "IDEQUIPE")
    @SequenceGenerator(name = "IDEQUIPE", sequenceName = "seq_equipeauditores",allocationSize = 1)
    @Column(name = "IDEQUIPE")
    private Long id;
    
    @Column(name = "IDAUDITOR" )
    private int idAuditor;  
    
    @Column(name = "IDAUDIT" )
    private int IDAUDIT;      
    
    @Column(name = "TIPOAUDITOR", length = 1 )
    private String tipoAuditor ;       
    
    @Column(name = "DTHRINCEQUIPE", length = 19 )
    private Timestamp dtHrIncEquipe ;  
        
    @Column(name = "STATUSEQUIPE", length = 1 )
    private String statusEquipe ;     

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public int getIdAuditor() {
        return idAuditor;
    }

    public void setIdAuditor(final int idAuditor) {
        this.idAuditor = idAuditor;
    }

    public int getIDAUDIT() {
        return IDAUDIT;
    }

    public void setIDAUDIT(final int IDAUDIT) {
        this.IDAUDIT = IDAUDIT;
    }

    public String getTipoAuditor() {
        return tipoAuditor;
    }

    public void setTipoAuditor(final String tipoAuditor) {
        this.tipoAuditor = tipoAuditor;
    }

    public Timestamp getDtHrIncEquipe() {
        return dtHrIncEquipe;
    }

    public void setDtHrIncEquipe(final Timestamp dtHrIncEquipe) {
        this.dtHrIncEquipe = dtHrIncEquipe;
    }

    public String getStatusEquipe() {
        return statusEquipe;
    }

    public void setStatusEquipe(final String statusEquipe) {
        this.statusEquipe = statusEquipe;
    }
   
}
