import type { CSSProperties } from 'react'
import { projects, statusLabel, type Project } from '../content/projects'
import DeviceFrame from './DeviceFrame'
import SectionHead from './SectionHead'
import { ArrowUpRight } from './Icons'
import './Projects.css'

export default function Projects() {
  return (
    <section className="section" id="projetos">
      <div className="container">
        <SectionHead
          index="03"
          label="Projetos"
          title="Portfólio"
          lead="Produtos concebidos e mantidos pela Kinetnode. Alguns ainda estão em construção; esta página acompanha a evolução de cada um."
        />

        <div className="projects">
          {projects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [primary, secondary] = project.mockups
  const phoneOnly = primary?.device === 'phone'
  const overlay = !phoneOnly && secondary?.device === 'phone' ? secondary : undefined

  return (
    <article
      className={`project${index % 2 ? ' project--flip' : ''}`}
      style={{ '--accent': project.accent ?? 'var(--blue)' } as CSSProperties}
    >
      <div className="project__info reveal">
        <div className="project__top">
          <span className="project__index">{String(index + 1).padStart(2, '0')}</span>
          <span className={`project__status project__status--${project.status}`}>
            {statusLabel[project.status]}
          </span>
        </div>

        <h3 className="project__name">{project.name}</h3>
        <p className="project__category">
          {project.category}
          {project.year && <span> · {project.year}</span>}
        </p>
        <p className="project__summary">{project.summary}</p>

        {project.stack && project.stack.length > 0 && (
          <ul className="project__stack" aria-label="Tecnologias">
            {project.stack.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}

        {project.link && (
          <a className="project__link" href={project.link.href} target="_blank" rel="noopener noreferrer">
            {project.link.label} <ArrowUpRight />
          </a>
        )}
      </div>

      <div
        className={`project__stage reveal${phoneOnly ? ' project__stage--phone' : ''}${overlay ? ' has-overlay' : ''}${primary?.device === 'plain' ? ' project__stage--plain' : ''}`}
        style={{ '--delay': '100ms' } as CSSProperties}
      >
        {primary && <DeviceFrame mockup={primary} title={project.name} className="project__primary" />}
        {overlay && <DeviceFrame mockup={overlay} title={project.name} className="project__overlay" />}
      </div>
    </article>
  )
}
