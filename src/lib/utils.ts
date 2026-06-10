export interface Category {
  id: string;
  label: string;
  description: string;
  icon: string;
  color: string;
  count?: number;
}

export const CATEGORIES: Category[] = [
  {
    id: 'ji-apps',
    label: 'JI Apps',
    description: 'Custom software products and SaaS applications',
    icon: '⚡',
    color: 'indigo',
  },
  {
    id: 'web',
    label: 'Web',
    description: 'Websites and web applications',
    icon: '🌐',
    color: 'cyan',
  },
  {
    id: 'playstore',
    label: 'Play Store',
    description: 'Android applications',
    icon: '📱',
    color: 'emerald',
  },
  {
    id: 'exe',
    label: 'EXE',
    description: 'Desktop software applications',
    icon: '🖥️',
    color: 'orange',
  },
  {
    id: 'extensions',
    label: 'Extensions',
    description: 'Browser extensions and plugins',
    icon: '🧩',
    color: 'purple',
  },
];

export const CATEGORY_MAP = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));

export function getCategoryClass(category: string): string {
  const map: Record<string, string> = {
    'ji-apps': 'cat-ji-apps',
    web: 'cat-web',
    playstore: 'cat-playstore',
    exe: 'cat-exe',
    extensions: 'cat-extensions',
  };
  return map[category] ?? 'bg-gray-500/10 text-gray-400';
}

export function getStatusClass(status: string): string {
  const map: Record<string, string> = {
    live: 'status-live',
    beta: 'status-beta',
    development: 'status-development',
    archived: 'status-archived',
  };
  return map[status] ?? 'status-live';
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function estimateReadingTime(content: string): number {
  const wordsPerMinute = 230;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export const SITE_CONFIG = {
  name: 'JI App',
  tagline: 'Building Software, AI Tools & Digital Products',
  description:
    'JI App is the central hub for all software products, websites, mobile apps, desktop applications, browser extensions, and technical blogs created by JI.',
  url: 'https://jiapp.online',
  author: 'JI',
  email: 'utkarsh@jiapp.online',
  linkedin: 'https://linkedin.com/in/jiapp',
  youtube: 'https://youtube.com/@jiapp',
  twitter: 'https://twitter.com/jiapp',
};
