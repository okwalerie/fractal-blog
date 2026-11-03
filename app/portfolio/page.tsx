export const metadata = {
  title: 'Portfolio',
  description: 'Stateful AI agents, diagrammatic reasoning, playable arithmetic, and accessible playing cards by Valerie Kim.',
  alternates: { canonical: '/portfolio/' },
  openGraph: {
    title: 'Portfolio | Valerie Kim',
    description: 'Stateful AI agents, diagrammatic reasoning, playable arithmetic, and accessible playing cards.',
    url: '/portfolio/',
    images: ['/og.png'],
  },
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        Portfolio
      </h1>
      <p className="mb-8 text-neutral-700 dark:text-neutral-300">
        Tools, toys, and experiments. Some you can play with; some you can pull apart.
      </p>
      <div className="prose">
        <section id="rama" className="mb-10 scroll-mt-6">
          <h2>Rama &amp; Agent-o-rama</h2>
          <p>
            Exploring stateful agents and research tools with Rama and Agent-o-rama.
            My <a href="https://github.com/okwalerie/lof-research-lab">LoF Research Lab</a>
            {' '}repository brings together paper-ingestion code and notes on running the stack.
          </p>
          <p>
            Red Planet Labs&apos; <a href="https://github.com/redplanetlabs/agent-o-rama">Agent-o-rama</a>
            {' '}provides agent graphs,
            tracing, evaluation, and durable storage in Java or Clojure.
          </p>
        </section>
        <section id="distinction-bench" className="mb-10 scroll-mt-6">
          <h2>DistinctionBench</h2>
          <p>
            A Laws of Form toolkit for evaluating LLM reasoning. The expressions are tiny:
            adjacent marks <code>()()</code> become <code>()</code>, while a nested pair
            {' '}<code>(())</code> cancels to nothing. Can a model keep track when the brackets get noisy?
          </p>
          <p>
            <a href="https://github.com/okwalerie/distinction-bench">Explore the benchmark and examples</a>.
          </p>
        </section>
        <section id="house-of-bao" className="mb-10 scroll-mt-6">
          <h2>House of Bao</h2>
          <p>
            A playable puzzle prototype where numbers are containers you can move and transform.
            The idea: make arithmetic feel like something you can see and touch, rather than a
            pile of symbols you have to take on faith.
          </p>
          <a href="https://house.valeriekim.ca">
            <img src="/blog/opt/house-of-bao-1.webp" alt="Play House of Bao: a grid of visible quantities and containers" width="1862" height="1039" loading="lazy" className="h-auto w-full rounded-lg" />
          </a>
          <p>
            <a href="https://house.valeriekim.ca">Play House of Bao</a> ·{' '}
            <a href="https://github.com/okwalerie/house-of-bao">Code</a> ·{' '}
            <a href="/blog/revolution-will-not-be-symbolized">Why iconic arithmetic?</a>
          </p>
        </section>
        <section id="accessible-cards" className="mb-10 scroll-mt-6">
          <h2>Printing accessible playing cards</h2>
          <p>
            I wanted to play Netrunner with my legally blind girlfriend. I tested digital
            settings and oversized prints, ending up with cards around 89 × 123 mm: readable,
            but still shuffleable. The write-up includes settings, print sizes, and what worked for us.
          </p>
          <p><a href="/blog/printing-accessible-cards">Read the making-of and printing notes</a>.</p>
        </section>
        <section id="experiments" className="mb-10 scroll-mt-6">
          <h2>More experiments</h2>
          <ul>
            <li>
              <a href="https://github.com/okwalerie/rama-ai-learn">Rama backend harness</a>
              {' '}&mdash; my fork of Red Planet Labs&apos; harness for testing LLM-built backends
              against implementation challenges, including correctness and fault-tolerance checks.
            </li>
            <li>
              <a href="https://math.valeriekim.ca">Math prototype</a>
              {' '}&mdash; an earlier exploration of visible arithmetic. Rough edges included.
            </li>
          </ul>
        </section>
        <p>
          More <a href="/blog">writing</a>, or{' '}
          <a href="mailto:valerie.kim.dev@gmail.com">email me</a> to talk about a project.
        </p>
      </div>
    </section>
  )
}
