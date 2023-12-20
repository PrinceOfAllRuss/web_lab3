package database;
import javax.enterprise.inject.Default;
import java.io.Serializable;
import java.util.Arrays;
import java.util.List;
import javax.faces.bean.RequestScoped;
import javax.inject.Named;
import javax.persistence.*;
import utils.ElementForTable;

@Default
@Named("ResultInterface")
@RequestScoped
public class ResultInterfaceImplementation implements ResultInterface, Serializable {
    private final EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("ResultUnit");
    private final EntityManager entityManager = entityManagerFactory.createEntityManager();

    @Override
    public void save(ElementForTable result) {
        EntityTransaction transaction = entityManager.getTransaction();
        try {
            transaction.begin();
            entityManager.persist(result);
            transaction.commit();
        } catch (Exception e) {
            System.out.println(e.getMessage());
            Arrays.stream(e.getStackTrace()).forEach(System.out::println);
            transaction.rollback();
        }
    }

    @Override
    public boolean clear() {
        EntityTransaction transaction = entityManager.getTransaction();

        try {
            transaction.begin();
            entityManager.createQuery("delete from ElementForTable").executeUpdate();
            transaction.commit();
            return true;
        } catch (Exception e) {
            transaction.rollback();
            return false;
        }
    }

    public List<ElementForTable> getAll() {
        return entityManager.createQuery("select element from ElementForTable as element ORDER BY element.id", ElementForTable.class).getResultList();
    }
}
