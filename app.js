//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let sorteados = new Set();

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

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, adicione amigos antes de sortear.');
        return;
    }

    if (sorteados.size === amigos.length) {
        alert('Todos os amigos já foram sorteados.');
        return;
    }

    let amigoSorteado;
    do {
        amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    } while (sorteados.has(amigoSorteado));

    sorteados.add(amigoSorteado);

    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = `<li>O amigo secreto sorteado é: ${amigoSorteado}</li>`;
}