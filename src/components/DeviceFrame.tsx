import { useEffect, useRef, useCallback } from 'react'
import type { Mockup } from '../content/projects'
import './DeviceFrame.css'

type Props = {
  mockup: Mockup
  title: string
  className?: string
}

export default function DeviceFrame({ mockup, title, className = '' }: Props) {
  const { device, src, alt, url } = mockup

  if (device === 'plain' && src?.endsWith('.html')) {
    return <HtmlFrame src={src} alt={alt ?? `Tela do ${title}`} className={className} />
  }

  const screen = src ? (
    <img src={src} alt={alt ?? `Tela do ${title}`} loading="lazy" decoding="async" />
  ) : (
    <Placeholder device={device} />
  )

  if (device === 'phone') {
    return (
      <div className={`device device--phone ${className}`}>
        <div className="device__screen">
          <span className="device__island" aria-hidden="true" />
          {screen}
        </div>
      </div>
    )
  }

  if (device === 'browser') {
    return (
      <div className={`device device--browser ${className}`}>
        <div className="device__bar" aria-hidden="true">
          <span className="device__dots">
            <i />
            <i />
            <i />
          </span>
          {url && <span className="device__url">{url}</span>}
        </div>
        <div className="device__screen">{screen}</div>
      </div>
    )
  }

  return (
    <div className={`device device--plain ${className}`}>
      <div className="device__screen">{screen}</div>
    </div>
  )
}

const NATIVE_W = 950

function HtmlFrame({ src, alt, className = '' }: { src: string; alt?: string; className?: string }) {
  const screenRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const sync = useCallback(() => {
    const screen = screenRef.current
    const iframe = iframeRef.current
    if (!screen || !iframe) return
    const scale = screen.clientWidth / NATIVE_W
    // Collapse to 1px so scrollHeight reflects natural content height
    iframe.style.height = '1px'
    const contentH = iframe.contentDocument?.documentElement.scrollHeight ?? 1200
    iframe.style.height = `${contentH}px`
    iframe.style.transform = `scale(${scale})`
    screen.style.height = `${Math.round(contentH * scale)}px`
  }, [])

  useEffect(() => {
    const ro = new ResizeObserver(sync)
    if (screenRef.current) ro.observe(screenRef.current)
    return () => ro.disconnect()
  }, [sync])

  return (
    <div className={`device device--plain ${className}`}>
      <div ref={screenRef} className="device__screen device__screen--html">
        <iframe
          ref={iframeRef}
          src={src}
          title={alt ?? ''}
          scrolling="no"
          onLoad={sync}
          style={{
            display: 'block',
            border: 'none',
            width: `${NATIVE_W}px`,
            height: '2000px',
            transformOrigin: 'top left',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  )
}

function Placeholder({ device }: { device: Mockup['device'] }) {
  return (
    <div className={`ph ph--${device}`} role="img" aria-label="Mockup em produção">
      {device === 'phone' ? (
        <>
          <div className="ph__row ph__row--head" />
          <div className="ph__block ph__block--hero" />
          <div className="ph__row" />
          <div className="ph__row ph__row--short" />
          <div className="ph__list">
            {[0, 1, 2].map((i) => (
              <div key={i} className="ph__item">
                <span className="ph__avatar" />
                <span className="ph__lines">
                  <i />
                  <i />
                </span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="ph__side">
            <span className="ph__logo" />
            {[0, 1, 2, 3, 4].map((i) => (
              <i key={i} />
            ))}
          </div>
          <div className="ph__main">
            <div className="ph__row ph__row--head" />
            <div className="ph__cards">
              <div className="ph__block" />
              <div className="ph__block" />
              <div className="ph__block" />
            </div>
            <div className="ph__block ph__block--wide" />
          </div>
        </>
      )}
      <span className="ph__tag">Mockup em breve</span>
    </div>
  )
}
