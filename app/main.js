let livros = [];
const endpointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscaLivrosApi();

async function getBuscaLivrosApi() {
    const res = await fetch(endpointApi);
    livros = await res.json();
    let livrosComDesconto = aplicaDesconto(livros);
    exibeLivrosNaTela(livrosComDesconto);
}
