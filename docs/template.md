# Template padrão do site

Layout padrão do site (HTML e CSS) que será utilizado em todas as páginas com a definição de identidade visual, aspectos de responsividade e iconografia.

As guias de estilo a seguir foram criadas para garantir uma experiência de usuário coesa, intuitiva e agradável. A paleta de cores foi escolhida para ser moderna e de fácil leitura, com o laranja servindo como um ponto de destaque para ações importantes. A tipografia, baseada na fonte "Inter", é conhecida por sua excelente legibilidade em telas digitais. O design segue uma abordagem responsiva, priorizando que o layout se adapte a diferentes tipos de telas.

## Design

Detalhe os layouts que serão utilizados. Apresente onde será colocado o logo do sistema. Defina os menus padrões, entre outras coisas.

O layout será centrado e fluido, adaptando-se a diferentes tamanhos de tela. O design é minimalista para focar no conteúdo principal: os livros.
Logo: O logo do sistema será posicionado no canto superior esquerdo do cabeçalho.
Menus:
Menu Principal (Navegação): Em dispositivos móveis, um menu "hambúrguer" (☰) no canto superior direito abrirá uma navegação com os itens: Home, Acervo, Expert Reader, Favoritos e Listas. Em desktops, este menu poderá ser exibido de forma vertical no lado esquerdo da tela.
Menu de Ações: Botões de ação, como "Ler Mais Tarde" ou "Adicionar à Lista", terão um destaque especial com a cor laranja para incentivar a interação.


## Cores

A paleta de cores combina tons neutros e suaves com uma cor de destaque vibrante para criar uma hierarquia visual clara e direcionar a atenção do usuário.

| **Hexadecimal** | **Nome** | **Função** |
|-------|---------------------|--------------------------------------------|
|#F4F7F9| Cinza-Azulado       | Fundo principal da aplicação               |
|#FFFFFF| Branco              | Superfícies de conteúdo (cards, modais)    |
|#1A2B48| Azul Marinho Escuro | Texto principal, títulos                   |
|#7A8291| Cinza-Azulado       | Texto secundário, descrições, legendas     |
|#FF6B00| Laranja	            | Destaque para botões de ação (CTAs), links |
|#FFF0E6| Laranja Pálido      | Fundo para seções de destaque ou alertas   |

````
/* Color Theme Swatches in Hex */
.Cartela-Principal-1-hex { color: #1A2B48; }
.Cartela-Principal-2-hex { color: #FFF0E6; }
.Cartela-Principal-3-hex { color: #FF6B00; }
.Cartela-Principal-4-hex { color: #7A8291; }
.Cartela-Principal-5-hex { color: #F4F7F9; }

/* Color Theme Swatches in RGBA */
.Cartela-Principal-1-rgba { color: rgba(26, 43, 72, 1); }
.Cartela-Principal-2-rgba { color: rgba(255, 240, 230, 1); }
.Cartela-Principal-3-rgba { color: rgba(255, 107, 0, 1); }
.Cartela-Principal-4-rgba { color: rgba(122, 130, 145, 1); }
.Cartela-Principal-5-rgba { color: rgba(244, 247, 249, 1); }

/* Color Theme Swatches in HSLA */
.Cartela-Principal-1-hsla { color: hsla(217, 46, 19, 1); }
.Cartela-Principal-2-hsla { color: hsla(23, 100, 95, 1); }
.Cartela-Principal-3-hsla { color: hsla(25, 100, 50, 1); }
.Cartela-Principal-4-hsla { color: hsla(219, 9, 52, 1); }
.Cartela-Principal-5-hsla { color: hsla(204, 29, 96, 1); }
````
## Tipografia

Apresente as fontes que serão utilizadas e sua função no site. As principais funções são: Título de página, Título de Seção, Rótulos de componentes e Corpo de Texto.

A fonte Inter será utilizada em todo o site para garantir consistência e legibilidade. Ela será importada do Google Fonts.
- Título de Página : 32px, Bold (700)
- Título de Seção : 24px, Semi-Bold (600)
- Rótulos e Botões: 16px, Medium (500)
- Corpo de Texto: 16px, Regular (400)

````
css :root {
 --font-family-base: 'Inter', sans-serif;
--font-size-page-title: 32px;

--font-weight-page-title: 700; /* Bold */
--font-size-section-title: 24px;

--font-weight-section-title: 600; /* Semi-Bold */
--font-size-label: 16px; --font-weight-label: 500; /* Medium */

--font-size-body: 16px;
--font-weight-body: 400; /* Regular */ }

````

## Iconografia

Defina os ícones que serão utilizados e suas respectivas funções.

Os ícones da biblioteca Feather Icons serão usados para fornecer reconhecimento visual rápido para ações e seções comuns.

| **Ícone**	 | **Função** |
|--------|----------------------------------------------------------|
| Home	 | Navegar para a página inicial.                           |
| Book	 | Representar o "Acervo" ou uma seção de leitura.          |
| Award	 | Indicar a seção "Expert Reader" ou livros premiados.     |
| List	 | Acessar as listas de livros criadas pelo usuário.        |
| Play	 | Iniciar ou continuar uma leitura.                        |
| Check	 | tConfirmar uma ação, como adicionar um livro a uma lista.|

Apresente os estilos CSS criados para cada um dos elementos apresentados.
Outras seções podem ser adicionadas neste documento para apresentar padrões de componentes, de menus, etc.


<img width="1019" height="717" alt="Texto do seu parágrafo" src="https://github.com/user-attachments/assets/b0db30cf-fe0f-4972-9fe6-cb59a1228a46" />




> **Links Úteis**:
>
> -  [Como criar um guia de estilo de design da Web](https://edrodrigues.com.br/blog/como-criar-um-guia-de-estilo-de-design-da-web/#)
> - [CSS Website Layout (W3Schools)](https://www.w3schools.com/css/css_website_layout.asp)
> - [Website Page Layouts](http://www.cellbiol.com/bioinformatics_web_development/chapter-3-your-first-web-page-learning-html-and-css/website-page-layouts/)
> - [Perfect Liquid Layout](https://matthewjamestaylor.com/perfect-liquid-layouts)
> - [How and Why Icons Improve Your Web Design](https://usabilla.com/blog/how-and-why-icons-improve-you-web-design/)
