import { profile, education } from '../../data/portfolio'

export default function About() {
  return (
    <section
      id="about"
      className="border-b border-black/10 px-5 py-20 sm:px-8 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-8 text-sm uppercase tracking-[0.2em] text-black/50">
          About
        </p>
        <p
          className="max-w-3xl text-black"
          style={{ fontSize: 'clamp(20px, 3vw, 32px)', lineHeight: 1.35 }}
        >
          {profile.summary}
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="rounded-2xl border border-black/10 p-6"
            >
              <p className="text-xs uppercase tracking-[0.15em] text-black/40">
                {edu.period}
              </p>
              <h3
                className="mt-2 text-xl text-black"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {edu.school}
              </h3>
              <p className="mt-1 text-black/70">{edu.degree}</p>
              <p className="text-black/50">{edu.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
