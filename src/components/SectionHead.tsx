import type { CSSProperties, ReactNode } from 'react'

type Props = {
  index: string
  label: string
  title: ReactNode
  lead?: ReactNode
}

export default function SectionHead({ index, label, title, lead }: Props) {
  return (
    <header className="section-head">
      <div className="section-head__label reveal">
        <span className="eyebrow">
          <span className="section-head__index">{index}</span>
          {label}
        </span>
      </div>
      <div>
        <h2 className="reveal">{title}</h2>
        {lead && (
          <p className="lead reveal" style={{ '--delay': '80ms' } as CSSProperties}>
            {lead}
          </p>
        )}
      </div>
    </header>
  )
}
