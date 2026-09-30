import { site } from '../content/site'
import SectionHead from './SectionHead'
import './About.css'

export default function About() {
  const details = [
    { term: 'Natureza', value: 'Empresa de tecnologia' },
    { term: 'Atividade', value: 'Criação e operação de produtos de software' },
    { term: 'Estrutura', value: 'Portfólio próprio sob uma única marca' },
    { term: 'Sede', value: site.location },
  ]

  return (
    <section className="section" id="empresa">
      <div className="container">
        <SectionHead
          index="01"
          label="Empresa"
          title="Uma empresa, vários produtos."
        />

        <div className="about">
          <div className="about__text">
            <p className="about__big reveal">
              A Kinetnode é a estrutura por trás de cada projeto que desenvolve. Em vez de iniciativas
              soltas, todos os produtos compartilham a mesma base: engenharia, padrões de qualidade e
              responsabilidade sobre o que vai para produção.
            </p>
            <p className="lead reveal" style={{ ['--delay' as string]: '80ms' }}>
              O nome vem da ideia de <em>nó cinético</em>: um ponto central que conecta partes
              diferentes e mantém o conjunto em movimento. É assim que a empresa se organiza: um
              núcleo único, produtos independentes ao redor.
            </p>
          </div>

          <dl className="about__details reveal" style={{ ['--delay' as string]: '120ms' }}>
            {details.map((d) => (
              <div key={d.term}>
                <dt>{d.term}</dt>
                <dd>{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
