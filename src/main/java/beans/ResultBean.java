package beans;

import database.ResultInterface;
import database.ResultInterfaceImplementation;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import utils.ElementForTable;
import utils.Validator;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import java.util.LinkedList;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.inject.Inject;

@Getter
@Setter
@ToString
@ManagedBean(name = "resultbean")
@SessionScoped
public class ResultBean {

//    @Inject
//    private ResultInterface resultInterface;
    @Inject
    private ResultInterfaceImplementation resultInterface;
    public Validator validator = new Validator();
    private List<ElementForTable> elements = new LinkedList<>();

    @PostConstruct
    private void initialize() {
        updateLocal();
    }

    private void updateLocal() {
        System.out.println(resultInterface.getAll());
        elements = resultInterface.getAll();
    }

    public void clearResults() {
        resultInterface.clear();
        updateLocal();
    }

    public void addResult(LinkedList<Double> x, String y, double r, double xOnGraph, double yOnGraph) {
        if (xOnGraph == 100 || yOnGraph == 100) {
            if (x.isEmpty()) {
                return;
            }
            for (double elX : x) {
                boolean condition = validator.validateData(elX, y, r);
                if (condition) {
                    ElementForTable el = validator.checkPointInArea(elX, y, r, System.nanoTime());
                    elements.add(el);
                    resultInterface.save(el);
                    updateLocal();
                }
            }
        } else {
            ElementForTable el = validator.checkPointInArea(xOnGraph, String.valueOf(yOnGraph), r, System.nanoTime());
            elements.add(el);
            resultInterface.save(el);
            updateLocal();
        }
    }
}
