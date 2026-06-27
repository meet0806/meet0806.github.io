import { projects, type Project } from '../../data/portfolio'

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M3 11L11 3M11 3H5M11 3V9" />
    </svg>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={`group flex flex-col rounded-3xl border border-black/10 p-7 transition-colors duration-300 hover:border-black/30 ${
        project.featured ? 'bg-black text-white md:col-span-2' : 'bg-white'
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3
          className={`text-2xl ${project.featured ? 'text-white' : 'text-black'}`}
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {project.title}
        </h3>
        {project.live && (
          <span
            className={`flex flex-shrink-0 items-center gap-2 rounded-full px-3 py-1 text-xs uppercase tracking-wider ${
              project.featured
                ? 'bg-white/15 text-white'
                : 'border border-black/15 text-black/60'
            }`}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Live
          </span>
        )}
      </div>

      <p
        className={`mb-5 ${project.featured ? 'text-white/80' : 'text-black/70'}`}
        style={{ fontSize: '17px', lineHeight: 1.5 }}
      >
        {project.blurb}
      </p>

      <ul className="mb-6 space-y-2">
        {project.points.map((point, i) => (
          <li
            key={i}
            className={`flex gap-3 text-sm ${
              project.featured ? 'text-white/70' : 'text-black/70'
            }`}
          >
            <span
              className={`mt-[7px] h-[4px] w-[4px] flex-shrink-0 rounded-full ${
                project.featured ? 'bg-white/50' : 'bg-black/40'
              }`}
            />
            <span style={{ lineHeight: 1.5 }}>{point}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className={`rounded-full border px-3 py-1 text-xs ${
              project.featured
                ? 'border-white/25 text-white/80'
                : 'border-black/15 text-black/60'
            }`}
          >
            {t}
          </span>
        ))}
      </div>

      {project.links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-4">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 text-sm underline-offset-4 transition-opacity hover:opacity-60 ${
                project.featured ? 'text-white underline' : 'text-black underline'
              }`}
            >
              {link.label}
              <ArrowIcon />
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section
      id="work"
      className="border-b border-black/10 px-5 py-20 sm:px-8 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-12 text-sm uppercase tracking-[0.2em] text-black/50">
          Selected Work
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
