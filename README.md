# Kinetnode — site institucional

React 19 + TypeScript + Vite. CSS puro com tokens da marca (`src/styles/global.css`).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/ (site estático)
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| E-mail, redes, CNPJ / razão social | `src/content/site.ts` |
| Áreas de atuação e princípios | `src/content/site.ts` |
| Projetos e mockups | `src/content/projects.ts` |

Nenhum texto institucional está preso aos componentes: basta editar os arquivos em `src/content/`.

## Adicionando mockups

1. Exporte as telas e coloque em `public/projects/<slug>/`:
   - desktop: `2400×1500` (16:10)
   - mobile: `1170×2532`
   - prefira `.webp`
2. Em `src/content/projects.ts`, informe o caminho em `src`:

```ts
mockups: [
  { device: 'browser', url: 'meuapp.com', src: '/projects/meu-app/desktop.webp' },
  { device: 'phone', src: '/projects/meu-app/mobile.webp' },
]
```

- `device`: `'browser'` (janela de navegador), `'phone'` (celular) ou `'plain'` (imagem sem moldura).
- O primeiro item é o mockup principal. Se o segundo for `'phone'`, ele aparece sobreposto ao primeiro.
- Sem `src`, o site mostra um esqueleto de interface com o selo "Mockup em breve".
- `accent` define a cor do projeto (no gráfico do topo e no fundo do mockup).

Os projetos aparecem automaticamente na seção Portfólio e no gráfico de nós do topo (até 5).

## Quando a empresa for formalizada

Em `src/content/site.ts`, preencha `legal.legalName` e `legal.cnpj`. O rodapé passa a exibir os dois.

## Deploy

`npm run build` gera arquivos estáticos em `dist/`, compatíveis com Vercel, Netlify, Cloudflare Pages ou GitHub Pages.
