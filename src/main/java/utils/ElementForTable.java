package utils;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@Table(name = "element")
public class ElementForTable implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(name = "x", nullable = false)
    private String x;
    @Column(name = "y", nullable = false)
    private String y;
    @Column(name = "r", nullable = false)
    private String r;
    @Column(name = "condition", nullable = false)
    protected boolean condition;
    @Column(name = "time", nullable = false)
    protected Date time;
    @Column(name = "time_of_work", nullable = false)
    protected long timeOfWork;
    public ElementForTable(String x, String y, String r, boolean condition, long timeOfWork, Date time) {
        this.id = null;
        this.x = x;
        this.y = y;
        this.r = r;
        this.condition = condition;
        this.timeOfWork = timeOfWork;
        this.time = time;
    }
    public void setId(long id) {
        this.id = id;
    }
    public long getId() {
        return id;
    }
    public void setX(String x) {
        this.x = x;
    }
    public String getX() {
        return x;
    }
    public void setY(String y) {
        this.y = y;
    }
    public String getY() {
        return y;
    }
    public void setR(String r) {
        this.r = r;
    }
    public String getR() {
        return r;
    }
    public void setCondition(boolean condition) {
        this.condition = condition;
    }
    public boolean getCondition() {
        return condition;
    }
    public void setTime(Date time) {
        this.time = time;
    }
    public Date getTime() {
        return time;
    }
    public void setTimeOfWork(long timeOfWork) {
        this.timeOfWork = timeOfWork;
    }
    public long getTimeOfWork() {
        return timeOfWork;
    }
}
