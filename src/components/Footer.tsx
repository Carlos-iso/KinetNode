import { nav, site } from '../content/site'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  const { legalName, cnpj } = site.legal

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <a href="#top" aria-label={`${site.name} — voltar ao topo`}>
            <img src="/brand/lockup.svg" alt={site.name} width={128} height={29} className="footer__logo" />
          </a>
          <nav aria-label="Rodapé">
            <ul className="footer__nav">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {legalName ?? site.name}
            {cnpj && <> · CNPJ {cnpj}</>}
          </p>
          <p className="footer__tag">Motion &amp; network flow.</p>
        </div>
      </div>
    </footer>
  )
}
