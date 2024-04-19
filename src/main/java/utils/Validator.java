package utils;

import java.util.Date;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

@ManagedBean(name = "validator")
@SessionScoped
public class Validator {

    public boolean validateData(double x, String strY, double r) {
        String str = strY;
        if (strY.length() > 8) {
            str = strY.substring(0, 7);
        }
        double y = Double.parseDouble(str);
        if (x > 1.0 || x < -5.0) {
            return false;
        }
        if (y > 3.0 || x < -5.0) {
            return false;
        }
        return !(r > 4.0 || r < 1.0);
    }

    public ElementForTable checkPointInArea(double x, String strY, double r, long timeOfWork) {
        boolean condition = false;
        String str = strY;
        if (strY.length() > 8) {
            str = strY.substring(0, 7);
        }
        double y = Double.parseDouble(str);
        Date time = new Date();
        if (x == 0 && y == 0) {
            condition = true;
        } else if (x == 0) {
            if (Math.abs(y) <= r) {
                condition = true;
            }
        } else if (y == 0) {
            if (x >= 0) {
                if (x <= r / 2) {
                    condition = true;
                }
            } else {
                if (Math.abs(x) <= r) {
                    condition = true;
                }
            }
        } else if (x > 0 && y > 0) {
            //проверка на точку в окружности
            if (Math.abs(x) <= r / 2 && Math.abs(y) <= r / 2) {
                if (Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(r / 2, 2)) {
                    condition = true;
                }
            }
        } else if (x < 0 && y > 0) {
            //проверка на точку в треугольнике
            if (Math.abs(x) <= r / 2 && y <= r) {
                if (y / (r / 2 - Math.abs(x)) <= 2) {
                    condition = true;
                }
            }
        } else if (x < 0 && y < 0) {
            //проверка на точку в квадрате
            if (Math.abs(y) <= r && Math.abs(x) <= r) {
                condition = true;
            }
        }
        ElementForTable el = new ElementForTable(String.valueOf(x), strY,
                String.valueOf(r), condition, System.nanoTime() - timeOfWork, time);
        return el;
    }
}
