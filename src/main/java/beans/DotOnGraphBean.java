package beans;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import java.io.Serializable;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@ManagedBean(name = "dotongraph")
@SessionScoped
public class DotOnGraphBean implements Serializable {
    private double coordX = 100;
    private double coordY = 100;
}
