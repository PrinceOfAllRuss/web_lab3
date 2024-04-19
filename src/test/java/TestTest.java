import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;
import utils.Validator;

public class TestTest {
    @Test
    public void testValidateFailed() {
        Validator validator = new Validator();
        double x = -100;
        String y = "-100";
        double r = 1000;
        assertFalse(validator.validateData(x, y, r));
    }

    @Test
    public void testValidateSuccess() {
        Validator validator = new Validator();
        double x = 0;
        String y = "-1";
        double r = 3;
        assertTrue(validator.validateData(x, y, r));
    }
}