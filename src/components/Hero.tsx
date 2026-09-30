import { ArrowRight } from './Icons'
import NodeGraph from './NodeGraph'
import './Hero.css'

const facts = [
  { label: 'Foco', value: 'Produtos digitais próprios' },
  { label: 'Modelo', value: 'Desenvolvimento e operação internos' },
  { label: 'Base', value: 'Brasil' },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">
            <span className="hero__signal" />
            Estúdio de produtos de software
          </p>
          <h1 className="hero__title">
            Produtos de software, do&nbsp;conceito à&nbsp;operação.
          </h1>
          <p className="lead hero__lead">
            A Kinetnode cria, desenvolve e mantém seus próprios produtos digitais. Cada projeto nasce
            aqui, é construído aqui e continua sob nossa responsabilidade depois do lançamento.
          </p>
          <div className="hero__actions">
            <a href="#projetos" className="btn btn--primary">
              Conhecer os projetos <ArrowRight />
            </a>
            <a href="#empresa" className="btn btn--ghost">
              Sobre a empresa
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <NodeGraph />
        </div>
      </div>

      <div className="container">
        <dl className="hero__facts">
          {facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
