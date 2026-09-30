import { principles } from '../content/site'
import SectionHead from './SectionHead'
import './Principles.css'

export default function Principles() {
  return (
    <section className="section" id="metodo">
      <div className="container">
        <SectionHead
          index="04"
          label="Método"
          title="Como os projetos são conduzidos."
        />

        <div className="principles">
          {principles.map((p, i) => (
            <div key={p.title} className="principle reveal" style={{ ['--delay' as string]: `${i * 60}ms` }}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
