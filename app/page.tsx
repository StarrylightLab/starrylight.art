const work = [
  {
    number: '01',
    title: 'Pixler',
    description: 'A precise, playful tool for working with pixels.',
    href: 'https://pixler.starrylight.art',
    status: 'Live',
  },
  {
    number: '02',
    title: 'Experiments',
    description: 'Small studies in interfaces, type, and creative code.',
    status: 'Studio',
  },
  {
    number: '03',
    title: 'Notes',
    description: 'Fragments, references, and things worth returning to.',
    status: 'Soon',
  },
] as const;

function Star({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 1.1 13.42 10.58 22.9 12 13.42 13.42 12 22.9 10.58 13.42 1.1 12 10.58 10.58Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <a className="skip" href="#work">
        Skip to selected work
      </a>
      <header>
        <nav aria-label="Primary">
          <a className="brand" href="#top">
            <Star className="brand-star" />
            <span className="wordmark">starrylight</span>
            <span className="zh">星光</span>
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>
      <main>
        <section className="hero" id="top">
          <div className="hero-light" aria-hidden="true">
            <span className="glow" />
            <span className="flare flare-x" />
            <span className="flare flare-y" />
            <Star className="spark" />
          </div>
          <p className="eyebrow">Independent practice · China</p>
          <h1>
            Making quiet <span className="soft-break">digital things</span>
            <span className="break">
              with <em>a little light.</em>
            </span>
          </h1>
          <p className="intro">
            Starrylight is the personal home of an independent designer and maker. I work across visual
            identity, interfaces, and experiments on the web.
          </p>
          <div className="hero-actions">
            <a className="button" href="#work">
              See selected work <span aria-hidden="true">↓</span>
            </a>
            <p className="now">Currently making Pixler.</p>
          </div>
        </section>
        <section className="work" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title">A few places to begin.</h2>
          </div>
          <ul className="project-list">
            {work.map((project) => {
              const inner = (
                <>
                  <span className="number">{project.number}</span>
                  <span className="project-copy">
                    <strong>{project.title}</strong>
                    <small>{project.description}</small>
                  </span>
                  <span className="project-meta">
                    <span className="status">{project.status}</span>
                    {'href' in project ? (
                      <span className="arrow" aria-hidden="true">
                        ↗
                      </span>
                    ) : null}
                  </span>
                </>
              );

              return (
                <li key={project.title}>
                  {'href' in project ? (
                    <a
                      className="project"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="project is-static">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      </main>
      <footer id="contact">
        <p>Available for considered collaborations.</p>
        <a href="mailto:hello@starrylight.art">hello@starrylight.art</a>
        <span>© {new Date().getFullYear()} Starrylight · 星光</span>
      </footer>
    </>
  );
}
