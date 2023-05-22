function calcularValorDeTodosLivrosDisponiveis(livrosDisponiveis) {
    return livrosDisponiveis.reduce((acumulador, livro) => acumulador + livro.preco, 0).toFixed(2);
}