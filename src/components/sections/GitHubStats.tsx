import { profile } from '../../data/portfolio'

const user = profile.github

export default function GitHubStats() {
  return (
    <section
      id="github"
      className="border-b border-black/10 px-5 py-20 sm:px-8 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-black/50">
              GitHub Contributions
            </p>
            <h2
              className="text-3xl text-black sm:text-4xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              @{user}
            </h2>
          </div>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-black underline underline-offset-4 transition-opacity hover:opacity-60"
          >
            View profile
          </a>
        </div>

        {/* Contribution graph */}
        <div className="overflow-x-auto rounded-2xl border border-black/10 p-5 sm:p-7">
          <img
            src={`https://ghchart.rshah.org/3b82f6/${user}`}
            alt={`${user} GitHub contribution chart`}
            loading="lazy"
            className="min-w-[640px] w-full"
          />
        </div>

        {/* Stats cards */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-black/10 p-2">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&hide_border=true&hide_title=false&count_private=true`}
              alt={`${user} GitHub stats`}
              loading="lazy"
              className="w-full"
            />
          </div>
          <div className="rounded-2xl border border-black/10 p-2">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&hide_border=true&langs_count=8`}
              alt={`${user} top languages`}
              loading="lazy"
              className="w-full"
            />
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-black/10 p-2">
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${user}&hide_border=true`}
            alt={`${user} GitHub streak`}
            loading="lazy"
            className="mx-auto w-full max-w-2xl"
          />
        </div>
      </div>
    </section>
  )
}
