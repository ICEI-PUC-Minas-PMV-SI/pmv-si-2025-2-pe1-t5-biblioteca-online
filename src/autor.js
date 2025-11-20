const searchInput = document.querySelector('.search input');
const livros = document.querySelectorAll('.lista-obras li');

searchInput.addEventListener('input', () => {
  const termo = searchInput.value.toLowerCase();

  livros.forEach(livro => {
    const texto = livro.innerText.toLowerCase();
    livro.style.display = texto.includes(termo) ? 'flex' : 'none';
  });
});


const bioCard = document.querySelector('.bio-card');
const bioText = document.querySelector('.bio-text');

bioCard.style.cursor = 'pointer';

bioCard.addEventListener('click', () => {
  bioText.classList.toggle('ativo');
});


livros.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = "scale(1.02)";
    item.style.transition = "0.2s";
    item.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = "scale(1)";
    item.style.boxShadow = "none";
  });
});



const darkBtn = document.createElement("button");
darkBtn.innerText = "🌓 Modo Escuro";
darkBtn.style.margin = "1rem";
darkBtn.style.padding = "6px 12px";
darkBtn.style.border = "none";
darkBtn.style.borderRadius = "8px";
darkBtn.style.cursor = "pointer";

document.body.prepend(darkBtn);

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});