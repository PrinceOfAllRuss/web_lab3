class ClientData {
    x;
    y;
    r;
    event;
    
    constructor() {
        this.y = new Array();
        this.r = 1;
        this.event = "submitForm"; //для отключения валидации на сервере
    }

    getData(nameOfBt) {
        let condition = true;
        
        let radios = document.getElementsByClassName("radio");
            for (let r of radios) {
                if (r.checked) {
                    this.r = Number(r.value);
                }
            }
        
        let dotOnGraph = JSON.parse(window.sessionStorage.getItem("clickDot"));
        if (nameOfBt === "submitBtn") {
            dotOnGraph = null;
        }
        if (dotOnGraph === null) {
            let coordinateX = document.getElementById("x").value.replace(",",".");
            let coordinatesY = document.getElementsByClassName("checkbox");
            this.y = [];
            for (let elY of coordinatesY) {
                if (elY.checked) {
                    this.y.push(Number(elY.value));
                }
            }
            
            condition = this.inputValidation(coordinateX, this.y);
            if (condition) {
                this.x = Number(coordinateX);
            } else {
                return condition;
            }
            console.log(this.x, this.y, this.r);
        } else {
            let dot = JSON.parse(window.sessionStorage.getItem("clickDot"));
            this.x = dot.x;
            this.y.push(dot.y);
            this.event = "clickOnGraph";
            window.sessionStorage.setItem("clickDot", null);
        }
        
        return condition;
    }

    inputValidation(coordinateX, y) {
        let condition = true;
        if (coordinateX !== "" && !isNaN(coordinateX)) {
            this.x = Number(coordinateX);
            if (this.x > 5 || this.x < -5) {
                document.getElementById("errorX").innerHTML = "Координата X не входит в указанный диапазон";
                this.x = 0;
                condition = false;
            } else {
                document.getElementById("errorX").innerHTML = "";
            }
        } else {
            document.getElementById("errorX").innerHTML = "Введите число в поле для координаты X";
            condition = false;
        }
        
        if (y.length === 0) {
            document.getElementById("errorY").innerHTML = "Не выбрана координата Y";
            condition = false;
        } else {
            document.getElementById("errorY").innerHTML = "";
        }

        return condition;
    }
}