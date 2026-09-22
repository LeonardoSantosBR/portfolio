# Guia do projeto

## Visão geral

Este é um portfólio pessoal desenvolvido com React, TypeScript e Vite. A interface usa Tailwind CSS, estilos complementares em `src/App.css` e componentes visuais inspirados no Aceternity UI.

## Comandos

Use `pnpm`:

```bash
pnpm install
pnpm dev
pnpm run lint
pnpm run build
```

Antes de concluir uma alteração relevante, execute `pnpm run lint` e `pnpm run build`.

## Estrutura principal

- `src/App.tsx`: conteúdo, dados das seções e composição da página.
- `src/App.css`: layout, responsividade e estilos específicos do portfólio.
- `src/index.css`: estilos globais e diretivas do Tailwind.
- `src/i18n/index.ts`: configuração do i18next.
- `src/i18n/locales/pt-BR.json`: textos em português.
- `src/i18n/locales/en.json`: textos em inglês.
- `src/components/ui/`: componentes visuais reutilizáveis.
- `src/assets/`: imagens importadas pelo código.
- `public/assets/`: logos e imagens acessadas por caminho público.

## Internacionalização

Todo texto visível ao usuário deve passar pelo i18next com `t(...)`. Ao adicionar ou alterar texto, atualize os arquivos `pt-BR.json` e `en.json` com as mesmas chaves.

O idioma atual é alternado pelo botão do header. Não coloque textos traduzíveis diretamente no JSX, exceto nomes próprios, tecnologias e dados que sejam intencionalmente iguais nos dois idiomas.

## Conteúdo

Ao adicionar experiências ou projetos:

- mantenha os dados agrupados no início de `src/App.tsx`;
- use chaves de tradução para cargos, locais, atividades e descrições;
- preserve links externos com `target="_blank"` e `rel="noopener"`;
- mantenha a expansão com `<details>` para evitar que a página fique excessivamente longa;
- use imagens existentes quando possível e confirme os caminhos antes de criar novos assets.

## Layout e responsividade

O layout possui ajustes específicos para desktop e mobile em `src/App.css`. Sempre confira as larguras menores que `860px` ao alterar as seções, principalmente a imagem do Sobre, o header, os cards de projetos e o menu mobile.

Evite alterar o tamanho de imagens usando somente `width` quando o elemento estiver limitado pelo container; confira também `max-width`, `overflow`, `transform` e `transform-origin`.

## Componentes visuais

- O hero usa `CloudShader`.
- A seção Skills usa `CardSpotlight` como fundo global da seção, não como fundo individual dos cards.
- Os cards e seções possuem estilos próprios em `src/App.css`; preserve a hierarquia visual e o fundo branco das áreas que não usam efeitos.

## Convenções

- Use TypeScript e componentes funcionais.
- Prefira alterações pequenas e localizadas.
- Preserve acentuação correta nos arquivos UTF-8.
- Não remova assets ou dependências sem confirmar que não são mais utilizados.
- Não reintroduza a antiga pasta `vanilla`: o projeto atual é totalmente React.

## Checklist antes de finalizar

1. Conferir português e inglês no toggle de idioma.
2. Testar desktop e mobile.
3. Verificar imagens, links e navegação do header.
4. Executar `pnpm run lint`.
5. Executar `pnpm run build`.

