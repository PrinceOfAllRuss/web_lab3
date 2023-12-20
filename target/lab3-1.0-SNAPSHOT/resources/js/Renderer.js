class Renderer {
    graph;
    context;
    graphWidth;
    graphHeight;
    scaleX;
    scaleY;
    xAxis;
    yAxis;
    shiftNumberNames;
    shiftAxisNames;

    constructor() {
        this.graph = document.getElementById("graph");
        this.context = this.graph.getContext("2d");
        this.graphWidth = this.graph.clientWidth;
        this.graphHeight = this.graph.clientHeight;
        this.scaleX = 40;
        this.scaleY = 40;
        this.xAxis = Math.round(this.graphWidth / this.scaleX / 2) * this.scaleX;
        this.yAxis = Math.round(this.graphHeight / this.scaleY / 2) * this.scaleY;
        this.shiftNumberNames = 3;
        this.shiftAxisNames = 15;
    }

    drawGraphBackground() {
        this.context.fillStyle = "#ffffff"; //белый цвет для фона
        this.context.globalAlpha = 1;
        this.context.fillRect(0, 0, this.graph.width, this.graph.height);
        this.context.fillStyle = "#000000"; //черный цвет для цифр

        //Рисуем клетки
        this.context.font = `${Math.round(this.scaleX / 2)}px Georgia`;
        this.context.textAlign = "left";
        this.context.textBaseline = "top";

        this.context.beginPath();
        this.context.strokeStyle = "rgb(224, 224, 224, 1)";
        this.context.lineWidth = 1;
        for (let i = 0; i <= this.graphWidth; i = i + this.scaleX) {
            this.context.moveTo(i, 0);
            this.context.lineTo(i, this.graphHeight);

            this.context.fillText(
                (i - this.xAxis) / this.scaleX,
                i + this.shiftNumberNames,
                this.yAxis + this.shiftNumberNames
            );
        }
        for (let i = 0; i <= this.graphHeight; i = i + this.scaleY) {
            this.context.moveTo(0, i);
            this.context.lineTo(this.graphWidth, i);

            this.context.fillText(
                (this.yAxis - i) / this.scaleY,
                this.xAxis + this.shiftNumberNames,
                i + this.shiftNumberNames
            );
        }
        this.context.stroke();
        this.context.closePath();

        //Рисуем оси
        this.context.beginPath();
        this.context.strokeStyle = "#000000";
        this.context.lineWidth = 2;

        this.context.moveTo(this.xAxis, 0);
        this.context.lineTo(this.xAxis, this.graphHeight);
        this.context.fillText("y", this.xAxis - this.shiftAxisNames, 0);

        this.context.moveTo(0, this.yAxis);
        this.context.lineTo(this.graphHeight, this.yAxis);
        this.context.fillText("x", this.graphWidth - this.shiftAxisNames, this.yAxis - 20);

        this.context.stroke();
        this.context.closePath();
    }

    drawPoint(dot) {
        this.context.beginPath();
        switch(dot.condition) {
            case "true" : this.context.fillStyle = " #34C924";
                break;
            case "false" : this.context.fillStyle = "#f5002d";
                break;
            case "default" : this.context.fillStyle = "#808080";
        }
        this.context.globalAlpha = 1;
        this.context.arc(this.xAxis + dot.x * this.scaleX,
            this.yAxis - dot.y * this.scaleY, 3, 0, 2 * Math.PI);
        this.context.fill();
        this.context.closePath();
    }
    
    drawDotsFromTable(radius) {
        let table = document.getElementById('result').children[0].children[0];
        let x = 0;
        let y = 0;
        let rFromTable = 0;
        let condition = "false";
        let conditionToDraw = true;
        for (let r = 1; r < table.rows.length; r++) {
            for (let c = 0; c < table.rows[r].cells.length; c++) {
                if (table.rows[r].cells[c].innerHTML === "No records found.") {
                    conditionToDraw = false;
                    break;
                }
                if (c === 0) {
                    x = table.rows[r].cells[c].innerHTML;
                } else if (c === 1) {
                    y = table.rows[r].cells[c].innerHTML;
                } else if (c === 2) {
                    rFromTable = table.rows[r].cells[c].innerHTML;
                } else if (c === 3) {
                    condition = table.rows[r].cells[c].innerHTML;
                }
            }
            if (conditionToDraw) {
                if (parseFloat(radius) === parseFloat(rFromTable)) {
                    this.drawPoint(new Dot(x, y, condition));
                }
            }
        }
    }

    drawGraph(r) {
        this.drawGraphBackground();

        //График
        this.context.fillStyle = "#1E90FF";
        this.context.strokeStyle = "rgb(64, 130, 109, 0)";

        //1 четверть
        this.context.beginPath();
        this.context.globalAlpha = 0.5;
        this.context.lineWidth = 2;
        this.context.moveTo(this.xAxis, this.yAxis);
        this.context.lineTo(this.xAxis - (r / 2) * this.scaleX + 1, this.yAxis);
        this.context.lineTo(this.xAxis, this.yAxis - 2 - r * this.scaleY);
        this.context.lineTo(this.xAxis, this.yAxis);
        this.context.fill();
        this.context.stroke();
        this.context.closePath();

        //1 четверть
        this.context.beginPath();
        this.context.arc(this.xAxis, this.yAxis, (r / 2) * this.scaleX + 1, 1.5 * Math.PI, 2 * Math.PI);
        this.context.lineTo(this.xAxis, this.yAxis);
        this.context.fill();
        this.context.stroke();
        this.context.closePath();

        //3 четверть
        this.context.beginPath();
        this.context.fillRect(this.xAxis, this.yAxis, -r * this.scaleX + 1, r * this.scaleY - 1);
        this.context.closePath();
        
        this.drawDotsFromTable(r);
        
        let clickDot = JSON.parse(window.sessionStorage.getItem("clickDot"));
        let dotsList = JSON.parse(window.sessionStorage.getItem("allDots"));
        
        if (clickDot !== null) {
            this.drawPoint(clickDot);
        }
        if (dotsList !== null) {
            for (let i = 0; i < dotsList.length; i++) {
                this.drawPoint(dotsList[i]);
            }
        }
    }
}