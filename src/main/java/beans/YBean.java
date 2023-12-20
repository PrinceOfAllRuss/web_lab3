package beans;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import java.io.Serializable;

@ManagedBean(name = "ybean")
@SessionScoped
public class YBean implements Serializable {
    private double value = 1;
    private String valueStr = "1";

    public double getValue() {
        return value;
    }
    public void setValue(double value) {
        this.value = value;
    }
    public String getValueStr() {
        return valueStr;
    }
    public void setValueStr(String valueStr) {
        this.valueStr = valueStr;
    }
}

