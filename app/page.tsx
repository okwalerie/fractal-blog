import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Valerie Kim
      </h1>
      <p className="mb-4">
        I build tools and games that make complicated things feel
        self-evident &mdash; especially around math, accessibility, and how
        people actually think.
      </p>
      <p className="mb-4 text-neutral-700 dark:text-neutral-300">
        I&apos;ve worked across public service, non-profits, and education:
        shipping case-management features at Environment and Climate Change
        Canada, standing up infrastructure for a food-security charity, and
        running a kids&apos; game-dev academy. Lately I&apos;ve been deep in
        &quot;iconic arithmetic&quot; &mdash; finding ways to make quantities
        and code behave more like good diagrams than opaque symbols.
      </p>
      <div className="mb-6 space-y-1 text-neutral-700 dark:text-neutral-300">
        <p>
          You can find:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>
            my{' '}
            <a
              href="/portfolio"
              className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 dark:hover:decoration-neutral-200"
            >
              portfolio
            </a>{' '}
            of projects and write-ups,
          </li>
          <li>
            a{' '}
            <a
              href="/resume"
              className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 dark:hover:decoration-neutral-200"
            >
              resume
            </a>{' '}
            (plus a{' '}
            <a
              href="https://drive.google.com/file/d/1a9kViOt2HabN7lCwAyTR3SY0gpPMrlNk/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 dark:hover:decoration-neutral-200"
            >
              downloadable PDF
            </a>
            ),
          </li>
          <li>
            and my{' '}
            <a
              href="https://github.com/okwalerie"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 dark:hover:decoration-neutral-200"
            >
              GitHub
            </a>{' '}
            for code and experiments, plus{' '}
            <a
              href="https://x.com/okwalerie"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 dark:hover:decoration-neutral-200"
            >
              Twitter
            </a>{' '}
            for thoughts, work-in-progress, and links.
          </li>
        </ul>
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
