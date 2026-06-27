import { profile } from '../../data/portfolio'

const links = [
  { label: 'Email', href: `mailto:${profile.email}`, value: profile.email },
  { label: 'GitHub', href: profile.githubUrl, value: `github.com/${profile.github}` },
  { label: 'LinkedIn', href: profile.linkedinUrl, value: 'in/meet-zalavadiya' },
  { label: 'Phone', href: `tel:${profile.phone}`, value: profile.phone },
]

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-20 sm:px-8 md:px-10 md:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="mb-6 text-sm uppercase tracking-[0.2em] text-black/50">
          Get in touch
        </p>
        <h2
          className="max-w-3xl text-black"
          style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 6vw, 64px)', lineHeight: 1.1 }}
        >
          Let's build something reliable together.
        </h2>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block text-xl text-black underline underline-offset-4 transition-opacity hover:opacity-60 sm:text-2xl"
        >
          {profile.email}
        </a>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="group bg-white p-6 transition-colors duration-200 hover:bg-black"
            >
              <p className="text-xs uppercase tracking-[0.15em] text-black/40 group-hover:text-white/60">
                {link.label}
              </p>
              <p className="mt-2 break-words text-black group-hover:text-white">
                {link.value}
              </p>
            </a>
          ))}
        </div>

        <p className="mt-16 text-sm text-black/40">
          © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript, Vite & Tailwind CSS.
        </p>
      </div>
    </section>
  )
}
