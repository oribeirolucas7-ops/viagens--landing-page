// Scroll suave nos links do menu
const linksMenu = document.querySelectorAll("nav a");

linksMenu.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const id = this.getAttribute("href");
    const secao = document.querySelector(id);

    secao.scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Botão voltar ao topo
const btnTopo = document.getElementById("btn-topo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }

  destacarMenuAtivo();
});

btnTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Destacar link ativo no menu
const secoes = document.querySelectorAll("main section");

function destacarMenuAtivo() {
  let posicaoAtual = window.scrollY + 200;

  secoes.forEach(secao => {
    if (
      posicaoAtual >= secao.offsetTop &&
      posicaoAtual < secao.offsetTop + secao.offsetHeight
    ) {
      linksMenu.forEach(link => link.classList.remove("ativo"));

      const linkAtivo = document.querySelector(
        `nav a[href="#${secao.id}"]`
      );

      if (linkAtivo) {
        linkAtivo.classList.add("ativo");
      }
    }
  });
}
