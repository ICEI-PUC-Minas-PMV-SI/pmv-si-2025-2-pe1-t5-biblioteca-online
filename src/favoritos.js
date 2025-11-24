// =============================================
// FAVORITOS.JS - Pagina de Favoritos e Listas
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    // Sistema de abas
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.conteudo');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('ativo'));
            contents.forEach(c => c.classList.remove('ativo'));

            tab.classList.add('ativo');
            const target = document.getElementById(tab.dataset.target);
            if (target) target.classList.add('ativo');
        });
    });

    // Carregar dados dos favoritos
    carregarFavoritos();
    carregarLerDepois();
    carregarEstudos();
    carregarEmLeitura();

    // Navegacao
    document.querySelectorAll('nav a, header a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const texto = link.textContent.trim().toLowerCase();
            if (texto === 'home') APP.irParaHome();
            else if (texto === 'acervo') APP.irParaCatalogo();
            else if (texto === 'salvos') APP.irParaFavoritos();
            else if (texto === 'expert reader') APP.irParaCatalogo();
        });
    });

    // Busca
    const searchInput = document.querySelector('.search-container input, nav input');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                APP.realizarBusca(searchInput.value.trim());
            }
        });
    }
});

function criarCardLivro(livro) {
    const autor = BIBLIOTECA.getAutorById(livro.autorId);
    const div = document.createElement('div');
    div.className = 'livro';
    div.style.cursor = 'pointer';
    div.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${livro.capa})`;
    div.style.backgroundSize = 'cover';
    div.style.backgroundPosition = 'center';
    div.innerHTML = `<p>${livro.titulo}<br><small>${autor ? autor.nome : 'Autor desconhecido'}</small></p>`;
    div.addEventListener('click', () => APP.irParaLivro(livro.id));
    return div;
}

function carregarFavoritos() {
    const container = document.querySelector('#favoritos .livros-grid');
    if (!container) return;

    const dados = FAVORITOS.get();
    container.innerHTML = '';

    // Adicionar livros favoritos do localStorage
    if (dados.favoritos.length > 0) {
        dados.favoritos.forEach(id => {
            const livro = BIBLIOTECA.getLivroById(id);
            if (livro) container.appendChild(criarCardLivro(livro));
        });
    }

    // Adicionar alguns livros padrao se nao houver favoritos
    if (container.children.length === 0) {
        // Livros padrao para demonstracao
        const livrosPadrao = [1, 4, 6, 7]; // IDs dos livros padrao
        livrosPadrao.forEach(id => {
            const livro = BIBLIOTECA.getLivroById(id);
            if (livro) container.appendChild(criarCardLivro(livro));
        });
    }
}

function carregarLerDepois() {
    const container = document.querySelector('#ler-mais-tarde .livros-grid');
    if (!container) return;

    const dados = FAVORITOS.get();
    container.innerHTML = '';

    if (dados.lerDepois.length > 0) {
        dados.lerDepois.forEach(id => {
            const livro = BIBLIOTECA.getLivroById(id);
            if (livro) container.appendChild(criarCardLivro(livro));
        });
    } else {
        // Livros padrao
        const livrosPadrao = [2, 5, 8];
        livrosPadrao.forEach(id => {
            const livro = BIBLIOTECA.getLivroById(id);
            if (livro) container.appendChild(criarCardLivro(livro));
        });
    }
}

function carregarEstudos() {
    // Verificar se existe a secao de estudos
    let container = document.querySelector('#estudos .livros-grid');

    // Se nao existir, criar a secao
    if (!document.querySelector('#estudos')) {
        const section = document.createElement('section');
        section.id = 'estudos';
        section.className = 'conteudo';
        section.innerHTML = `
            <h3>Estudos</h3>
            <div class="livros-grid"></div>
        `;
        document.querySelector('main').appendChild(section);
        container = section.querySelector('.livros-grid');
    }

    if (!container) return;

    const dados = FAVORITOS.get();
    container.innerHTML = '';

    if (dados.estudos && dados.estudos.length > 0) {
        dados.estudos.forEach(id => {
            const livro = BIBLIOTECA.getLivroById(id);
            if (livro) container.appendChild(criarCardLivro(livro));
        });
    } else {
        container.innerHTML = '<p style="color: #666;">Nenhum livro adicionado para estudos ainda.</p>';
    }
}

function carregarEmLeitura() {
    // Verificar se existe a secao
    let container = document.querySelector('#me-indicar .livros-grid');

    if (container) {
        const livrosEmLeitura = PROGRESSO.getLivrosEmLeitura();
        container.innerHTML = '';

        if (livrosEmLeitura.length > 0) {
            livrosEmLeitura.forEach(item => {
                if (item.livro) {
                    const div = criarCardLivro(item.livro);
                    // Adicionar info de progresso
                    const progresso = Math.round(((item.progresso.capitulo + 1) / item.livro.capitulos.length) * 100);
                    div.innerHTML += `<small style="display: block; margin-top: 5px;">Progresso: ${progresso}%</small>`;
                    container.appendChild(div);
                }
            });
        } else {
            container.innerHTML = '<p style="color: #666;">Nenhum livro em leitura no momento.</p>';
        }
    }
}
