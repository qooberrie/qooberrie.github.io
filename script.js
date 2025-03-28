// * nome da função + pegando o id da div que foi passado como parametro
function showSection(id) {
  // * variavel secao é igual a querySelectorAll retornando todos os elementos que tem a class com esse nome (eg. nesse caso nsecao) é tipo falar com uma class no css
  const secao = document.querySelectorAll(".nsecao");
  // * pega a lista que foi colocada em secao e coloca cada item na variavel s, depois pega a lista dessa classe
  // * oqe significa =>? pergunta pra pesquisar
  // * => eh pra por ex resumir functions, ai vc usa só const e => ao inves de function, {} e return, no geral é mais compacta
  secao.forEach((s) => s.classList.remove("active"));
  // * variavel alvo recebe o id que foi passado laaa no html
  const alvo = document.getElementById(id);
  // * o if ta checando oqe tem dentro da variavel alvo
  if (alvo) alvo.classList.add("active");
}
