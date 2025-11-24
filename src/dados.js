// =============================================
// DADOS.JS - Banco de Dados da Biblioteca Virtual
// =============================================

const BIBLIOTECA = {
    // =============================================
    // AUTORES
    // =============================================
    autores: [
        {
            id: 1,
            nome: "George R. R. Martin",
            nacionalidade: "Americano",
            genero: "Fantasia",
            foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/George_R._R._Martin_by_Gage_Skidmore_2.jpg/220px-George_R._R._Martin_by_Gage_Skidmore_2.jpg",
            biografia: "George Raymond Richard Martin, nascido em 1948, é um escritor e roteirista americano, mais conhecido pela série de livros 'As Crônicas de Gelo e Fogo', que deu origem à série de TV 'Game of Thrones'."
        },
        {
            id: 2,
            nome: "Naomi Wolf",
            nacionalidade: "Americana",
            genero: "Não-Ficção",
            foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Naomi_Wolf_2019.jpg/220px-Naomi_Wolf_2019.jpg",
            biografia: "Naomi Wolf é uma autora e jornalista americana, conhecida por seus livros sobre feminismo e questões sociais. Seu livro 'O Mito da Beleza' é um clássico do feminismo moderno."
        },
        {
            id: 3,
            nome: "Colleen Hoover",
            nacionalidade: "Americana",
            genero: "Romance",
            foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Colleen_Hoover_2015.jpg/220px-Colleen_Hoover_2015.jpg",
            biografia: "Colleen Hoover é uma autora americana de romances contemporâneos. Seus livros frequentemente exploram temas emocionais profundos e relacionamentos complexos."
        },
        {
            id: 4,
            nome: "George Orwell",
            nacionalidade: "Britânico",
            genero: "Ficção/Distopia",
            foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/George_Orwell_press_photo.jpg/220px-George_Orwell_press_photo.jpg",
            biografia: "Eric Arthur Blair, conhecido pelo pseudônimo George Orwell, foi um escritor e jornalista inglês. Suas obras mais famosas são '1984' e 'A Revolução dos Bichos'."
        },
        {
            id: 5,
            nome: "J.R.R. Tolkien",
            nacionalidade: "Britânico",
            genero: "Fantasia",
            foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/J._R._R._Tolkien%2C_ca._1925.jpg/220px-J._R._R._Tolkien%2C_ca._1925.jpg",
            biografia: "John Ronald Reuel Tolkien foi um escritor, professor e filólogo britânico, autor de 'O Senhor dos Anéis' e 'O Hobbit', considerado o pai da fantasia moderna."
        },
        {
            id: 6,
            nome: "Jane Austen",
            nacionalidade: "Britânica",
            genero: "Romance",
            foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/CassandraAusten-JaneAusten%28c.1810%29_hires.jpg/220px-CassandraAusten-JaneAusten%28c.1810%29_hires.jpg",
            biografia: "Jane Austen foi uma escritora inglesa do século XIX, conhecida por seus romances que retratam a sociedade britânica da época. 'Orgulho e Preconceito' é sua obra mais famosa."
        },
        {
            id: 7,
            nome: "Herman Melville",
            nacionalidade: "Americano",
            genero: "Aventura",
            foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Herman_Melville_1860.jpg/220px-Herman_Melville_1860.jpg",
            biografia: "Herman Melville foi um escritor americano do século XIX, autor de 'Moby Dick', considerada uma das maiores obras da literatura americana."
        },
        {
            id: 8,
            nome: "Karin Slaughter",
            nacionalidade: "Americana",
            genero: "Thriller",
            foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Karin_Slaughter_2012.jpg/220px-Karin_Slaughter_2012.jpg",
            biografia: "Karin Slaughter é uma autora americana de thrillers e romances policiais. Seus livros são conhecidos por suas tramas intensas e personagens complexos."
        },
        {
            id: 9,
            nome: "Harper Lee",
            nacionalidade: "Americana",
            genero: "Ficção",
            foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Harper_Lee_medal.jpg/220px-Harper_Lee_medal.jpg",
            biografia: "Nelle Harper Lee foi uma escritora americana, autora do clássico 'O Sol é Para Todos' (To Kill a Mockingbird), que ganhou o Prêmio Pulitzer em 1961."
        }
    ],

    // =============================================
    // LIVROS
    // =============================================
    livros: [
        {
            id: 1,
            titulo: "As Crônicas de Gelo e Fogo",
            autorId: 1,
            genero: "Fantasia",
            ano: 1996,
            capa: "https://editoraviseu.com/wp-content/uploads/2023/03/Livro-A-Guerra-dos-Tronos-As-Cronicas-de-Gelo-e-Fogo.webp",
            descricao: "Uma saga épica de fantasia que narra a luta pelo Trono de Ferro nos Sete Reinos de Westeros.",
            paginas: 694,
            avaliacao: 5,
            tags: ["Fantasia", "Épico", "Medieval"],
            capitulos: [
                { titulo: "Prólogo", conteudo: "O vento gelado soprava do norte, trazendo consigo o prenúncio do inverno que estava por vir..." },
                { titulo: "Bran I", conteudo: "O menino observava de longe enquanto seu pai preparava a espada ancestral da família..." },
                { titulo: "Catelyn I", conteudo: "Lady Catelyn Stark aguardava no solar de Winterfell, preocupada com as notícias do sul..." },
                { titulo: "Daenerys I", conteudo: "Do outro lado do Mar Estreito, uma jovem princesa exilada sonhava com dragões..." }
            ]
        },
        {
            id: 2,
            titulo: "O Mito da Beleza",
            autorId: 2,
            genero: "Não-Ficção",
            ano: 1991,
            capa: "https://m.media-amazon.com/images/I/8177asxnGGL._SL1500_.jpg",
            descricao: "Uma análise profunda de como as imagens de beleza são usadas contra as mulheres na sociedade moderna.",
            paginas: 348,
            avaliacao: 4,
            tags: ["Feminismo", "Sociedade", "Não-Ficção"],
            capitulos: [
                { titulo: "Introdução", conteudo: "O mito da beleza não é sobre as mulheres. É sobre as instituições masculinas e o poder institucional..." },
                { titulo: "O Trabalho", conteudo: "No ambiente de trabalho, as mulheres enfrentam padrões de beleza que afetam suas carreiras..." },
                { titulo: "A Cultura", conteudo: "A mídia perpetua imagens irreais que moldam a percepção feminina de si mesmas..." },
                { titulo: "Conclusão", conteudo: "Libertar-se do mito da beleza é o primeiro passo para a verdadeira igualdade..." }
            ]
        },
        {
            id: 3,
            titulo: "É Assim que Acaba",
            autorId: 3,
            genero: "Romance",
            ano: 2016,
            capa: "https://m.media-amazon.com/images/I/91r5G8RxqfL._SY466_.jpg",
            descricao: "Uma história emocionante sobre amor, força e as complexidades dos relacionamentos.",
            paginas: 384,
            avaliacao: 5,
            tags: ["Romance", "Drama", "Contemporâneo"],
            capitulos: [
                { titulo: "Parte 1 - Lily", conteudo: "Meu nome é Lily Bloom, e esta é a história de como encontrei a coragem para recomeçar..." },
                { titulo: "Parte 2 - O Encontro", conteudo: "Conheci Ryle em um terraço, olhando as estrelas. Ele era diferente de todos os outros..." },
                { titulo: "Parte 3 - Atlas", conteudo: "Antes de Ryle, houve Atlas. Meu primeiro amor, minha primeira dor..." },
                { titulo: "Parte 4 - Escolhas", conteudo: "Às vezes, acabar é apenas o começo de algo novo..." }
            ]
        },
        {
            id: 4,
            titulo: "1984",
            autorId: 4,
            genero: "Ficção/Distopia",
            ano: 1949,
            capa: "https://m.media-amazon.com/images/I/61M9jDcsl2L._SL1000_.jpg",
            descricao: "Uma distopia clássica sobre vigilância, controle governamental e a luta pela liberdade individual.",
            paginas: 328,
            avaliacao: 5,
            tags: ["Distopia", "Clássico", "Política"],
            capitulos: [
                { titulo: "Parte 1 - Capítulo 1", conteudo: "Era um dia frio e luminoso de abril, e os relógios batiam treze horas..." },
                { titulo: "Parte 1 - Capítulo 2", conteudo: "Winston trabalhava no Ministério da Verdade, reescrevendo a história..." },
                { titulo: "Parte 2 - Capítulo 1", conteudo: "O amor era proibido, mas Winston e Julia encontraram um ao outro..." },
                { titulo: "Parte 3 - Capítulo 1", conteudo: "A Sala 101 aguardava. O Grande Irmão sempre vencia..." }
            ]
        },
        {
            id: 5,
            titulo: "A Revolução dos Bichos",
            autorId: 4,
            genero: "Ficção/Fábula",
            ano: 1945,
            capa: "https://m.media-amazon.com/images/I/61yb1HHAIVL._SL1360_.jpg",
            descricao: "Uma fábula política sobre uma fazenda onde os animais se revoltam contra os humanos.",
            paginas: 112,
            avaliacao: 5,
            tags: ["Fábula", "Política", "Clássico"],
            capitulos: [
                { titulo: "Capítulo 1", conteudo: "O velho Major reuniu todos os animais da Fazenda Solar para compartilhar seu sonho..." },
                { titulo: "Capítulo 2", conteudo: "A revolução aconteceu mais cedo do que todos esperavam..." },
                { titulo: "Capítulo 3", conteudo: "Os porcos assumiram a liderança, prometendo igualdade para todos..." },
                { titulo: "Capítulo 4", conteudo: "Todos os animais são iguais, mas alguns são mais iguais que outros..." }
            ]
        },
        {
            id: 6,
            titulo: "O Senhor dos Anéis",
            autorId: 5,
            genero: "Fantasia",
            ano: 1954,
            capa: "https://m.media-amazon.com/images/I/81MZ8OjmQrL._SL1296_.jpg",
            descricao: "Uma épica jornada para destruir o Um Anel e salvar a Terra-média das trevas.",
            paginas: 1200,
            avaliacao: 5,
            tags: ["Fantasia", "Épico", "Aventura"],
            capitulos: [
                { titulo: "Uma Festa Muito Esperada", conteudo: "Quando o Sr. Bilbo Bolseiro de Bolsão anunciou que celebraria seu centésimo décimo primeiro aniversário..." },
                { titulo: "A Sombra do Passado", conteudo: "Gandalf revelou a Frodo a verdadeira natureza do anel que herdara de Bilbo..." },
                { titulo: "A Sociedade do Anel", conteudo: "Nove companheiros partiram de Valfenda em uma missão impossível..." },
                { titulo: "O Retorno do Rei", conteudo: "Na fornalha da Montanha da Perdição, o destino da Terra-média seria decidido..." }
            ]
        },
        {
            id: 7,
            titulo: "Orgulho e Preconceito",
            autorId: 6,
            genero: "Romance",
            ano: 1813,
            capa: "https://m.media-amazon.com/images/I/71Xta4Nf7uL._SL1360_.jpg",
            descricao: "Uma crítica social através da história de amor entre Elizabeth Bennet e Mr. Darcy.",
            paginas: 432,
            avaliacao: 5,
            tags: ["Romance", "Clássico", "Drama"],
            capitulos: [
                { titulo: "Capítulo 1", conteudo: "É uma verdade universalmente reconhecida que um homem solteiro, possuidor de uma boa fortuna..." },
                { titulo: "Capítulo 2", conteudo: "O Sr. Bennet foi um dos primeiros a visitar o Sr. Bingley..." },
                { titulo: "Capítulo 3", conteudo: "Elizabeth não podia acreditar na arrogância do Sr. Darcy..." },
                { titulo: "Capítulo 4", conteudo: "Contra todas as expectativas, o amor floresceu onde menos se esperava..." }
            ]
        },
        {
            id: 8,
            titulo: "Moby Dick",
            autorId: 7,
            genero: "Aventura",
            ano: 1851,
            capa: "https://m.media-amazon.com/images/I/61kif0Iav7L._SL1000_.jpg",
            descricao: "A obsessiva busca do Capitão Ahab pela grande baleia branca que lhe tirou a perna.",
            paginas: 635,
            avaliacao: 4,
            tags: ["Aventura", "Clássico", "Mar"],
            capitulos: [
                { titulo: "Loomings", conteudo: "Chamem-me Ismael. Há alguns anos - não importa quantos exatamente..." },
                { titulo: "O Navio", conteudo: "O Pequod era um navio peculiar, adornado com ossos de baleias..." },
                { titulo: "Ahab", conteudo: "O capitão apareceu no convés, sua perna de marfim de baleia brilhando ao sol..." },
                { titulo: "A Caça", conteudo: "Moby Dick emergiu das profundezas, branca como a morte..." }
            ]
        },
        {
            id: 9,
            titulo: "Flores Partidas",
            autorId: 8,
            genero: "Thriller",
            ano: 2018,
            capa: "https://m.media-amazon.com/images/I/81vrJlJ-udL._SY466_.jpg",
            descricao: "Um thriller intenso sobre duas irmãs separadas por um trauma familiar devastador.",
            paginas: 512,
            avaliacao: 4,
            tags: ["Thriller", "Suspense", "Drama"],
            capitulos: [
                { titulo: "Prólogo", conteudo: "O segredo que as separou era também o que as unia..." },
                { titulo: "Lydia", conteudo: "Lydia havia construído uma vida longe do passado, mas o passado a encontrou..." },
                { titulo: "Claire", conteudo: "Claire nunca esqueceu. Como poderia? As cicatrizes eram um lembrete constante..." },
                { titulo: "Revelações", conteudo: "A verdade finalmente veio à tona, mais terrível do que qualquer uma delas imaginava..." }
            ]
        },
        {
            id: 10,
            titulo: "O Sol é Para Todos",
            autorId: 9,
            genero: "Ficção",
            ano: 1960,
            capa: "https://m.media-amazon.com/images/I/91WKPd60P4L._SY466_.jpg",
            descricao: "Através dos olhos de uma criança, acompanhamos um advogado defendendo um homem negro falsamente acusado.",
            paginas: 324,
            avaliacao: 5,
            tags: ["Ficção", "Clássico", "Drama Social"],
            capitulos: [
                { titulo: "Parte 1", conteudo: "Quando tinha quase treze anos, meu irmão Jem quebrou feio o braço na altura do cotovelo..." },
                { titulo: "Parte 2", conteudo: "Atticus Finch aceitou defender Tom Robinson, um homem negro acusado injustamente..." },
                { titulo: "Parte 3", conteudo: "O julgamento revelou mais sobre a cidade de Maycomb do que sobre o acusado..." },
                { titulo: "Epílogo", conteudo: "Scout aprendeu que a verdadeira coragem não está na força, mas na justiça..." }
            ]
        },
        {
            id: 11,
            titulo: "É Assim Que Começa",
            autorId: 3,
            genero: "Romance",
            ano: 2022,
            capa: "https://http2.mlstatic.com/D_NQ_NP_2X_919409-MLU72972327275_112023-F.webp",
            descricao: "A continuação de 'É Assim que Acaba', acompanhando Lily após seu divórcio e seu reencontro com Atlas.",
            paginas: 336,
            avaliacao: 4,
            tags: ["Romance", "Drama", "Contemporâneo"],
            capitulos: [
                { titulo: "Recomeço", conteudo: "Dois anos depois, Lily finalmente encontrou paz. Ou assim pensava..." },
                { titulo: "Atlas", conteudo: "Ele nunca deixou de pensar nela. E agora, o destino os reunia novamente..." },
                { titulo: "Emery", conteudo: "Sua filha era sua razão de viver. E ela faria qualquer coisa para protegê-la..." },
                { titulo: "Futuro", conteudo: "Às vezes, o fim de uma história é apenas o começo de outra..." }
            ]
        }
    ],

    // =============================================
    // FUNCOES UTILITARIAS
    // =============================================

    getLivroById(id) {
        return this.livros.find(livro => livro.id === parseInt(id));
    },

    getAutorById(id) {
        return this.autores.find(autor => autor.id === parseInt(id));
    },

    getLivrosByAutorId(autorId) {
        return this.livros.filter(livro => livro.autorId === parseInt(autorId));
    },

    getAutorByLivroId(livroId) {
        const livro = this.getLivroById(livroId);
        if (livro) {
            return this.getAutorById(livro.autorId);
        }
        return null;
    },

    buscarLivros(termo) {
        const termoLower = termo.toLowerCase();
        return this.livros.filter(livro =>
            livro.titulo.toLowerCase().includes(termoLower) ||
            livro.genero.toLowerCase().includes(termoLower) ||
            livro.tags.some(tag => tag.toLowerCase().includes(termoLower))
        );
    },

    buscarAutores(termo) {
        const termoLower = termo.toLowerCase();
        return this.autores.filter(autor =>
            autor.nome.toLowerCase().includes(termoLower) ||
            autor.genero.toLowerCase().includes(termoLower)
        );
    },

    getLivrosPorGenero(genero) {
        return this.livros.filter(livro =>
            livro.genero.toLowerCase().includes(genero.toLowerCase()) ||
            livro.tags.some(tag => tag.toLowerCase().includes(genero.toLowerCase()))
        );
    }
};

// =============================================
// FAVORITOS (usando localStorage)
// =============================================
const FAVORITOS = {
    STORAGE_KEY: 'biblioteca_favoritos',

    get() {
        const data = localStorage.getItem(this.STORAGE_KEY);
        return data ? JSON.parse(data) : { favoritos: [], lerDepois: [], estudos: [] };
    },

    save(data) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    },

    addFavorito(livroId) {
        const data = this.get();
        if (!data.favoritos.includes(livroId)) {
            data.favoritos.push(livroId);
            this.save(data);
        }
    },

    removeFavorito(livroId) {
        const data = this.get();
        data.favoritos = data.favoritos.filter(id => id !== livroId);
        this.save(data);
    },

    isFavorito(livroId) {
        return this.get().favoritos.includes(livroId);
    },

    addLerDepois(livroId) {
        const data = this.get();
        if (!data.lerDepois.includes(livroId)) {
            data.lerDepois.push(livroId);
            this.save(data);
        }
    },

    addEstudos(livroId) {
        const data = this.get();
        if (!data.estudos.includes(livroId)) {
            data.estudos.push(livroId);
            this.save(data);
        }
    }
};

// =============================================
// PROGRESSO DE LEITURA
// =============================================
const PROGRESSO = {
    STORAGE_KEY: 'biblioteca_progresso',

    get() {
        const data = localStorage.getItem(this.STORAGE_KEY);
        return data ? JSON.parse(data) : {};
    },

    save(data) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    },

    salvarProgresso(livroId, capituloIndex) {
        const data = this.get();
        data[livroId] = {
            capitulo: capituloIndex,
            data: new Date().toISOString()
        };
        this.save(data);
    },

    getProgresso(livroId) {
        return this.get()[livroId] || { capitulo: 0, data: null };
    },

    getLivrosEmLeitura() {
        const data = this.get();
        return Object.keys(data).map(id => ({
            livro: BIBLIOTECA.getLivroById(id),
            progresso: data[id]
        })).filter(item => item.livro);
    }
};

// Exportar para uso global
window.BIBLIOTECA = BIBLIOTECA;
window.FAVORITOS = FAVORITOS;
window.PROGRESSO = PROGRESSO;
