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
