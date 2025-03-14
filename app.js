//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    } else {
        amigos.push(nome);
    }
    limparCampo();
    AtualizarListaAmigos();
}

function limparCampo() {
    document.querySelector('input').value = '';
}

function AtualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}