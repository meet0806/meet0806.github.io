import { experience } from '../../data/portfolio'

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-black/10 px-5 py-20 sm:px-8 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-12 text-sm uppercase tracking-[0.2em] text-black/50">
          Experience
        </p>

        <div className="space-y-12">
          {experience.map((job) => (
            <div
              key={job.company}
              className="grid gap-4 md:grid-cols-[1fr_2fr] md:gap-10"
            >
              <div>
                <h3
                  className="text-2xl text-black"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {job.company}
                </h3>
                <p className="mt-1 text-black/70">{job.role}</p>
                <p className="text-sm text-black/50">{job.location}</p>
                <p className="mt-1 text-sm text-black/40">{job.period}</p>
              </div>

              <ul className="space-y-3">
                {job.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-black/80">
                    <span className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-black/40" />
                    <span style={{ lineHeight: 1.5 }}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
