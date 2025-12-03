# Especificações do Projeto

Este documento apresenta a especificação do **LêUai**, uma aplicação web de biblioteca online, detalhando personas, histórias de usuários, requisitos funcionais e não funcionais, além das restrições do projeto.

## Personas

### Persona 1: Ana Clara - Estudante Universitária
- **Idade**: 22 anos
- **Ocupação**: Estudante de Letras
- **Experiência com tecnologia**: Alta
- **Objetivos**: Acessar obras clássicas e contemporâneas para estudos, fazer anotações mentais durante a leitura, gerenciar múltiplos livros simultaneamente
- **Frustrações**: Dificuldade em encontrar livros específicos rapidamente, falta de personalização na leitura digital
- **Necessidades**: Busca eficiente, filtros por gênero, interface de leitura confortável, sistema de favoritos

### Persona 2: Roberto - Leitor Casual
- **Idade**: 35 anos
- **Ocupação**: Analista de TI
- **Experiência com tecnologia**: Média-Alta
- **Objetivos**: Ler para entretenimento nos tempos livres, descobrir novos autores e gêneros
- **Frustrações**: Interfaces confusas, falta de recomendações, dificuldade em retomar leitura
- **Necessidades**: Interface intuitiva, catálogo organizado visualmente, salvamento de progresso de leitura

### Persona 3: Marina - Aposentada e Entusiasta de Literatura
- **Idade**: 68 anos
- **Ocupação**: Aposentada
- **Experiência com tecnologia**: Baixa-Média
- **Objetivos**: Ler clássicos da literatura, explorar diferentes gêneros
- **Frustrações**: Letra pequena, contraste ruim, navegação complicada
- **Necessidades**: Controles de acessibilidade (tamanho de fonte, temas), navegação simples e clara

## Histórias de Usuários

Com base na análise das personas, foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Ana Clara (Estudante) | Buscar livros por título ou autor | Encontrar rapidamente obras específicas para meus estudos |
|Ana Clara (Estudante) | Filtrar livros por gênero literário | Explorar obras dentro de categorias específicas para pesquisa |
|Ana Clara (Estudante) | Salvar livros como favoritos | Organizar leituras obrigatórias e de interesse |
|Roberto (Leitor Casual) | Ver detalhes completos do livro antes de ler | Decidir se o livro me interessa através da sinopse e informações |
|Roberto (Leitor Casual) | Retomar leitura de onde parei | Continuar lendo sem perder meu progresso |
|Roberto (Leitor Casual) | Navegar facilmente pelo catálogo | Descobrir novos títulos de forma intuitiva |
|Marina (Aposentada) | Ajustar o tamanho da fonte durante a leitura | Ler confortavelmente sem forçar a vista |
|Marina (Aposentada) | Escolher tema de leitura (claro/escuro/sepia) | Ler em diferentes condições de iluminação com conforto |
|Marina (Aposentada) | Ter uma interface simples e clara | Navegar sem confusão ou dificuldades |
|Todos os Leitores | Ler livros completos online | Acessar literatura sem precisar baixar arquivos |
|Todos os Leitores | Ver informações dos autores | Conhecer mais sobre os escritores das obras |
|Todos os Leitores | Acessar o catálogo de qualquer dispositivo | Ler em desktop, tablet ou smartphone conforme minha necessidade |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O sistema deve permitir busca de livros por título ou autor | ALTA |
|RF-002| O sistema deve permitir filtrar livros por gênero (Romance, Fantasia, Ficção, Thriller, Aventura) | ALTA |
|RF-003| O sistema deve exibir detalhes completos do livro (título, autor, sinopse, ano, páginas, avaliação, capa) | ALTA |
|RF-004| O sistema deve permitir leitura completa de livros online | ALTA |
|RF-005| O sistema deve oferecer navegação por capítulos ou páginas conforme o tipo de obra | ALTA |
|RF-006| O sistema deve permitir que o usuário salve livros como favoritos | MÉDIA |
|RF-007| O sistema deve exibir a lista de livros favoritados do usuário | MÉDIA |
|RF-008| O sistema deve permitir personalização da leitura (tamanho de fonte: pequeno, médio, grande) | MÉDIA |
|RF-009| O sistema deve oferecer opções de tema de leitura (Escuro, Claro, Sepia) | MÉDIA |
|RF-010| O sistema deve salvar e exibir o progresso de leitura do usuário | BAIXA |
|RF-011| O sistema deve exibir informações detalhadas dos autores (biografia, foto, obras) | BAIXA |
|RF-012| O sistema deve apresentar um catálogo visual com todas as obras disponíveis | ALTA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser desenvolvido utilizando HTML5, CSS3 e JavaScript puro (sem frameworks) | ALTA |
|RNF-002| O sistema deve ser responsivo, funcionando em desktop, tablet e smartphone | ALTA |
|RNF-003| O sistema deve utilizar LocalStorage para persistência de dados do usuário (favoritos e progresso) | ALTA |
|RNF-004| A interface deve seguir princípios de usabilidade e acessibilidade | ALTA |
|RNF-005| O sistema deve ter tempo de carregamento inferior a 3 segundos | MÉDIA |
|RNF-006| O código deve ser versionado com Git e hospedado no GitHub | ALTA |
|RNF-007| O sistema deve funcionar nos principais navegadores (Chrome, Firefox, Safari, Edge) | ALTA |
|RNF-008| A navegação deve ser intuitiva, com hierarquia visual clara | ALTA |
|RNF-009| O sistema deve utilizar design system consistente com variáveis CSS | MÉDIA |
|RNF-010| O conteúdo dos livros deve ser armazenado em estrutura JSON para fácil manutenção | MÉDIA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deve ser desenvolvido apenas com tecnologias frontend (HTML, CSS, JavaScript) |
|02| Não pode ser desenvolvido módulo de backend ou banco de dados externo |
|03| O projeto deve ser entregue até o final do semestre letivo |
|04| O sistema deve funcionar completamente offline após primeiro carregamento |
|05| Todos os dados devem ser armazenados localmente (LocalStorage ou estrutura JSON) |
|06| A aplicação deve ser compatível com os principais navegadores modernos |
|07| O conteúdo dos livros deve respeitar direitos autorais (domínio público ou conteúdo próprio) |
