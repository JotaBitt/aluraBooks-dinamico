const elementoParaInserirLivros = document.getElementById("livros")
const elementoComValorDeTodosLivrosDisponiveis = document.getElementById("valor_total_livros_disponiveis")

function exibeLivrosNaTela(listaDeLivros) {
  elementoComValorDeTodosLivrosDisponiveis.innerHTML = ''
  elementoParaInserirLivros.innerHTML = ''

  listaDeLivros.forEach(livro => {
    let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
    elementoParaInserirLivros.innerHTML += `
    <div class="livro">             
      <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
      ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
          <span class="tag">${livro.categoria}</span>
      </div>
    </div>
        `   // adiciono as informações dele escrevendo livro.nome// livro.preco
    // de acordo com seu nome na API, para cada informação eu adiciono
    // utilizando o ${informação do livro}
  });
}