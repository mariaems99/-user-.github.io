//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;

    // Validação da entrada
    if (nomeAmigo.trim() === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Atualizar o array de amigos
    amigos.push(nomeAmigo);

    // Limpar o campo de entrada
    document.getElementById("amigo").value = "";

    // Atualizar a lista exibida na página
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    // Validação se há amigos disponíveis
    if (amigos.length === 0) {
        alert("Não há amigos na lista para sortear.");
        return;
    }

    // Gerar um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar o resultado na página
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "Amigo sorteado: " + amigoSorteado;
}
