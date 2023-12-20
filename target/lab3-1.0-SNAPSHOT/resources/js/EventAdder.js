class EventAdder {
    graph;

    constructor(graph) {
        this.graph = graph;
    }

    addEventForMouseClickOnGraph() {
        this.graph.renderer.graph.addEventListener("mousedown", (event) => {
            this.graph.getMouseClick(event);
            let bt1 = document.getElementById("removeDotOnGraph");
            if (bt1.value === "false") {
                bt1.value = "true";
                bt1.classList.remove("hidden");
            }
        });
    }

    addEventForDotOnYInput() {
        let input = document.getElementById("form:y");
        input.addEventListener("input", () => {
            let hiddenInput = document.getElementById("form:y_hidden");
            hiddenInput.value = input.value.replace(",", ".");
        });
    }

    addEventForSubmitOnCheckData() {
        let submitbtn = document.getElementById("form:submit");
        submitbtn.addEventListener("click", (event) => {
            event.preventDefault();
            let errorX = document.getElementById("errorX");
            let errorY = document.getElementById("errorY");
            let hiddenX = document.getElementById("form:dot_on_graph_x");
            let hiddenY = document.getElementById("form:dot_on_graph_y");
            if (hiddenX.value === 100 || hiddenY === 100) {
                let checkboxes = document.getElementsByClassName("checkboxes");
                let condition = false;
                for (let i = 0; i < checkboxes.length; i++) {
                    if (checkboxes[i].checked === true) {
                        condition = true;
                    }
                }
                if (condition) {
                    errorX.innerHTML = "";
                } else {
                    errorX.innerHTML = "Select one checkbox";
                }
                let inputY = document.getElementById("form:y");
                if (inputY.value < -5 || inputY.value > 3) {
                    errorY.innerHTML = "Select another Y";
                } else {
                    errorY.innerHTML = "";
                }
                if (errorX.innerHTML === "" && errorY.innerHTML === "") {
                    this.submitForm();
                }
            } else {
                errorX.innerHTML = "";
                errorY.innerHTML = "";
                this.submitForm();
            }
        });
    }
    addEventForRemoveDotOnGraph() {
        document.getElementById("removeDotOnGraph").addEventListener("click", () => {
            let bt1 = document.getElementById("removeDotOnGraph");
            bt1.value = "false";
            bt1.classList.add("hidden");
            let hiddenX = document.getElementById("form:dot_on_graph_x");
            let hiddenY = document.getElementById("form:dot_on_graph_y");
            hiddenX.value = 100;
            hiddenY.value = 100;
            this.graph.removeDotFromGraph();
        });
    }

    submitForm() {
        document.getElementById("form").submit();
    }
}