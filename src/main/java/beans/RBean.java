package beans;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import java.io.Serializable;

@ManagedBean(name = "rbean")
@SessionScoped
public class RBean implements Serializable {
    private double value = 1;

    public double getValue() {
        return value;
    }

    public void setValue(double value) {
        this.value = value;
    }
}