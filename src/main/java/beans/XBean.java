package beans;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import java.io.Serializable;
import java.util.LinkedList;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@ManagedBean(name = "xbean")
@SessionScoped
public class XBean implements Serializable {
    private double[] all_data = {-5, -4, -3, -2, -1, 0, 1};
    private boolean value1 = false;
    private boolean value2 = false;
    private boolean value3 = false;
    private boolean value4 = false;
    private boolean value5 = false;
    private boolean value6 = false;
    private boolean value7 = false;

    public LinkedList<Double> getArray() {
        boolean[] all_items = {value1, value2, value3, value4, value5, value6, value7};
        LinkedList<Double> arr = new LinkedList<>();
        for(int i = 0; i < all_items.length; i++) {
            if(all_items[i]) {
                arr.add(all_data[i]);
            }
        }
        return arr;
    }
}

