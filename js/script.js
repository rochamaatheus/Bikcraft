// Classe de ativo nos menus
function menuAtivo() {
  const links = document.querySelectorAll('.header-menu a');

  function ativarLink(link) {
    const url = location.href;
    const href = link.href;

    if (url.includes(href)) {
      link.classList.add('active');
    }
  }

  links.forEach(ativarLink);
}
menuAtivo();

// Ativar itens do Orçamento
function ativarItens() {
  const params = new URLSearchParams(location.search);

  function ativarProduto(params) {
    const el = document.getElementById(params);
    if (el) {
      el.checked = true;
    }
  }

  params.forEach(ativarProduto);
}
ativarItens();

// Perguntas Frequentes
function ativarAccordion() {
  const perguntas = document.querySelectorAll('.perguntas button');

  function accordion({ currentTarget }) {
    const pergunta = currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    resposta.classList.contains('active');
    pergunta.setAttribute('aria-expanded', resposta);
    resposta.classList.toggle('active');
  }

  function eventoPergunta(pergunta) {
    pergunta.addEventListener('click', accordion);
  }

  perguntas.forEach(eventoPergunta);
}
ativarAccordion();
