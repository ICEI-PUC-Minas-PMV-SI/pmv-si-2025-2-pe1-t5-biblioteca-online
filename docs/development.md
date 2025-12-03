# Programação de Funcionalidades

Este documento descreve a implementação das funcionalidades do **LêUai**, relacionando os requisitos atendidos com os artefatos criados, estruturas de dados utilizadas e instruções para acesso.

## Tecnologias Utilizadas

- **HTML5**: Estruturação semântica das páginas
- **CSS3**: Estilização e design responsivo
- **JavaScript (ES6+)**: Lógica de negócio e interatividade
- **LocalStorage**: Armazenamento de dados do usuário (favoritos e progresso)
- **JSON**: Estrutura de dados para o acervo de livros e autores

## Estrutura do Projeto

```
src/
├── index.html                 # Página de redirecionamento
├── assets/                    # Recursos estáticos
│   ├── logo.png              # Logo do LêUai
│   └── favicon.ico           # Ícone da aplicação
├── pages/                     # Páginas da aplicação
│   ├── Home.html             # Página inicial
│   ├── catálogodelivros.html # Catálogo de livros
│   ├── detalhesdolivro.html  # Detalhes de um livro
│   ├── autor.html            # Informações do autor
│   ├── leitura.html          # Interface de leitura
│   ├── favoritos.html        # Livros salvos
│   └── expert-reader.html    # Modo de leitura avançado
├── scripts/                   # Lógica JavaScript
│   ├── dados.js              # Base de dados (livros e autores)
│   ├── app.js                # Funções utilitárias e navegação
│   ├── leitura.js            # Controles de leitura
│   └── favoritos.js          # Gerenciamento de favoritos
└── styles/                    # Folhas de estilo
    ├── styles.css            # Estilos globais
    ├── favoritos.css         # Estilos da página de favoritos
    ├── leitura.css           # Estilos da página de leitura
    ├── autor.css             # Estilos da página de autor
    ├── detalhesdolivro.css   # Estilos dos detalhes
    └── expert-reader.css     # Estilos do modo avançado
```

## Requisitos Atendidos

### Requisitos Funcionais

|ID    | Descrição do Requisito | Artefatos Criados |
|------|------------------------|-------------------|
|RF-001| Permitir navegação pelo catálogo de livros | `catálogodelivros.html`, `dados.js`, `app.js` |
|RF-002| Exibir detalhes completos de cada livro | `detalhesdolivro.html`, `detalhesdolivro.css` |
|RF-003| Permitir busca de livros por título ou autor | `catálogodelivros.html` (função realizarBusca) |
|RF-004| Filtrar livros por gênero | `catálogodelivros.html` (navegação por categorias) |
|RF-005| Permitir leitura completa de livros | `leitura.html`, `leitura.js`, `leitura.css` |
|RF-006| Salvar livros como favoritos | `favoritos.html`, `favoritos.js`, LocalStorage |
|RF-007| Exibir informações de autores | `autor.html`, `autor.css` |
|RF-008| Personalizar experiência de leitura | `leitura.js` (controles de tema e fonte) |
|RF-009| Acompanhar progresso de leitura | `leitura.js` (PROGRESSO object) |
|RF-010| Navegação por capítulos ou páginas | `leitura.js` (suporte a ambos tipos) |

### Requisitos Não-Funcionais

|ID     | Descrição do Requisito | Implementação |
|-------|------------------------|---------------|
|RNF-001| Interface responsiva | CSS com media queries, design adaptativo |
|RNF-002| Compatibilidade cross-browser | JavaScript ES6+, CSS3 padrão |
|RNF-003| Performance otimizada | JavaScript puro sem frameworks pesados |
|RNF-004| Persistência de dados local | LocalStorage para favoritos e progresso |
|RNF-005| Design acessível e intuitivo | Interface clara com hierarquia visual bem definida |

## Estruturas de Dados

### Livro
|  **Campo**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:---------------:|-------------------|-------------------------------------------|------------------------------------------------|
| id              | Number            | Identificador único do livro              | 1                                              |
| titulo          | String            | Título do livro                           | "As Crônicas de Gelo e Fogo"                  |
| autorId         | Number            | ID do autor                               | 1                                              |
| genero          | String            | Gênero literário                          | "Fantasia"                                     |
| ano             | Number            | Ano de publicação                         | 1996                                           |
| capa            | String (URL)      | URL da imagem da capa                     | "https://..."                                  |
| descricao       | String            | Sinopse do livro                          | "Uma saga épica de fantasia..."                |
| paginas         | Number            | Número de páginas                         | 694                                            |
| avaliacao       | Number            | Avaliação (1-5 estrelas)                  | 5                                              |
| tags            | Array[String]     | Tags relacionadas                         | ["Fantasia", "Épico", "Medieval"]              |
| tipoPaginacao   | String            | Tipo de navegação                         | "capitulos" ou "paginas"                       |
| capitulos       | Array[Object]     | Capítulos do livro                        | [{titulo: "...", conteudo: "..."}]             |
| paginas_conteudo| Array[Object]     | Páginas do livro (alternativo)            | [{numero: 1, conteudo: "..."}]                 |

### Autor
|  **Campo**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:---------------:|-------------------|-------------------------------------------|------------------------------------------------|
| id              | Number            | Identificador único do autor              | 1                                              |
| nome            | String            | Nome completo do autor                    | "George R. R. Martin"                          |
| nacionalidade   | String            | País de origem                            | "Americano"                                    |
| genero          | String            | Gênero literário principal                | "Fantasia"                                     |
| foto            | String (URL)      | URL da foto do autor                      | "https://..."                                  |
| biografia       | String            | Biografia resumida                        | "George Raymond Richard Martin..."             |

### Favorito (LocalStorage)
|  **Campo**      | **Tipo**          | **Descrição**                             |
|:---------------:|-------------------|-------------------------------------------|
| livroId         | Number            | ID do livro favoritado                    |
| dataAdicionado  | String (ISO)      | Data em que foi salvo                     |

### Progresso de Leitura (LocalStorage)
|  **Campo**      | **Tipo**          | **Descrição**                             |
|:---------------:|-------------------|-------------------------------------------|
| livroId         | Number            | ID do livro                               |
| capitulo        | Number            | Índice do capítulo atual                  |
| porcentagem     | Number            | Percentual de leitura (0-100)             |

