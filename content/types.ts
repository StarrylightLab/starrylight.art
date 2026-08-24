export type SiteLink = {
  name: string;
  url: string;
  icon?: string;
};

export type SiteProject = {
  id: string;
  title: string;
  description: string;
  href: string;
  tag: string;
  style?: 'pixel' | 'plugin' | string;
};

export type SiteContent = {
  hero: {
    eyebrow: string;
    line1: string;
    line2: string;
    accent: string;
    intro: string;
  };
  projects: SiteProject[];
  profiles: SiteLink[];
  social: SiteLink[];
};

export function isSiteLink(value: unknown): value is SiteLink {
  if (!value || typeof value !== 'object') return false;
  const item = value as { name?: unknown; url?: unknown; icon?: unknown };
  return (
    typeof item.name === 'string' &&
    item.name.trim().length > 0 &&
    typeof item.url === 'string' &&
    item.url.trim().length > 0 &&
    (item.icon === undefined || typeof item.icon === 'string')
  );
}
