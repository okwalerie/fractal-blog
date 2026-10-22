export const metadata = {
  title: 'Portfolio',
  description: 'Selected projects by Valerie Kim',
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        Portfolio
      </h1>
      <p className="mb-4 text-neutral-700 dark:text-neutral-300">
        This space will collect more polished write-ups of my projects.
      </p>
      <p className="mb-2 text-neutral-700 dark:text-neutral-300">
        For now, you can explore:
      </p>
      <ul className="list-disc ml-5 space-y-1 text-neutral-700 dark:text-neutral-300">
        <li>
          <a
            href="/blog/printing-accessible-cards"
            className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 dark:hover:decoration-neutral-200"
          >
            Printing Accessible Playing Cards
          </a>{' '}
          – making Netrunner playable for low-vision players.
        </li>
        <li>
          <a
            href="https://house.valeriekim.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 dark:hover:decoration-neutral-200"
          >
            House of Bao
          </a>{' '}
          – a tiny toy world for experimenting with visible arithmetic.
        </li>
        <li>
          <a
            href="/blog/revolution-will-not-be-symbolized"
            className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 dark:hover:decoration-neutral-200"
          >
            The Revolution Will Not Be Symbolized
          </a>{' '}
          – on iconic arithmetic and self-evident numbers.
        </li>
        <li>
          <a
            href="https://math.valeriekim.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 dark:hover:decoration-neutral-200"
          >
            Math Prototype
          </a>{' '}
          – an earlier prototype exploring similar ideas in a more experimental form.
        </li>
      </ul>
    </section>
  )
}
