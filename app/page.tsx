'use client';

import { useEffect, useState } from 'react';
import siteJson from '../content/site.json';
import {
  isSiteLink,
  loc,
  readLang,
  writeLang,
  type Lang,
  type SiteContent,
  type SiteLink,
} from '../content/types';

const site = siteJson as SiteContent;
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

function ExternalLinks({ items, className, lang }: { items: SiteLink[]; className: string; lang: Lang }) {
  return (
    <ul className={className}>
      {items.map((item) => {
        const name = loc(item.name, lang);
        return (
          <li key={`${name}-${item.url}`}>
            <a href={item.url} target="_blank" rel="noreferrer noopener">
              <LinkGlyph name={name} icon={item.icon} />
              <span>{name}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function LanguageSwitch({ lang, onChange }: { lang: Lang; onChange: (lang: Lang) => void }) {
  return (
    <div className="lang-switch" role="group" aria-label={loc(site.ui.langAria, lang)}>
      <button type="button" className={lang === 'zh' ? 'is-active' : undefined} onClick={() => onChange('zh')}>
        中
      </button>
      <span className="lang-sep" aria-hidden="true">
        /
      </span>
      <button type="button" className={lang === 'en' ? 'is-active' : undefined} onClick={() => onChange('en')}>
        EN
      </button>
    </div>
  );
}

async function copyText(value: string) {
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    const field = document.createElement('textarea');
    field.value = value;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.left = '-9999px';
    document.body.appendChild(field);
    field.select();
    document.execCommand('copy');
    field.remove();
  }
}

function EmailButton({ address, lang }: { address: string; lang: Lang }) {
  const [notice, setNotice] = useState<string | null>(null);

  const onClick = () => {
    let leftPage = false;
    const markLeave = () => {
      leftPage = true;
    };
    window.addEventListener('blur', markLeave);
    window.addEventListener('pagehide', markLeave);

    window.setTimeout(() => {
      window.removeEventListener('blur', markLeave);
      window.removeEventListener('pagehide', markLeave);
      if (leftPage || document.hidden || !document.hasFocus()) return;
      void copyText(address).then(() => {
        setNotice(loc(site.ui.mailFallback, lang));
        window.setTimeout(() => setNotice(null), 2400);
      });
    }, 700);
  };

  return (
    <span className="email-wrap">
      <a className="email" href={`mailto:${address}`} onClick={onClick}>
        {address}
      </a>
      {notice ? <span className="email-notice">{notice}</span> : null}
    </span>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>('zh');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get('lang');
    const next = query === 'en' || query === 'zh' ? query : readLang();
    setLang(next);
    writeLang(next);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const switchLang = (next: Lang) => {
    setLang(next);
    writeLang(next);
  };

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <a className="skip" href="#work">
        {loc(site.ui.skip, lang)}
      </a>
      <header className={scrolled ? 'is-scrolled' : undefined}>
        <div className="nav-shell">
          <nav aria-label={loc(site.ui.navAria, lang)}>
            <a className="brand" href="#top">
              <Star className="brand-star" />
              <span className="wordmark">starrylight</span>
              <span className="zh">星光</span>
            </a>
            <div className="nav-links">
              <a href="#work">{loc(site.ui.navWork, lang)}</a>
              <a href="#links">{loc(site.ui.navLinks, lang)}</a>
              <LanguageSwitch lang={lang} onChange={switchLang} />
            </div>
          </nav>
        </div>
      </header>
      <main>
        <section className="hero" id="top">
          <div className="hero-light" aria-hidden="true">
            <span className="glow glow-cool" />
            <span className="glow glow-warm" />
            <span className="glow glow-core" />
            <span className="flare flare-x" />
            <span className="flare flare-y" />
            <Star className="spark" />
            <span className="dust d1" />
            <span className="dust d2" />
            <span className="dust d3" />
          </div>
          <p className="eyebrow">{loc(site.hero.eyebrow, lang)}</p>
          <h1>
            {loc(site.hero.line1, lang)}
            <span className="soft-break">{loc(site.hero.line2, lang)}</span>
            <span className="break">
              <em>{loc(site.hero.accent, lang)}</em>
            </span>
          </h1>
          <p className="intro">{loc(site.hero.intro, lang)}</p>
          <div className="hero-actions">
            <a className="button" href="#work">
              {loc(site.ui.seeWork, lang)} <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>
        <section className="work" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <h2 id="work-title">{loc(site.ui.workTitle, lang)}</h2>
          </div>
          <ul className="project-list">
            {site.projects.map((project) => (
              <li key={project.id}>
                <a
                  className={`project${project.style ? ` is-${project.style}` : ''}`}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="project-type">{loc(project.tag, lang)}</span>
                  <span className="project-copy">
                    <strong>{project.title}</strong>
                    <small>{loc(project.description, lang)}</small>
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
            <h2 id="links-title">{loc(site.ui.linksTitle, lang)}</h2>
          </div>
          <ExternalLinks items={profiles} className="profile-list" lang={lang} />
          {social.length > 0 ? (
            <div className="social-block">
              <p className="eyebrow">{loc(site.ui.social, lang)}</p>
              <ExternalLinks items={social} className="social-list" lang={lang} />
            </div>
          ) : null}
        </section>
      </main>
      <footer id="contact">
        <p>{loc(site.ui.footerNote, lang)}</p>
        <EmailButton address={site.email} lang={lang} />
        <span>© {new Date().getFullYear()} Starrylight · 星光</span>
      </footer>
    </>
  );
}
