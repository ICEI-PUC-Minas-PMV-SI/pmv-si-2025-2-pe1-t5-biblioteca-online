# Template Padrão do LêUai

Este documento descreve o template padrão do **LêUai**, incluindo identidade visual, paleta de cores, tipografia, iconografia e aspectos de responsividade implementados na aplicação.

## Identidade Visual

O LêUai apresenta uma identidade visual moderna, limpa e focada na experiência de leitura. O design prioriza a legibilidade, com hierarquia visual clara e elementos bem organizados.

### Logo
- **Posicionamento**: Canto superior esquerdo do header
- **Formato**: Logo com texto "LêUai" integrado
- **Tamanho**: 45px de altura (responsivo)
- **Arquivos**: `logo.png` e `favicon.ico` em `/src/assets/`

## Layout

### Estrutura Geral
O layout segue um padrão consistente em todas as páginas:

1. **Header Fixo**
   - Logo do LêUai (esquerda)
   - Menu de navegação horizontal (centro-direita)
   - Barra de busca integrada
   - Itens: Home | Acervo | Salvos | Expert Reader

2. **Conteúdo Principal**
   - Layout responsivo e fluido
   - Máximo de 1200px de largura (centralizado)
   - Espaçamento consistente (1.5rem - 2rem)

3. **Footer**
   - Links institucionais
   - Informações de contato
   - Centralizado e discreto

### Páginas Específicas

#### Home (`Home.html`)
- Hero banner com título e descrição
- Seção de destaques
- Catálogo visual com cards de livros
- Grid responsivo (auto-fill, mínimo 220px)

#### Catálogo (`catálogodelivros.html`)
- Filtros por gênero (badges clicáveis)
- Busca por título/autor
- Grid de livros com capas
- Todos os 11 livros do acervo exibidos

#### Detalhes do Livro (`detalhesdolivro.html`)
- Layout em 2 colunas (capa + informações)
- Dados completos: título, autor, sinopse, ano, páginas, avaliação
- Botões de ação: Ler, Salvar nos Favoritos
- Link para página do autor

#### Leitura (`leitura.html`)
- Área de leitura centralizada
- Sidebar com sumário (capítulos/páginas)
- Controles de personalização (fonte e tema)
- Barra de progresso de leitura
- Navegação: capítulos ou páginas (conforme o livro)

#### Favoritos (`favoritos.html`)
- Lista de livros salvos
- Cards com informações básicas
- Sistema de abas/filtros
- Gerenciamento via LocalStorage


## Cores

A paleta de cores do LêUai utiliza um sistema de variáveis CSS para garantir consistência. As cores são profissionais e focadas em legibilidade.

### Paleta Implementada (CSS Variables)

| **Variável CSS** | **Hex** | **Uso** |
|------------------|---------|---------|
| `--primary` | #2c3e50 | Cor principal (header, títulos) |
| `--primary-light` | #34495e | Variação clara do primário |
| `--primary-dark` | #1a252f | Fundo de leitura, elementos escuros |
| `--accent` | #3498db | Links, botões de ação, destaques |
| `--accent-hover` | #2980b9 | Estado hover dos elementos accent |
| `--success` | #27ae60 | Feedback positivo |
| `--warning` | #f39c12 | Alertas |
| `--danger` | #e74c3c | Erros, remoções |
| `--white` | #ffffff | Fundo de cards, texto em fundos escuros |
| `--gray-50` | #f8f9fa | Fundo geral da aplicação |
| `--gray-100` | #f1f3f5 | Fundo secundário |
| `--gray-200` | #e9ecef | Bordas suaves |
| `--gray-300` | #dee2e6 | Bordas padrão |
| `--gray-600` | #868e96 | Texto secundário |
| `--gray-700` | #495057 | Texto terciário |
| `--gray-800` | #343a40 | Texto principal |
| `--gray-900` | #212529 | Texto forte, títulos |

### Sombras e Efeitos

```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow: 0 2px 8px rgba(0,0,0,0.08);
--shadow-md: 0 4px 16px rgba(0,0,0,0.12);
--shadow-lg: 0 8px 32px rgba(0,0,0,0.16);
```

### Border Radius

```css
--radius-sm: 6px;
--radius: 10px;
--radius-lg: 16px;
```

### Temas de Leitura

O sistema oferece 3 temas personalizáveis na página de leitura:

1. **Escuro** (padrão): Fundo `--primary-dark`, texto branco
2. **Claro**: Fundo branco, texto `--gray-900`
3. **Sepia**: Fundo `#f4ecd8`, texto `#5b4636`
## Tipografia

O LêUai utiliza a família de fontes **Inter** do Google Fonts, conhecida por sua excelente legibilidade em telas digitais e suporte completo para língua portuguesa.

### Hierarquia Tipográfica

| **Elemento** | **Tamanho** | **Peso** | **Uso** |
|--------------|-------------|----------|---------|
| H1 (Página) | 2rem (32px) | 700 (Bold) | Títulos principais de páginas |
| H2 (Seção) | 1.75rem (28px) | 700 (Bold) | Títulos de seções |
| H3 (Subseção) | 1.25rem (20px) | 600 (Semibold) | Subtítulos |
| Body (Texto) | 1rem (16px) | 400 (Regular) | Corpo de texto padrão |
| Small (Legenda) | 0.875rem (14px) | 400 (Regular) | Legendas, metadados |
| Botões | 0.9rem (14.4px) | 500 (Medium) | Texto em botões e CTAs |

### Importação

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

### Configuração Base

```css
body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: var(--gray-800);
}
```

### Tamanhos de Fonte na Leitura

O sistema de leitura oferece 3 tamanhos personalizáveis:
- **Pequeno**: 0.9rem (14.4px)
- **Médio**: 1rem (16px) - padrão
- **Grande**: 1.125rem (18px)

## Iconografia

O LêUai utiliza a biblioteca **Feather Icons** para ícones SVG leves e consistentes.

### Ícones Implementados

| **Ícone** | **Nome** | **Uso no Sistema** |
|-----------|----------|-------------------|
| 🔍 | search | Barra de busca, buscar livros |
| 📖 | book-open | Ícone de leitura, iniciar leitura |
| ❤️ | heart | Adicionar/remover favoritos |
| ⭐ | star | Avaliação de livros |
| 👤 | user | Perfil de autor |
| 🏠 | home | Página inicial |
| 📚 | book | Acervo, catálogo |
| 🔖 | bookmark | Livros salvos |
| ◀️ ▶️ | chevron-left/right | Navegação entre capítulos |
| ✓ | check | Confirmação de ações |

### Integração

```html
<script src="https://unpkg.com/feather-icons"></script>
<script>
  feather.replace();
</script>
```

## Responsividade

O LêUai é totalmente responsivo, adaptando-se a diferentes tamanhos de tela:

### Breakpoints

```css
/* Mobile First */
/* Smartphones: < 768px (padrão) */

/* Tablets: 768px - 1024px */
@media (min-width: 768px) { ... }

/* Desktop: > 1024px */
@media (min-width: 1024px) { ... }
```

### Adaptações por Dispositivo

- **Mobile**: Menu colapsável, cards empilhados, fonte ajustada
- **Tablet**: Grid de 2-3 colunas, sidebar opcional
- **Desktop**: Grid de 4-5 colunas, sidebar fixa, layout expandido

## Componentes Principais

### Card de Livro
- Shadow on hover
- Transição suave (0.2s)
- Imagem responsiva
- Informações hierarquizadas

### Botões
- **Primário**: Background `--accent`, hover `--accent-hover`
- **Secundário**: Border `--gray-300`, hover com shadow
- **Altura**: 40-48px
- **Padding**: 0.75rem 1.5rem
- **Border-radius**: `--radius`

### Inputs e Busca
- Border: 1px solid `--gray-200`
- Focus: Border `--accent`, box-shadow azul clara
- Padding: 0.5rem 1rem
- Border-radius: `--radius`
