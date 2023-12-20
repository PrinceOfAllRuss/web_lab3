class Graph {
    clientData;
    renderer;

    constructor(clientData) {
        this.clientData = clientData;
        this.renderer = new Renderer();
    }

    drawGraph() {
        let slider = document.getElementById("form:r");
        this.clientData.r = slider.value;
        this.renderer.drawGraph(this.clientData.r);
    }

    getMouseClick(event) {
        let rect = this.renderer.graph.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = rect.top - event.clientY;

        let coordX = (x - this.renderer.xAxis) / this.renderer.scaleX;
        let coordY = (y + this.renderer.yAxis) / this.renderer.scaleY;

        let hiddenX = document.getElementById("form:dot_on_graph_x");
        let hiddenY = document.getElementById("form:dot_on_graph_y");
        hiddenX.value = coordX;
        hiddenY.value = coordY;

        let dot = new Dot(coordX, coordY, "default");
        window.sessionStorage.setItem("clickDot", JSON.stringify(dot));

        this.drawGraph();
    }

    removeDotFromGraph() {
        window.sessionStorage.setItem("clickDot", null);
        this.drawGraph();
    }
}