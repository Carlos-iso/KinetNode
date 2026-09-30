/**
 * Dados institucionais da Kinetnode.
 * Campos vazios ('' ou null) simplesmente não aparecem no site.
 */
export const site = {
  name: 'Kinetnode',
  tagline: 'Estúdio de produtos de software',

  contact: {
    email: 'contato@kinetnode.com',
    // Deixe vazio para ocultar.
    links: [
      { label: 'GitHub', href: '' },
      { label: 'LinkedIn', href: '' },
      { label: 'Instagram', href: '' },
    ],
  },

  /**
   * Dados jurídicos. Enquanto a empresa não estiver formalizada, deixe
   * `cnpj` como null: o rodapé mostra apenas o nome.
   * Ex.: { legalName: 'Kinetnode Tecnologia SLU', cnpj: '00.000.000/0001-00' }
   */
  legal: {
    legalName: null as string | null,
    cnpj: null as string | null,
  },

  location: 'Brasil',
}

export const nav = [
  { label: 'Empresa', href: '#empresa' },
  { label: 'Atuação', href: '#atuacao' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Método', href: '#metodo' },
]

export const services = [
  {
    title: 'Produto',
    body: 'Definição do problema, escopo e prioridades. Cada produto começa com uma pergunta clara sobre quem vai usar e por quê.',
    items: ['Pesquisa e descoberta', 'Arquitetura de informação', 'Design de interface'],
  },
  {
    title: 'Engenharia',
    body: 'Aplicações web e mobile, back-end e integrações. Código escrito para ser mantido por anos, não só para a primeira versão.',
    items: ['Web e mobile', 'APIs e serviços', 'Integrações'],
  },
  {
    title: 'Infraestrutura',
    body: 'Ambientes de produção previsíveis, com deploy automatizado e visibilidade sobre o que acontece em cada sistema.',
    items: ['Cloud e deploy contínuo', 'Monitoramento', 'Segurança e backups'],
  },
  {
    title: 'Operação',
    body: 'Depois do lançamento o trabalho continua: correções, métricas de uso e evolução guiada pelo que os usuários de fato fazem.',
    items: ['Suporte', 'Métricas de uso', 'Evolução contínua'],
  },
]

export const principles = [
  {
    title: 'Escopo antes de código',
    body: 'Antes de escrever a primeira linha, o problema está definido e o que fica de fora também.',
  },
  {
    title: 'Entregas curtas',
    body: 'Versões pequenas, em produção cedo. Feedback real vale mais que planejamento longo.',
  },
  {
    title: 'Qualidade como requisito',
    body: 'Testes, revisão e documentação fazem parte da entrega, não de uma fase posterior.',
  },
  {
    title: 'Responsabilidade de ponta a ponta',
    body: 'Quem constrói também opera. Isso muda a forma como cada decisão técnica é tomada.',
  },
]
