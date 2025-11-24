// =============================================
// APP.JS - Funções Utilitárias da Biblioteca
// =============================================

const APP = {
    // =============================================
    // NAVEGACAO
    // =============================================
    irParaLivro(livroId) {
        window.location.href = `detalhesdolivro.html?id=${livroId}`;
    },

    irParaAutor(autorId) {
        window.location.href = `autor.html?id=${autorId}`;
    },

    irParaLeitura(livroId) {
        window.location.href = `leitura.html?id=${livroId}`;
    },

    irParaCatalogo(filtro = '') {
        if (filtro) {
            window.location.href = `catálogodelivros.html?filtro=${encodeURIComponent(filtro)}`;
        } else {
            window.location.href = 'catálogodelivros.html';
        }
    },

    irParaHome() {
        window.location.href = 'Home.html';
    },

    irParaFavoritos() {
        window.location.href = 'favoritos.html';
    },

    // =============================================
    // PARAMETROS DA URL
    // =============================================
    getParametroURL(nome) {
        const params = new URLSearchParams(window.location.search);
        return params.get(nome);
    },

    // =============================================
    // CRIAR CARD DE LIVRO
    // =============================================
    criarCardLivro(livro, tamanho = 'normal') {
        const autor = BIBLIOTECA.getAutorById(livro.autorId);
        const div = document.createElement('div');
        div.className = tamanho === 'mini' ? 'livro-card-mini' : 'livro-card';
        div.style.cursor = 'pointer';

        if (tamanho === 'mini') {
            div.innerHTML = `
                <img src="${livro.capa}" alt="${livro.titulo}" style="width: 60px; height: 80px; object-fit: cover; border-radius: 4px;">
                <div class="livro-info">
                    <strong>${livro.titulo}</strong>
                    <small>${autor ? autor.nome : 'Autor desconhecido'}</small>
                </div>
            `;
        } else {
            div.innerHTML = `
                <img src="${livro.capa}" alt="${livro.titulo}" style="width: 100%; max-width: 200px; height: auto; border-radius: 4px;">
                <h3>${livro.titulo}</h3>
                <p>${autor ? autor.nome : 'Autor desconhecido'}</p>
                <span class="tag">${livro.genero}</span>
            `;
        }

        div.addEventListener('click', () => this.irParaLivro(livro.id));
        return div;
    },

    // =============================================
    // CONFIGURAR HEADER (navegacao)
    // =============================================
    configurarNavegacao() {
        // Atualizar todos os links de navegacao
        document.querySelectorAll('a[href="#"], a[href=""], nav a').forEach(link => {
            const texto = link.textContent.trim().toLowerCase();

            link.addEventListener('click', (e) => {
                e.preventDefault();

                switch (texto) {
                    case 'home':
                        this.irParaHome();
                        break;
                    case 'acervo':
                        this.irParaCatalogo();
                        break;
                    case 'salvos':
                        this.irParaFavoritos();
                        break;
                    case 'expert reader':
                        this.irParaCatalogo();
                        break;
                    default:
                        // Se for um link com href valido, deixar navegar
                        if (link.href && !link.href.endsWith('#')) {
                            window.location.href = link.href;
                        }
                }
            });
        });

        // Configurar busca
        this.configurarBusca();
    },

    // =============================================
    // CONFIGURAR BUSCA
    // =============================================
    configurarBusca() {
        const searchInputs = document.querySelectorAll('input[type="text"][placeholder*="Pesquisar"], input[type="search"], .search-bar input, #searchInput');
        const searchButtons = document.querySelectorAll('.search-bar button, #searchButton, button[aria-label="Pesquisar"]');

        searchInputs.forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.realizarBusca(input.value);
                }
            });
        });

        searchButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const input = btn.closest('div')?.querySelector('input') ||
                    document.querySelector('input[type="text"][placeholder*="Pesquisar"]');
                if (input && input.value.trim()) {
                    this.realizarBusca(input.value);
                }
            });
        });
    },

    realizarBusca(termo) {
        if (!termo.trim()) return;

        const resultados = BIBLIOTECA.buscarLivros(termo);

        if (resultados.length === 1) {
            // Se encontrou apenas um, ir direto para o livro
            this.irParaLivro(resultados[0].id);
        } else if (resultados.length > 1) {
            // Ir para o catalogo com filtro
            this.irParaCatalogo(termo);
        } else {
            alert(`Nenhum livro encontrado para "${termo}"`);
        }
    },

    // =============================================
    // RENDERIZAR ESTRELAS
    // =============================================
    renderizarEstrelas(avaliacao) {
        let html = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= avaliacao) {
                html += '<span class="star filled">★</span>';
            } else {
                html += '<span class="star empty">☆</span>';
            }
        }
        return html;
    },

    // =============================================
    // INICIALIZAR
    // =============================================
    init() {
        // Configurar navegacao apos carregar a pagina
        document.addEventListener('DOMContentLoaded', () => {
            this.configurarNavegacao();
        });
    }
};

// Inicializar automaticamente
APP.init();

// Exportar para uso global
window.APP = APP;
