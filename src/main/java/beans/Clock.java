package beans;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.faces.bean.SessionScoped;
import javax.faces.bean.ManagedBean;
import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;

@Getter
@Setter
@ToString
@ManagedBean(name = "clock", eager = true)
@SessionScoped
public class Clock implements Serializable {
    private String time = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
    
    public String getTime() {
        return time;
    }
    
    public void updateTime() {
        time = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
    }
}
