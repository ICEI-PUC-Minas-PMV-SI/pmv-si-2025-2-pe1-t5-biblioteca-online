// script.js
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.conteudo');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('ativo'));
      contents.forEach(c => c.classList.remove('ativo'));
      
      tab.classList.add('ativo');
      document.getElementById(tab.dataset.target).classList.add('ativo');
    });
  });
});
