//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let listaDeAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nome = inputAmigo.value.trim(); // Remove espaços extras

    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    if (listaDeAmigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    listaDeAmigos.push(nome);
    inputAmigo.value = ""; // Limpa o campo de entrada
    atualizarLista();
}

// Função para atualizar a lista visível na página
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    listaDeAmigos.forEach((nome, index) => {
        const li = document.createElement("li");
        li.textContent = nome;

        // Botão para remover um nome da lista
        const btnRemover = document.createElement("button");
        btnRemover.textContent = "X";
        btnRemover.classList.add("botao-remover");
        btnRemover.onclick = () => removerAmigo(index);

        li.appendChild(btnRemover);
        lista.appendChild(li);
    });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    listaDeAmigos.splice(index, 1);
    atualizarLista();
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceSorteado];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></p>`;
}
