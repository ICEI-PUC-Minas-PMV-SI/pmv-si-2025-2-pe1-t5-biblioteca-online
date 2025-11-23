const searchInput = document.querySelector('.search input');
const livros = document.querySelectorAll('.lista-obras li');

searchInput.addEventListener('input', () => {
  const termo = searchInput.value.toLowerCase();

  livros.forEach(livro => {
    const texto = livro.innerText.toLowerCase();
    livro.style.display = texto.includes(termo) ? 'flex' : 'none';
  });
});

livros.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = "scale(1.02)";
    item.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = "scale(1)";
    item.style.boxShadow = "none";
  });
});