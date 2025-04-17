const inputItem = document.getElementById("input-item");
const btnAdd = document.getElementById("adicionar-item");
let contador = 0;

btnAdd.addEventListener("click", (evento) => {
    evento.preventDefault();
    if(inputItem.value === ""){
        alert("Por favor, insira um item!");
        return;
    }

    const itemLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;

    
    
})

