import { useEffect, useState } from 'react'
import { useTypewriter } from '../hooks/useTypewriter'
import { profile } from '../data/portfolio'

const TYPEWRITER_TEXT =
  'Glad you stopped by. I build scalable backends, distributed systems, and AI infrastructure. Let me show you around.'

const PILLS = [
  { label: 'See my work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'GitHub', href: profile.githubUrl, external: true },
  { label: 'LinkedIn', href: profile.linkedinUrl, external: true },
]

function CopyIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="1.5" y="1.5" width="7" height="7" rx="1" />
    </svg>
  )
}

export default function Hero() {
  const { displayed, done } = useTypewriter(TYPEWRITER_TEXT)
  const [pillsVisible, setPillsVisible] = useState(false)
  const [copied, setCopied] = useState(false)

  // Pills fade/slide in 400ms after load, independent of the typewriter.
  useEffect(() => {
    const t = setTimeout(() => setPillsVisible(true), 400)
    return () => clearTimeout(t)
  }, [])

  const handleCopy = () => {
    navigator.clipboard?.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <section
      id="top"
      className="relative z-[1] flex h-screen flex-col justify-end overflow-hidden px-5 pb-12 sm:px-8 md:justify-center md:px-10 md:pb-0"
    >
      <div className="relative z-10 max-w-2xl">
        {/* Blurred intro label */}
        <div
          className="pointer-events-none mb-5 select-none sm:mb-6"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.3,
            fontWeight: 400,
            color: '#000',
            filter: 'blur(4px)',
          }}
        >
          Hi, I'm {profile.name}.
          <br />
          {profile.role} · M.S. Data Science @ Stony Brook
        </div>

        {/* Typewriter text */}
        <p
          className="mb-5 text-black sm:mb-6"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.35,
            fontWeight: 400,
            minHeight: '54px',
          }}
        >
          {displayed}
          {!done && (
            <span
              className="ml-[2px] inline-block h-[1.1em] w-[2px] bg-black align-middle"
              style={{ animation: 'blink 1s step-end infinite' }}
            />
          )}
        </p>

        {/* Action pill buttons */}
        <div
          className="flex flex-wrap gap-y-1"
          style={{
            opacity: pillsVisible ? 1 : 0,
            transform: pillsVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {PILLS.map((pill) => (
            <a
              key={pill.label}
              href={pill.href}
              target={pill.external ? '_blank' : undefined}
              rel={pill.external ? 'noreferrer' : undefined}
              className="mx-[0.2em] mb-[0.4em] inline-flex items-center justify-center whitespace-nowrap rounded-full border border-black/10 bg-white px-4 py-[0.3em] text-[13px] text-black transition-colors duration-200 hover:bg-black hover:text-white sm:px-5 sm:text-[15px]"
            >
              {pill.label}
            </a>
          ))}

          <button
            type="button"
            onClick={handleCopy}
            className="mx-[0.2em] mb-[0.4em] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white bg-transparent px-4 py-[0.3em] text-[13px] text-white transition-colors duration-200 hover:bg-white hover:text-black sm:gap-3 sm:px-5 sm:text-[15px]"
          >
            <span>
              {copied ? 'Copied!' : 'Reach me:'}{' '}
              <span className="underline underline-offset-1">{profile.email}</span>
            </span>
            <CopyIcon />
          </button>
        </div>
      </div>
    </section>
  )
}
