// =============================================
// LEITURA.JS - Pagina de Leitura
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    // Carregar livro pela URL
    const livroId = APP.getParametroURL('id') || 1;
    const livro = BIBLIOTECA.getLivroById(livroId);
    const autor = livro ? BIBLIOTECA.getAutorById(livro.autorId) : null;

    if (!livro) {
        alert('Livro não encontrado!');
        APP.irParaCatalogo();
        return;
    }

    // Atualizar hero
    const hero = document.querySelector('.hero');
    hero.querySelector('h1').textContent = livro.capitulos[0].titulo;
    hero.querySelector('p').textContent = autor ? autor.nome : 'Autor desconhecido';
    document.title = `${livro.titulo} - Biblioteca Virtual`;

    // Gerar conteudo dos capitulos
    const content = document.querySelector('.content');
    content.innerHTML = '';

    livro.capitulos.forEach((capitulo, index) => {
        const section = document.createElement('section');
        section.id = `capitulo${index + 1}`;
        section.className = 'chapter';
        section.innerHTML = `
            <h2>${capitulo.titulo}</h2>
            <p>${capitulo.conteudo}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        `;
        content.appendChild(section);
    });

    // Atualizar sumario
    const chapterList = document.querySelector('.chapter-list');
    chapterList.innerHTML = '';

    livro.capitulos.forEach((capitulo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#capitulo${index + 1}">${capitulo.titulo}</a>`;
        chapterList.appendChild(li);
    });

    // Elementos atualizados
    const chapters = document.querySelectorAll('.chapter');
    const chapterLinks = document.querySelectorAll('.chapter-list a');
    const progressBar = document.querySelector('.progress-bar');
    const progressLabel = document.querySelector('.progress-label');

    let currentChapter = 0;
    const totalChapters = chapters.length;

    // Carregar progresso salvo
    const progressoSalvo = PROGRESSO.getProgresso(livroId);
    if (progressoSalvo.capitulo) {
        currentChapter = progressoSalvo.capitulo;
    }

    // ==========================================
    // CRIAR CONTROLES DE LEITURA
    // ==========================================
    function createReadingControls() {
        const controls = document.createElement('div');
        controls.className = 'reading-controls';
        controls.innerHTML = `
            <div class="font-controls">
                <span>Fonte:</span>
                <button class="font-btn" data-size="small">A-</button>
                <button class="font-btn active" data-size="medium">A</button>
                <button class="font-btn" data-size="large">A+</button>
            </div>
            <div class="theme-controls">
                <span>Tema:</span>
                <button class="theme-btn active" data-theme="dark">Escuro</button>
                <button class="theme-btn" data-theme="light">Claro</button>
                <button class="theme-btn" data-theme="sepia">Sepia</button>
            </div>
        `;

        hero.insertAdjacentElement('afterend', controls);

        controls.querySelectorAll('.font-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                controls.querySelectorAll('.font-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                changeFontSize(this.dataset.size);
            });
        });

        controls.querySelectorAll('.theme-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                controls.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                changeTheme(this.dataset.theme);
            });
        });
    }

    // ==========================================
    // CRIAR BOTOES DE NAVEGACAO
    // ==========================================
    function createNavButtons() {
        const nav = document.createElement('div');
        nav.className = 'chapter-navigation';
        nav.innerHTML = `
            <button class="nav-btn prev-btn">Anterior</button>
            <button class="nav-btn next-btn">Proximo</button>
        `;

        const container = document.querySelector('.container');
        const contentWrapper = document.createElement('div');
        contentWrapper.className = 'content-wrapper';

        content.parentNode.insertBefore(contentWrapper, content);
        contentWrapper.appendChild(content);
        contentWrapper.appendChild(nav);

        nav.querySelector('.prev-btn').addEventListener('click', () => goToChapter(currentChapter - 1));
        nav.querySelector('.next-btn').addEventListener('click', () => goToChapter(currentChapter + 1));
    }

    // ==========================================
    // NAVEGACAO
    // ==========================================
    function goToChapter(index) {
        if (index < 0 || index >= totalChapters) return;

        chapters.forEach(ch => ch.style.display = 'none');
        chapters[index].style.display = 'block';
        currentChapter = index;

        updateSidebar();
        updateProgress();
        updateNavButtons();
        updateHero();

        content.scrollTop = 0;

        // Salvar progresso
        PROGRESSO.salvarProgresso(livroId, currentChapter);
    }

    function updateSidebar() {
        chapterLinks.forEach((link, i) => {
            link.classList.toggle('active', i === currentChapter);
        });
    }

    function updateProgress() {
        const percent = Math.round(((currentChapter + 1) / totalChapters) * 100);
        progressBar.style.width = percent + '%';
        progressLabel.textContent = `Progresso: ${percent}% (Cap. ${currentChapter + 1}/${totalChapters})`;
    }

    function updateNavButtons() {
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        if (prevBtn) prevBtn.disabled = currentChapter === 0;
        if (nextBtn) nextBtn.disabled = currentChapter === totalChapters - 1;
    }

    function updateHero() {
        const title = chapters[currentChapter].querySelector('h2');
        if (title && hero) {
            hero.querySelector('h1').textContent = title.textContent;
        }
    }

    // ==========================================
    // FONTE E TEMA
    // ==========================================
    function changeFontSize(size) {
        const sizes = { small: '14px', medium: '16px', large: '20px' };
        content.style.fontSize = sizes[size];
        localStorage.setItem('leitura_fonte', size);
    }

    function changeTheme(theme) {
        const themes = {
            dark: { bg: '#3d3d3d', text: '#e8e8e8' },
            light: { bg: '#ffffff', text: '#333333' },
            sepia: { bg: '#f5e6c8', text: '#5c4b37' }
        };

        content.style.backgroundColor = themes[theme].bg;
        content.style.color = themes[theme].text;

        content.querySelectorAll('h2, h3').forEach(el => {
            el.style.color = themes[theme].text;
        });

        localStorage.setItem('leitura_tema', theme);
    }

    function loadPreferences() {
        const savedFont = localStorage.getItem('leitura_fonte') || 'medium';
        const savedTheme = localStorage.getItem('leitura_tema') || 'dark';

        changeFontSize(savedFont);
        changeTheme(savedTheme);

        const fontBtn = document.querySelector(`.font-btn[data-size="${savedFont}"]`);
        if (fontBtn) {
            document.querySelectorAll('.font-btn').forEach(b => b.classList.remove('active'));
            fontBtn.classList.add('active');
        }

        const themeBtn = document.querySelector(`.theme-btn[data-theme="${savedTheme}"]`);
        if (themeBtn) {
            document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
            themeBtn.classList.add('active');
        }
    }

    // ==========================================
    // EVENTOS DO SUMARIO
    // ==========================================
    chapterLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            goToChapter(index);
        });
    });

    // ==========================================
    // ATALHOS DE TECLADO
    // ==========================================
    document.addEventListener('keydown', function(e) {
        if (e.target.tagName === 'INPUT') return;

        if (e.key === 'ArrowRight') goToChapter(currentChapter + 1);
        if (e.key === 'ArrowLeft') goToChapter(currentChapter - 1);
    });

    // ==========================================
    // NAVEGACAO DO HEADER
    // ==========================================
    document.querySelectorAll('header nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            const texto = link.textContent.trim().toLowerCase();
            if (texto === 'home' || texto === 'acervo' || texto === 'salvos' || texto === 'expert reader') {
                e.preventDefault();
                if (texto === 'home') APP.irParaHome();
                else if (texto === 'acervo') APP.irParaCatalogo();
                else if (texto === 'salvos') APP.irParaFavoritos();
                else if (texto === 'expert reader') APP.irParaCatalogo();
            }
        });
    });

    // ==========================================
    // BUSCA
    // ==========================================
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const termo = searchInput.value.trim();
                if (termo) APP.realizarBusca(termo);
            }
        });
    }

    // ==========================================
    // INICIALIZAR
    // ==========================================
    createReadingControls();
    createNavButtons();
    loadPreferences();
    goToChapter(currentChapter);
});
