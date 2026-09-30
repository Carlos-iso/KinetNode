/**
 * Portfólio da Kinetnode.
 *
 * Para adicionar um projeto, copie um dos objetos abaixo e ajuste os campos.
 * Os mockups ficam em `public/projects/<slug>/` e são referenciados pelo caminho
 * público, ex.: '/projects/meu-app/desktop.webp'.
 *
 * Sem `src`, o site exibe uma moldura de espera no lugar da imagem.
 *
 * Tamanhos recomendados:
 *  - browser / plain: 1800 × 1200 (3:2), .webp ou .png
 *  - phone:           1170 × 2532 (≈ 9:19.5), .webp ou .png
 */

export type ProjectStatus = 'conceito' | 'em-desenvolvimento' | 'beta' | 'lancado'

export type Mockup = {
  device: 'browser' | 'phone' | 'plain'
  src?: string
  alt?: string
  /** Texto exibido na barra de endereço do frame "browser". */
  url?: string
}

export type Project = {
  slug: string
  name: string
  category: string
  summary: string
  status: ProjectStatus
  year?: string
  stack?: string[]
  link?: { label: string; href: string }
  /** Cor de destaque usada na moldura de espera e no gráfico. */
  accent?: string
  /** O primeiro é o mockup principal; um segundo do tipo 'phone' aparece sobreposto. */
  mockups: Mockup[]
}

export const statusLabel: Record<ProjectStatus, string> = {
  conceito: 'Conceito',
  'em-desenvolvimento': 'Em desenvolvimento',
  beta: 'Beta',
  lancado: 'Lançado',
}

export const projects: Project[] = [
  {
    slug: 'cliplay',
    name: 'CliPlay',
    category: 'Biblioteca CLI / TUI',
    summary:
      'TUI acoplável para qualquer projeto. Lê scripts do package.json e arquivos .sh e apresenta uma interface navegável com temas, filtro e modo input, sem configuração.',
    status: 'lancado',
    year: '2026',
    stack: ['TypeScript', 'Node.js'],
    link: { label: 'npm i -g @kinetnode/cliplay', href: 'https://www.npmjs.com/package/@kinetnode/cliplay' },
    accent: '#E49B1A',
    mockups: [
      {
        device: 'plain',
        src: '/projects/cliplay/mockup.html',
        alt: 'CliPlay — Brand kit mostrando a TUI e a prévia do site',
      },
    ],
  },
  {
    slug: 'versioner',
    name: 'Versioner',
    category: 'CLI de versionamento',
    summary:
      'Automatiza o ciclo de versionamento semântico: atualiza o package.json, faz commit e push com um único comando. Possui modo interativo via TUI, powered by CliPlay.',
    status: 'lancado',
    year: '2026',
    stack: ['TypeScript', 'Node.js', 'CliPlay'],
    link: { label: 'npm i -g @kinetnode/versioner-cli', href: 'https://www.npmjs.com/package/@kinetnode/versioner-cli' },
    accent: '#7C3AED',
    mockups: [
      {
        device: 'plain',
        src: '/projects/versioner/mockup.html',
        alt: 'Versioner — Brand kit com terminal mockup e modo interativo',
      },
    ],
  },
]
