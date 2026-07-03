import { skills } from '../../data/portfolio'

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-black/10 px-5 py-20 sm:px-8 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-12 text-sm uppercase tracking-[0.2em] text-black/50">
          Skills
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.group}>
              <h3
                className="mb-4 text-lg text-black"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const src =
                    item.icon ??
                    (item.slug
                      ? `https://cdn.simpleicons.org/${item.slug}`
                      : undefined)
                  return (
                    <span
                      key={item.name}
                      className="inline-flex items-center gap-2 rounded-full border border-black/15 px-3 py-1 text-sm text-black/70 transition-colors duration-200 hover:border-black hover:text-black"
                    >
                      {src && (
                        <img
                          src={src}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          className="h-[15px] w-auto max-w-[24px] shrink-0"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'
                          }}
                        />
                      )}
                      {item.name}
                    </span>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
