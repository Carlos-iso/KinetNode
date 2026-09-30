import { site } from '../content/site'
import { ArrowUpRight } from './Icons'
import './Contact.css'

export default function Contact() {
  const links = site.contact.links.filter((l) => l.href)

  return (
    <section className="section contact" id="contato">
      <div className="container">
        <div className="contact__inner">
          <p className="eyebrow reveal">
            <span className="section-head__index">05</span>
            Contato
          </p>
          <h2 className="contact__title reveal">
            Propostas, parcerias ou perguntas sobre algum projeto.
          </h2>
          <a className="contact__email reveal" href={`mailto:${site.contact.email}`}>
            {site.contact.email}
            <ArrowUpRight size={28} />
          </a>

          {links.length > 0 && (
            <ul className="contact__links reveal">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label} <ArrowUpRight size={14} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
