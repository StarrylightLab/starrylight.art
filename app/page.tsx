import site from '../content/site.json';
import { isSiteLink, type SiteLink, type SiteProject } from '../content/types';

const projects = site.projects as SiteProject[];
const profiles = site.profiles.filter(isSiteLink);
const social = site.social.filter(isSiteLink);

function Star({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 1.1 13.42 10.58 22.9 12 13.42 13.42 12 22.9 10.58 13.42 1.1 12 10.58 10.58Z" />
    </svg>
  );
}

function LinkGlyph({ name, icon }: { name: string; icon?: string }) {
  if (icon) {
    return <img src={icon} alt="" width={22} height={22} />;
  }
  return (
    <span className="link-fallback" aria-hidden="true">
      {name.slice(0, 1)}
    </span>
  );
}

function ExternalLinks({ items, className }: { items: SiteLink[]; className: string }) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={`${item.name}-${item.url}`}>
          <a href={item.url} target="_blank" rel="noreferrer">
            <LinkGlyph name={item.name} icon={item.icon} />
            <span>{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <a className="skip" href="#work">
        跳到作品
      </a>
      <header>
        <nav aria-label="主导航">
          <a className="brand" href="#top">
            <Star className="brand-star" />
            <span className="wordmark">starrylight</span>
            <span className="zh">星光</span>
          </a>
          <div className="nav-links">
            <a href="#work">作品</a>
            <a href="#links">链接</a>
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
          <p className="eyebrow">{site.hero.eyebrow}</p>
          <h1>
            {site.hero.line1}
            <span className="soft-break">{site.hero.line2}</span>
            <span className="break">
              <em>{site.hero.accent}</em>
            </span>
          </h1>
          <p className="intro">{site.hero.intro}</p>
          <div className="hero-actions">
            <a className="button" href="#work">
              看看作品 <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>
        <section className="work" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title">正在做的东西</h2>
          </div>
          <ul className="project-list">
            {projects.map((project) => (
              <li key={project.id}>
                <a
                  className={`project${project.style ? ` is-${project.style}` : ''}`}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="project-type">{project.tag}</span>
                  <span className="project-copy">
                    <strong>{project.title}</strong>
                    <small>{project.description}</small>
                  </span>
                  <span className="arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section className="elsewhere" id="links" aria-labelledby="links-title">
          <div className="section-heading">
            <p className="eyebrow">Elsewhere</p>
            <h2 id="links-title">个人链接</h2>
          </div>
          <ExternalLinks items={profiles} className="profile-list" />
          {social.length > 0 ? (
            <div className="social-block">
              <p className="eyebrow">社交</p>
              <ExternalLinks items={social} className="social-list" />
            </div>
          ) : null}
        </section>
      </main>
      <footer id="contact">
        <p>欢迎一起做点有意思的东西。</p>
        <a href="mailto:hello@starrylight.art">hello@starrylight.art</a>
        <span>© {new Date().getFullYear()} Starrylight · 星光</span>
      </footer>
    </>
  );
}
