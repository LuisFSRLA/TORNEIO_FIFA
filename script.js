// Carrega as inscrições salvas no navegador (ou array vazio se não houver nada)
let inscricoes = JSON.parse(localStorage.getItem('inscricoes') || '[]');

// Função que exibe todas as inscrições na tela
function exibirInscricoes() {
    const lista = document.getElementById('lista-inscricoes');
    lista.innerHTML = ''; // Limpa a lista antes de preencher
    inscricoes.forEach((p, i) => {
        const item = document.createElement('p');
        item.innerHTML = `Nome: <span style="color: #1976D2; font-size:22.5px;">${p.nome}</span> | Gmail: <span style="color: #C62828; font-size:22.5px;">${p.gmail}</span> | Idade: <span style="color: #388E3C; font-size:22.5px;">${p.idade}</span>`;
        lista.appendChild(item);
    });
}

// Função chamada ao clicar em Enviar - salva os dados do formulário
function Enviar() {
    const nome = document.getElementById('Nome').value;
    const gmail = document.getElementById('Gmail').value;
    const idade = document.getElementById('Idade').value;
    inscricoes.push({ nome, gmail, idade }); // Adiciona o novo cadastro ao array
    localStorage.setItem('inscricoes', JSON.stringify(inscricoes)); // Salva no navegador
    exibirInscricoes(); // Atualiza a lista na tela
}

// Função que remove todos os dados salvos
function limparDados() {
    inscricoes = [];
    localStorage.removeItem('inscricoes');
    exibirInscricoes();
}

// Exibe as inscrições ao carregar a página
exibirInscricoes();
