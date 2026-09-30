import { projects, statusLabel } from '../content/projects'
import './NodeGraph.css'

const SIZE = 560
const C = SIZE / 2
const R_OUTER = 212
const R_INNER = 118

/** Ângulos (graus) para distribuir os projetos no anel externo. */
function anglesFor(count: number) {
  if (count === 0) return []
  if (count === 1) return [-30]
  const start = -70
  // 2 projetos: espalha 190° para ficar visualmente equilibrado;
  // mais projetos: 90° por passo, máximo 260°.
  const span = count === 2 ? 190 : Math.min(260, 90 * (count - 1))
  return Array.from({ length: count }, (_, i) => start + (span / (count - 1)) * i)
}

const polar = (r: number, deg: number) => {
  const a = (deg * Math.PI) / 180
  return { x: C + r * Math.cos(a), y: C + r * Math.sin(a) }
}

// Pontos decorativos do anel interno — representam a estrutura compartilhada.
const innerNodes = [200, 290, 20].map((d) => polar(R_INNER, d))

export default function NodeGraph() {
  const items = projects.slice(0, 5)
  const angles = anglesFor(items.length)

  return (
    <div className="graph" aria-hidden="true">
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="graph__svg">
        <defs>
          <radialGradient id="graph-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#2E74FF" stopOpacity="0.12" />
            <stop offset="1" stopColor="#2E74FF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="graph-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#29E4FF" />
            <stop offset="0.55" stopColor="#2E74FF" />
            <stop offset="1" stopColor="#7C5CFF" />
          </linearGradient>
        </defs>

        <circle cx={C} cy={C} r={R_OUTER + 40} fill="url(#graph-glow)" />

        <circle cx={C} cy={C} r={R_INNER} className="graph__ring" />
        <circle cx={C} cy={C} r={R_OUTER} className="graph__ring graph__ring--outer" />
        <g className="graph__orbit">
          <circle
            cx={C}
            cy={C}
            r={R_OUTER}
            fill="none"
            stroke="url(#graph-ring)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={`${R_OUTER * 1.1} ${R_OUTER * 10}`}
          />
        </g>

        {innerNodes.map((p, i) => (
          <g key={i}>
            <line x1={C} y1={C} x2={p.x} y2={p.y} className="graph__link graph__link--inner" />
            <circle cx={p.x} cy={p.y} r="3.5" className="graph__dot" />
          </g>
        ))}

        {items.map((project, i) => {
          const deg = angles[i]
          const p = polar(R_OUTER, deg)
          const label = polar(R_OUTER + 26, deg)
          const cos = Math.cos((deg * Math.PI) / 180)
          const anchor = cos > 0.3 ? 'start' : cos < -0.3 ? 'end' : 'middle'
          const sin = Math.sin((deg * Math.PI) / 180)
          const dy = sin < -0.5 ? -6 : sin > 0.5 ? 14 : 4
          return (
            <g key={project.slug} className="graph__node" style={{ animationDelay: `${400 + i * 140}ms` }}>
              <line x1={C} y1={C} x2={p.x} y2={p.y} className="graph__link" />
              <line
                x1={C}
                y1={C}
                x2={p.x}
                y2={p.y}
                className="graph__pulse"
                style={{ animationDelay: `${i * 1.1}s`, stroke: project.accent }}
              />
              <circle cx={p.x} cy={p.y} r="14" className="graph__halo" style={{ fill: project.accent }} />
              <circle cx={p.x} cy={p.y} r="6" style={{ fill: project.accent ?? '#29E4FF' }} />
              <text x={label.x} y={label.y + dy} textAnchor={anchor} className="graph__label">
                {project.name}
              </text>
              <text x={label.x} y={label.y + dy + 16} textAnchor={anchor} className="graph__meta">
                {statusLabel[project.status]}
              </text>
            </g>
          )
        })}

        <image href="/brand/symbol.svg" x={C - 58} y={C - 58} width="116" height="116" className="graph__core" />
      </svg>
    </div>
  )
}
