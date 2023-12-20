window.onload = function () {

    const clientData = new ClientData();
    const graph = new Graph(clientData);

    let hiddenX = document.getElementById("form:dot_on_graph_x");
    let hiddenY = document.getElementById("form:dot_on_graph_y");
    hiddenX.value = 100;
    hiddenY.value = 100;

    graph.removeDotFromGraph();
    graph.drawGraph(null);

    const eventAdder = new EventAdder(graph);
    eventAdder.addEventForMouseClickOnGraph();
    eventAdder.addEventForSubmitOnCheckData();
    eventAdder.addEventForDotOnYInput();
    eventAdder.addEventForRemoveDotOnGraph();

    window.graph = graph;
};