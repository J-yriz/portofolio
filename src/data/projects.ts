/* Projects data — the single source of truth for Home and Projects pages.
   To add a project: append an entry (newest first).
   Home "Selected works" always shows the first 3 entries automatically.
   `image`: optional path under /public/images (e.g. "/images/shop.webp").
   Leave empty to render a monogram tile instead.
   `category` drives the filter on the Projects page. */

export type ProjectCategory = 'web' | 'opensource'

export const projectCategories: { value: ProjectCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'web', label: 'Web Apps' },
  { value: 'opensource', label: 'Open Source' },
]

export interface Project {
  name: string
  year: string
  category: ProjectCategory
  categoryLabel: string
  description: string
  tags: string[]
  website?: string
  github?: string
  image?: string
}

export const projects: Project[] = [
  {
    name: 'CMIS — Construction MIS',
    year: '2026',
    category: 'web',
    categoryLabel: 'ERP / MIS',
    description:
      'Construction Management Information System for contractors. Project tracking, RAB budgeting, purchase orders, invoices, and cashflow with role-based access control and comprehensive financial reporting.',
    tags: ['TypeScript', 'Next.js', 'NestJS', 'PostgreSQL'],
    image: '/images/cmis.webp',
  },
  {
    name: 'Jegeg Underwear Backoffice',
    year: '2026',
    category: 'web',
    categoryLabel: 'E-Commerce',
    description:
      'Backoffice web app for an underwear retail brand. Multi-outlet sales dashboard, orders, delivery, returns, bundles, promos, loyalty members, and warehouse stock management.',
    tags: ['Next.js', 'NestJS'],
    image: '/images/jegeg-backoffice.webp',
  },
  {
    name: 'PRD Creator',
    year: '2026',
    category: 'opensource',
    categoryLabel: 'AI Agent',
    description:
      'An opencode agent that turns your idea into an execution-ready PRD and task breakdown — structured popup Q&A, consistent document structure, and an automatic execution prompt.',
    tags: ['OpenCode', 'AI Agent', 'Markdown', 'PRD'],
    github: 'https://github.com/J-yriz/prd-creator',
  },
  {
    name: 'PoS Pembangunan Web',
    year: '2025',
    category: 'web',
    categoryLabel: 'POS System',
    description:
      'Full-stack back-office POS web app for a building-materials store. Sales, purchasing, expenses, stock opname, master data, and KPI dashboard with financial reporting.',
    tags: ['TypeScript', 'Next.js', 'Express.js', 'MariaDB'],
    image: '/images/pos-pembangunan.webp',
  },
  {
    name: 'Marketplace Item In-Game',
    year: '2025',
    category: 'web',
    categoryLabel: 'E-Commerce',
    description:
      'Marketplace web application for Minecraft server featuring payment gateway integration, administrative management panel, and synchronized player data.',
    tags: ['TypeScript', 'Next.js', 'Golang', 'MariaDB'],
    website: 'https://store.minesive.com/',
    image: '/images/waznet-webstore.webp',
  },
  {
    name: 'Nezon Portfolio',
    year: '2023',
    category: 'web',
    categoryLabel: 'Portfolio',
    description:
      'Portfolio website built for Nezon. Next.js with TypeScript and Tailwind CSS.',
    tags: ['Node.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    website: 'https://nezon-porto.vercel.app/',
    github: 'https://github.com/J-yriz/nezon-porto',
    image: '/images/nezon-portfolio.webp',
  },
  {
    name: 'Spotify Clone',
    year: '2023',
    category: 'web',
    categoryLabel: 'Clone',
    description:
      'Clone of the Spotify web player for learning. Next.js frontend with an Express backend.',
    tags: ['Node.js', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Express'],
    github: 'https://github.com/J-yriz/spotifyclone-nextjs',
  },
]

/* Home shows the newest 3 automatically — keep this array newest-first. */
export const featuredProjects: Project[] = [...projects]
  .sort((a, b) => Number(b.year) - Number(a.year))
  .slice(0, 3)
