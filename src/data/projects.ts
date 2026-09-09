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
    name: 'Jegeg Underwear Backoffice',
    year: '2026',
    category: 'web',
    categoryLabel: 'E-Commerce',
    description:
      'Backoffice web app for an underwear retail brand. Multi-outlet sales dashboard, orders, delivery, returns, bundles, promos, loyalty members, and warehouse stock management — full-stack Next.js + NestJS, built as an office project at Logika Data.',
    tags: ['Next.js', 'NestJS'],
    image: '/images/jegeg-backoffice.webp',
  },
  {
    name: 'CMIS — Construction MIS',
    year: '2026',
    category: 'web',
    categoryLabel: 'ERP / MIS',
    description:
      'Construction Management Information System for contractors. Project tracking, RAB budgeting, purchase orders, invoices, cashflow, and financial reports with role-based access — full-stack Next.js + NestJS, built as an office project at Logika Data.',
    tags: ['Next.js', 'NestJS', 'MUI'],
    image: '/images/cmis.webp',
  },
  {
    name: 'PoS Pembangunan Web',
    year: '2026',
    category: 'web',
    categoryLabel: 'POS System',
    description:
      'Back-office POS web app for a building-materials store. Sales, purchasing, expenses, stock opname, master data, and financial reports with a KPI dashboard — full-stack Next.js + Express.js, built as an office project at Logika Data.',
    tags: ['Next.js', 'Express', 'MUI'],
    image: '/images/pos-pembangunan.webp',
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
    name: 'Waznet Webstore',
    year: '2025',
    category: 'web',
    categoryLabel: 'E-Commerce',
    description:
      'Webstore for the Waznet Minecraft server. Product catalog and checkout flow built with Next.js and TypeScript.',
    tags: ['Node.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
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
export const featuredProjects: Project[] = projects.slice(0, 3)
