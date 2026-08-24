const projects = [
  ['01', 'Pixler', 'A precise, playful image tool for working with pixels.'],
  ['02', 'Experiments', 'Small studies in interfaces, type, and creative code.'],
  ['03', 'Notes', 'Fragments, references, and things worth returning to.'],
];

export default function Home() {
  return (
    <main>
      <nav aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Starrylight home">starrylight</a>
        <a href="#work">Selected work</a>
      </nav>
      <section className="hero" id="top">
        <p className="eyebrow">Independent practice · China</p>
        <h1>Making quiet digital<br />things with a little light.</h1>
        <p className="intro">Starrylight is the personal home of an independent designer and maker. I work across visual identity, interfaces, and experiments on the web.</p>
        <a className="button" href="#work">See selected work <span aria-hidden="true">↓</span></a>
      </section>
      <section className="work" id="work" aria-labelledby="work-title">
        <div className="section-heading"><p className="eyebrow">Selected work</p><h2 id="work-title">A few places to begin.</h2></div>
        <div className="project-list">
          {projects.map(([number, title, description]) => (
            <a className="project" href="#contact" key={title}>
              <span className="number">{number}</span><span><strong>{title}</strong><small>{description}</small></span><span className="arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>
      <footer id="contact"><p>Available for considered collaborations.</p><a href="mailto:hello@starrylight.art">hello@starrylight.art</a><span>© {new Date().getFullYear()} Starrylight</span></footer>
    </main>
  );
}
