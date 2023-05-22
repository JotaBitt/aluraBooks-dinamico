const botoes = document.querySelectorAll(".btn");
botoes.forEach(btn => btn.addEventListener('click',filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade()
    : filtrarPorCategoria(categoria)
    exibeLivrosNaTela(livrosFiltrados);

    if (categoria == 'disponivel') {
        const valorTotal = calcularValorDeTodosLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveis(valorTotal);
    }
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function exibirValorTotalDosLivrosDisponiveis(valorTotal) {
    elementoComValorDeTodosLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}
