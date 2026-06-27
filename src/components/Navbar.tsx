import { useState } from 'react'

const NAV_LINKS = ['Labs', 'Studio', 'Openings', 'Shop']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 z-10 flex w-full items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span
            className="text-[21px] tracking-tight text-black sm:text-[26px]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Mainframe&reg;
          </span>
          <span
            className="select-none text-[25px] text-black sm:text-[30px]"
            style={{ letterSpacing: '-0.02em' }}
          >
            &#10035;&#xFE0E;
          </span>
        </div>

        {/* Desktop nav links */}
        <div className="hidden text-[23px] text-black md:flex">
          {NAV_LINKS.map((link, i) => (
            <span key={link}>
              <a
                href="#"
                className="transition-opacity hover:opacity-60"
              >
                {link}
              </a>
              {i < NAV_LINKS.length - 1 && <span>, </span>}
            </span>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#"
          className="hidden text-[23px] text-black underline underline-offset-2 transition-opacity hover:opacity-60 md:inline"
        >
          Get in touch
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-[5px] md:hidden"
        >
          <span
            className={`h-[2px] w-6 bg-black transition-all duration-300 ${
              open ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-black transition-all duration-300 ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-black transition-all duration-300 ${
              open ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className="fixed inset-0 z-[9] flex flex-col justify-center gap-8 bg-white/95 px-8 backdrop-blur-sm transition-opacity duration-300 md:hidden"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="text-[32px] font-medium text-black"
            onClick={() => setOpen(false)}
          >
            {link}
          </a>
        ))}
        <a
          href="#"
          className="text-[32px] font-medium text-black underline underline-offset-2"
          onClick={() => setOpen(false)}
        >
          Get in touch
        </a>
      </div>
    </>
  )
}
