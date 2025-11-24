// =============================================
// AUTOR.JS - Pagina do Autor
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    // Carregar dados do autor pela URL
    const autorId = APP.getParametroURL('id') || 1;
    const autor = BIBLIOTECA.getAutorById(autorId);

    if (autor) {
        // Atualizar titulo
        document.querySelector('.titulo h1').textContent = 'Autor';
        document.querySelector('.titulo p').textContent = autor.nome;
        document.title = `${autor.nome} - Biblioteca Virtual`;

        // Atualizar perfil
        document.querySelector('.perfil .descricao h2').textContent = autor.nome;
        document.querySelector('.perfil .descricao p').textContent = autor.biografia.substring(0, 100) + '...';

        // Tags
        const tagsContainer = document.querySelector('.perfil .descricao');
        const existingTags = tagsContainer.querySelectorAll('.tag');
        existingTags.forEach((tag, i) => {
            if (i === 0) tag.textContent = autor.genero;
            if (i === 1) tag.textContent = autor.nacionalidade;
        });

        // Foto do autor
        const fotoDiv = document.querySelector('.perfil .foto');
        fotoDiv.style.backgroundImage = `url(${autor.foto})`;
        fotoDiv.style.backgroundSize = 'cover';
        fotoDiv.style.backgroundPosition = 'center';

        // Biografia completa
        document.querySelector('.biografia p').textContent = autor.biografia;
        document.querySelector('.bio-text p').textContent = autor.biografia;

        // Foto na biografia
        const bioFoto = document.querySelector('.bio-foto');
        bioFoto.style.backgroundImage = `url(${autor.foto})`;
        bioFoto.style.backgroundSize = 'cover';
        bioFoto.style.backgroundPosition = 'center';

        // Obras do autor
        const livrosDoAutor = BIBLIOTECA.getLivrosByAutorId(autor.id);
        const listaObras = document.querySelector('.lista-obras');
        listaObras.innerHTML = '';

        livrosDoAutor.forEach(livro => {
            const li = document.createElement('li');
            li.style.cursor = 'pointer';
            li.innerHTML = `
                <div class="livro-info">
                    <img src="${livro.capa}" alt="${livro.titulo}" style="width: 50px; height: 70px; object-fit: cover; border-radius: 4px;">
                    <div>
                        <strong>${livro.titulo}</strong>
                        <p>Gênero: ${livro.genero}</p>
                    </div>
                </div>
                <span class="ano">Ano: ${livro.ano}</span>
            `;
            li.addEventListener('click', () => APP.irParaLivro(livro.id));

            // Efeito hover
            li.addEventListener('mouseenter', () => {
                li.style.transform = "scale(1.02)";
                li.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
            });
            li.addEventListener('mouseleave', () => {
                li.style.transform = "scale(1)";
                li.style.boxShadow = "none";
            });

            listaObras.appendChild(li);
        });

        if (livrosDoAutor.length === 0) {
            listaObras.innerHTML = '<li>Nenhuma obra encontrada no catálogo.</li>';
        }
    } else {
        document.querySelector('.titulo p').textContent = 'Autor não encontrado';
    }

    // Navegacao
    document.querySelectorAll('.menu a, nav a').forEach(link => {
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
});
