package Postamat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Postamat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Код
 */
@Entity(name = "IISPostamatКод")
@Table(schema = "public", name = "Код")
public class Kod {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "СгенКод")
    private Integer сгенкод;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Poluchatel")
    @Convert("Poluchatel")
    @Column(name = "Получатель", length = 16, unique = true, nullable = false)
    private UUID _poluchatelid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Poluchatel", insertable = false, updatable = false)
    private Poluchatel poluchatel;


    public Kod() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getСгенКод() {
      return сгенкод;
    }

    public void setСгенКод(Integer сгенкод) {
      this.сгенкод = сгенкод;
    }


}