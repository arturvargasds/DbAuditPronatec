package data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;


@Entity
public class Bairro {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "IDBAI")
    @SequenceGenerator(name = "IDBAI", sequenceName = "Bairros")
    @Column(name = "IDBAI")
    private Long id;
    
    @Column(name = "DESCRIBAI", length = 60)
    private String descricao;
    
    @Column(name = "STATUSBAI", length = 1)
    private String statusBai; 

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(final String descricao) {
        this.descricao = descricao;
    }

    public String getStatusBai() {
        return statusBai;
    }

    public void setStatusBai(final String statusBai) {
        this.statusBai = statusBai;
    }
    
    
}
