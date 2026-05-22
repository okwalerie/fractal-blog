export const metadata = {
  title: "Resume",
  description: "Resume for Valerie Kim",
};

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">Resume</h1>
      <p className="text-neutral-700 dark:text-neutral-300">
        I&apos;m a software developer and educator with a background in Computer
        Science and Communications. I like building tools and games that make
        complex systems feel obvious &mdash; especially around accessibility,
        math, and how people actually think.
      </p>
      <h2 className="mt-6 mb-2 text-lg font-semibold tracking-tight">
        Highlights
      </h2>
      <ul className="mb-4 ml-5 space-y-1 list-disc text-neutral-700 dark:text-neutral-300">
        <li>
          Technology lead at Huggabowl, a food-security non-profit, where I
          deployed an ERP-style system to coordinate volunteers, payments, and
          operations for 10k+ meals.
        </li>
        <li>
          Software developer co-op at Environment and Climate Change Canada,
          building and maintaining Power Platform and Dynamics 365 modules used
          by 100+ staff.
        </li>
        <li>
          Former franchise owner of a kids&apos; game-dev academy, teaching over
          100 students Python and Unity and running multi-day camps and
          workshops.
        </li>
        <li>
          Current focus on &quot;iconic arithmetic&quot;: projects like House of
          Bao, accessible Netrunner prints, and tools that turn abstract math
          into visible, self-evident structures.
        </li>
      </ul>
      <div className="mb-6">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center py-1.5 px-3 text-sm font-medium rounded-md border border-neutral-300 text-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-800 hover:bg-neutral-100"
        >
          View full resume (PDF)
        </a>
      </div>
      <p className="text-neutral-700 dark:text-neutral-300">
        I&apos;m still polishing a more detailed public-facing CV. In the
        meantime, you can get a good sense of my work from my{" "}
        <a
          href="/blog"
          className="underline underline-offset-4 decoration-neutral-400 dark:hover:decoration-neutral-200 hover:decoration-neutral-800"
        >
          blog
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/okwalerie"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 decoration-neutral-400 dark:hover:decoration-neutral-200 hover:decoration-neutral-800"
        >
          GitHub profile
        </a>
        .
      </p>
    </section>
  );
}
