import { services } from '../content/site'
import SectionHead from './SectionHead'
import './Services.css'

export default function Services() {
  return (
    <section className="section" id="atuacao">
      <div className="container">
        <SectionHead
          index="02"
          label="Atuação"
          title="Tudo o que um produto precisa, feito dentro de casa."
          lead="Da primeira definição ao suporte em produção, cada etapa é conduzida pela própria Kinetnode. Isso mantém o conhecimento em um só lugar e as decisões coerentes ao longo do tempo."
        />

        <ol className="services">
          {services.map((s, i) => (
            <li
              key={s.title}
              className="services__item reveal"
              style={{ ['--delay' as string]: `${i * 70}ms` }}
            >
              <span className="services__num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
