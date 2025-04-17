const inputItem = document.getElementById("input-item")
const btnAdd = document.getElementById("adicionar-item")

btnAdd.addEventListener("click", (evento) => {
    evento.preventDefault()
    if(inputItem.value === ""){
        alert("Por favor, insira um item!")
        return
    }

    const itemLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container");
    
    
    
})

