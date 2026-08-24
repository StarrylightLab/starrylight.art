export type Lang = 'zh' | 'en';

export type Localized<T = string> = T | { zh: T; en: T };

export type SiteLink = {
  name: Localized;
  url: string;
  icon?: string;
};

export type SiteProject = {
  id: string;
  title: string;
  description: Localized;
  href: string;
  tag: Localized;
  style?: string;
};

export type SiteCopy = {
  skip: Localized;
  navAria: Localized;
  navWork: Localized;
  navLinks: Localized;
  langAria: Localized;
  seeWork: Localized;
  workTitle: Localized;
  linksTitle: Localized;
  social: Localized;
  footerNote: Localized;
  copyEmail: Localized;
  copied: Localized;
  mailFallback: Localized;
};

export type SiteContent = {
  email: string;
  ui: SiteCopy;
  hero: {
    eyebrow: Localized;
    line1: Localized;
    line2: Localized;
    accent: Localized;
    intro: Localized;
  };
  projects: SiteProject[];
  profiles: SiteLink[];
  social: SiteLink[];
};

export function loc(value: Localized, lang: Lang): string {
  if (typeof value === 'string') return value;
  return value[lang];
}

export function isSiteLink(value: unknown): value is SiteLink {
  if (!value || typeof value !== 'object') return false;
  const item = value as { name?: unknown; url?: unknown; icon?: unknown };
  const hasName =
    typeof item.name === 'string'
      ? item.name.trim().length > 0
      : !!item.name &&
        typeof item.name === 'object' &&
        typeof (item.name as { zh?: unknown }).zh === 'string' &&
        typeof (item.name as { en?: unknown }).en === 'string';
  return (
    hasName &&
    typeof item.url === 'string' &&
    item.url.trim().length > 0 &&
    (item.icon === undefined || typeof item.icon === 'string')
  );
}

const STORAGE_KEY = 'starrylight-lang';

export function readLang(): Lang {
  if (typeof window === 'undefined') return 'zh';
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'zh') return stored;
  } catch {
    /* ignore */
  }
  return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

export function writeLang(lang: Lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.documentElement.dataset.lang = lang;
}
