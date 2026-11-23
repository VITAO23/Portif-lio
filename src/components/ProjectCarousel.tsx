import { useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'

export type Shot = {
  src: string
  caption: string
}

type Props = {
  shots: Shot[]
  projectName: string
}

function ProjectCarousel({ shots, projectName }: Props) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const total = shots.length
  const hasMany = total > 1

  const goTo = (index: number) => {
    const track = trackRef.current
    if (!track) return
    const next = (index + total) % total
    track.scrollTo({ left: next * track.clientWidth, behavior: 'smooth' })
  }

  const handleScroll = () => {
    const track = trackRef.current
    if (!track) return
    const index = Math.round(track.scrollLeft / track.clientWidth)
    if (index !== current) setCurrent(index)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      goTo(current + 1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goTo(current - 1)
    }
  }

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carrossel"
      aria-label={`Telas do projeto ${projectName}`}
    >
      <div
        className="carousel-track"
        ref={trackRef}
        onScroll={hasMany ? handleScroll : undefined}
        onKeyDown={hasMany ? handleKeyDown : undefined}
        tabIndex={hasMany ? 0 : undefined}
      >
        {shots.map((shot, index) => (
          <figure
            className="carousel-slide"
            key={shot.src}
            aria-roledescription="slide"
            aria-label={`${index + 1} de ${total}`}
            aria-hidden={hasMany && index !== current}
          >
            <img
              src={shot.src}
              alt={`${projectName}: ${shot.caption}`}
              loading="lazy"
              draggable={false}
            />
          </figure>
        ))}
      </div>

      {hasMany && (
        <div className="carousel-bar">
          <p className="carousel-caption" aria-live="polite">
            <span>
              {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            {shots[current].caption}
          </p>
          <div className="carousel-controls">
            <button type="button" onClick={() => goTo(current - 1)} aria-label="Imagem anterior">
              ←
            </button>
            <button type="button" onClick={() => goTo(current + 1)} aria-label="Próxima imagem">
              →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectCarousel
