'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mx = useRef(0)
  const my = useRef(0)
  const rx = useRef(0)
  const ry = useRef(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.current = e.clientX
      my.current = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top  = e.clientY + 'px'
      }
    }
    document.addEventListener('mousemove', onMove)

    let raf: number
    const animate = () => {
      rx.current += (mx.current - rx.current) * 0.12
      ry.current += (my.current - ry.current) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = rx.current + 'px'
        ringRef.current.style.top  = ry.current + 'px'
      }
      raf = requestAnimationFrame(animate)
    }
    animate()

    const expand   = () => ringRef.current?.classList.add('ring-expand')
    const collapse = () => ringRef.current?.classList.remove('ring-expand')
    const targets  = document.querySelectorAll('a, button, .service-card, .team-card')
    targets.forEach(el => {
      el.addEventListener('mouseenter', expand)
      el.addEventListener('mouseleave', collapse)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      targets.forEach(el => {
        el.removeEventListener('mouseenter', expand)
        el.removeEventListener('mouseleave', collapse)
      })
    }
  }, [])

  return (
    <>
      <style>{`
        .cursor-dot {
          position: fixed;
          width: 8px; height: 8px;
          background: #C4503A;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
        }
        .cursor-ring {
          position: fixed;
          width: 36px; height: 36px;
          border: 1px solid #C4503A;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transform: translate(-50%, -50%);
          transition: width 0.2s, height 0.2s, opacity 0.2s;
          opacity: 0.6;
        }
        .cursor-ring.ring-expand {
          width: 60px; height: 60px; opacity: 0.3;
        }
      `}</style>
      <div ref={dotRef}  className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
