package Postamat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Postamat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Ячейка
 */
@Entity(name = "IISPostamatЯчейка")
@Table(schema = "public", name = "Ячейка")
public class YAchejka {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерЯчейи")
    private Integer номерячейи;

    @Column(name = "Статус")
    private String статус;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Xranenie")
    @Convert("Xranenie")
    @Column(name = "Хранение", length = 16, unique = true, nullable = false)
    private UUID _xranenieid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Xranenie", insertable = false, updatable = false)
    private Xranenie xranenie;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Postamat")
    @Convert("Postamat")
    @Column(name = "Постамат", length = 16, unique = true, nullable = false)
    private UUID _postamatid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Postamat", insertable = false, updatable = false)
    private Postamat postamat;


    public YAchejka() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерЯчейи() {
      return номерячейи;
    }

    public void setНомерЯчейи(Integer номерячейи) {
      this.номерячейи = номерячейи;
    }

    public String getСтатус() {
      return статус;
    }

    public void setСтатус(String статус) {
      this.статус = статус;
    }


}