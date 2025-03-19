    let amigos = [];    
 function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    let listaAmigos = document.getElementById("listaAmigos");

    if (nome !== "") {
        let li = document.createElement("li");
        li.textContent = nome;
        listaAmigos.appendChild(li);
        input.value = "";
            
    } else {
        alert("Digite um nome para adicionar."); }
    }
function atualizarLista() {
        let listaElement = document.getElementById('listaNomes');
        listaElement.innerHTML = '';     
    }
function sortearAmigo() {
    let lista = document.querySelectorAll("#listaAmigos li");
    let resultado = document.getElementById("resultado");
      resultado.innerHTML = "";
    if (lista.length>0) {
        let sorteado = lista[Math.floor(Math.random() * lista.length)].textContent;
        let li = document.createElement("li");
        li.textContent = (`O amigo secreto sorteado é: ${sorteado}`);
        resultado.appendChild(li);
                    }     
else {
        alert("Adicione pelo menos um amigo antes de sortear.");
    }  
}