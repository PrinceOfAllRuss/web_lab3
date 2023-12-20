package database;

import java.util.List;
import utils.ElementForTable;

public interface ResultInterface {
    boolean clear();
    List<ElementForTable> getAll();
    void save(ElementForTable result);
}
