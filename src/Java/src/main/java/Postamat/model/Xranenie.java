package Postamat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Postamat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: Хранение
 */
@Entity(name = "IISPostamatХранение")
@Table(schema = "public", name = "Хранение")
public class Xranenie {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "ДатаНачала")
    private Date датаначала;

    @Column(name = "ДатаЗавершения")
    private Date датазавершения;

    @OneToMany(mappedBy = "xranenie", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Posylka> posylkas;


    public Xranenie() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public Date getДатаНачала() {
      return датаначала;
    }

    public void setДатаНачала(Date датаначала) {
      this.датаначала = датаначала;
    }

    public Date getДатаЗавершения() {
      return датазавершения;
    }

    public void setДатаЗавершения(Date датазавершения) {
      this.датазавершения = датазавершения;
    }


}