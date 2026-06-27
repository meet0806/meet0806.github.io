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

        <div className="divide-y divide-black/10">
          {experience.map((job) => (
            <div
              key={job.company}
              className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div>
                <h3
                  className="text-2xl text-black"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {job.company}
                </h3>
                <p className="mt-1 text-black/70">
                  {job.role} · {job.location}
                </p>
              </div>
              <p className="flex-shrink-0 text-sm text-black/40">{job.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
