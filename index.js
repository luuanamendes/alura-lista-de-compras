const inputItem = document.getElementById("input-item");
const listaCompras = document.getElementById("lista-de-compras");
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
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    containerItemLista.appendChild(inputCheckbox);
    containerItemLista.appendChild(nomeItem);

    itemLista.appendChild(containerItemLista);
    listaCompras.appendChild(itemLista);

    const diaSemana = new Date().toLocaleDateString("pt-BR", {weekday: "long"});
    const data = new Date().toLocaleDateString("pt-BR");
    const dataCompleta = `${diaSemana} (${data})`;

})

