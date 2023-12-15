package Postamat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Postamat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: Постамат
 */
@Entity(name = "IISPostamatПостамат")
@Table(schema = "public", name = "Постамат")
public class Postamat {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерПост")
    private Integer номерпост;

    @Column(name = "СтатПост")
    private String статпост;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Adres")
    @Convert("Adres")
    @Column(name = "Адрес", length = 16, unique = true, nullable = false)
    private UUID _adresid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Adres", insertable = false, updatable = false)
    private Adres adres;

    @OneToMany(mappedBy = "postamat", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<YAchejka> yachejkas;


    public Postamat() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерПост() {
      return номерпост;
    }

    public void setНомерПост(Integer номерпост) {
      this.номерпост = номерпост;
    }

    public String getСтатПост() {
      return статпост;
    }

    public void setСтатПост(String статпост) {
      this.статпост = статпост;
    }


}