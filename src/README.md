# Biblioteca Virtual - Estrutura do Projeto

## Estrutura de Diretórios

```
src/
├── index.html              # Página de entrada (redireciona para Home)
├── pages/                  # Páginas HTML
│   ├── Home.html          # Página inicial
│   ├── catálogodelivros.html  # Catálogo de livros
│   ├── detalhesdolivro.html   # Detalhes de um livro
│   ├── autor.html         # Página do autor
│   ├── favoritos.html     # Livros salvos
│   ├── leitura.html       # Interface de leitura
│   └── expert-reader.html # Recomendações personalizadas
├── styles/                 # Arquivos CSS
│   ├── styles.css         # Estilos globais
│   ├── autor.css          # Estilos da página de autor
│   ├── detalhesdolivro.css    # Estilos de detalhes
│   ├── expert-reader.css  # Estilos do Expert Reader
│   ├── favoritos.css      # Estilos de favoritos
│   └── leitura.css        # Estilos da interface de leitura
├── scripts/                # Arquivos JavaScript
│   ├── app.js             # Funções principais e navegação
│   ├── dados.js           # Base de dados (livros e autores)
│   ├── autor.js           # Lógica da página de autor
│   ├── favoritos.js       # Gerenciamento de favoritos
│   └── leitura.js         # Controles de leitura
└── assets/                 # Recursos (imagens, ícones, etc.)
```

## Instalação do Site

O site em HTML/CSS/JS é um projeto estático que pode ser utilizado tanto em servidores web quanto localmente. Para executar:

1. Abra o arquivo `index.html` em um navegador
2. Ou use um servidor HTTP local (recomendado):
   ```bash
   # Com Python 3
   python -m http.server 8000

   # Com Node.js (http-server)
   npx http-server
   ```

## Navegação

- **Home**: Página inicial com destaques e continuação de leitura
- **Acervo**: Catálogo completo de livros
- **Salvos**: Livros marcados como favoritos
- **Expert Reader**: Recomendações personalizadas baseadas em preferências

## Histórico de versões

### [0.2.0] - 03/12/2024
#### Modificado
- Reorganizada estrutura de diretórios em pages/, styles/, scripts/ e assets/
- Atualizadas todas as referências de caminhos nos arquivos
- Adicionado index.html como ponto de entrada

### [0.1.0] - DD/MM/AAAA
#### Adicionado
- Implementação inicial do projeto