
package data;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.xml.bind.annotation.XmlRootElement;


@Entity
@XmlRootElement
public class Auditor
{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "IDAUDITOR")
    @SequenceGenerator(name = "IDAUDITOR", sequenceName = "SEQ_ADITORES", allocationSize = 1)
    @Column(name = "IDAUDITOR")
    private Long id;
    
    @Column(name = "NOMEAUDIT", length = 60)
    private String nomeAudit;
    
    
    @Column(name = "CPFAUDIT", length = 11)
    private String cpfAudit;
        
    @Column(name = "IDCEP")
    private int idcep;
        
    @Column(name = "FONE1AUDIT", length = 12)
    private String fone1Audit;
        
    @Column(name = "FONE2AUDIT", length = 12)
    private String fone2Audit;
    
    @Column(name = "EMAILAUDIT", length = 100)
    private String emailAudit;
    
    @Column(name = "COMPLEENDAUDIT", length = 60)
    private String compleEndAudit;
    
    @Column (name ="TIPOAUDIT", length = 1)
    private String tipoAudit;
  
    @Column(name = "OBSAUDIT", length = 100)
    private String obsAudit; 
    
    @Column(name = "STATUSAUDITORES", length = 1)
    private String statusAuditores; 
    
    @Column(name = "SENHAUDIT", length = 8)
    private String senhAudit;    
    
    @Column(name = "USUAUDIT", length = 10)
    private String usuAudit;

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public String getNomeAudit() {
        return nomeAudit;
    }

    public void setNomeAudit(final String nomeAudit) {
        this.nomeAudit = nomeAudit;
    }

    public String getCpfAudit() {
        return cpfAudit;
    }

    public void setCpfAudit(final String cpfAudit) {
        this.cpfAudit = cpfAudit;
    }

    public int getIdcep() {
        return idcep;
    }

    public void setIdcep(int idcep) {
        this.idcep = idcep;
    }

    
    public String getFone1Audit() {
        return fone1Audit;
    }

    public void setFone1Audit(final String fone1Audit) {
        this.fone1Audit = fone1Audit;
    }

    public String getFone2Audit() {
        return fone2Audit;
    }

    public void setFone2Audit(final String fone2Audit) {
        this.fone2Audit = fone2Audit;
    }

    public String getEmailAudit() {
        return emailAudit;
    }

    public void setEmailAudit(final String emailAudit) {
        this.emailAudit = emailAudit;
    }

    public String getCompleEndAudit() {
        return compleEndAudit;
    }

    public void setCompleEndAudit(final String compleEndAudit) {
        this.compleEndAudit = compleEndAudit;
    }

    public String getTipoAudit() {
        return tipoAudit;
    }

    public void setTipoAudit(String tipoAudit) {
        this.tipoAudit = tipoAudit;
    }


    public String getObsAudit() {
        return obsAudit;
    }

    public void setObsAudit(final String obsAudit) {
        this.obsAudit = obsAudit;
    }  

    public String getStatusAuditores() {
        return statusAuditores;
    }

    public void setStatusAuditores(final String statusAuditores) {
        this.statusAuditores = statusAuditores;
    }

    public String getSenhAudit() {
        return senhAudit;
    }

    public void setSenhAudit(final String senhAudit) {
        this.senhAudit = senhAudit;
    }

    public String getUsuAudit() {
        return usuAudit;
    }

    public void setUsuAudit(final String usuAudit) {
        this.usuAudit = usuAudit;
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
