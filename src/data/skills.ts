/* Story parts for the Home "What I work with" paragraph.
   { skill } renders underlined, { text } renders plain.
   Keep every `allSkills` entry present here so the story stays complete. */
export type StoryPart = { text: string } | { skill: string }

export const skillStory: StoryPart[] = [
  { text: 'Every project of mine usually kicks off with a solid base with' },
  { skill: 'HTML5' },
  { text: 'and' },
  { skill: 'Tailwind CSS' },
  { text: "laying down structure and styling that just looks good no matter the screen, phone or desktop, doesn't matter. From there, things start coming to life." },
  { skill: 'JavaScript' },
  { text: 'and' },
  { skill: 'TypeScript' },
  { text: 'bring in the logic and keep things from breaking in weird ways, while' },
  { skill: 'React' },
  { text: ',' },
  { skill: 'Next.js' },
  { text: ',' },
  { skill: 'NestJS' },
  { text: ', and' },
  { skill: 'Nuxt.js' },
  { text: 'take small interactions and turn them into full, working apps people can actually use. Behind the scenes,' },
  { skill: 'Golang' },
  { text: 'with' },
  { skill: 'Gin' },
  { text: 'and' },
  { skill: 'GORM' },
  { text: 'power scalable services, while' },
  { skill: 'Node.js' },
  { text: 'and' },
  { skill: 'Express' },
  { text: 'work alongside' },
  { skill: 'Prisma' },
  { text: 'to handle relational databases like' },
  { skill: 'PostgreSQL' },
  { text: ',' },
  { skill: 'MariaDB' },
  { text: ', and' },
  { skill: 'MySQL' },
  { text: "so data stays clean, fast, and structured. And once everything's built," },
  { skill: 'Git' },
  { text: 'keeps track of every change while' },
  { skill: 'Docker' },
  { text: 'packages it all up so it runs smoothly everywhere.' },
]

/* Preview artwork per skill keyword for the HoverPreview component.
   Devicon logos via jsDelivr. */
const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

export const skillPreviewImages: Record<string, string> = {
  HTML5: `${DEVICON}/html5/html5-original.svg`,
  'Tailwind CSS': `${DEVICON}/tailwindcss/tailwindcss-original.svg`,
  JavaScript: `${DEVICON}/javascript/javascript-original.svg`,
  TypeScript: `${DEVICON}/typescript/typescript-original.svg`,
  React: `${DEVICON}/react/react-original.svg`,
  'Next.js': `${DEVICON}/nextjs/nextjs-original.svg`,
  NestJS: `${DEVICON}/nestjs/nestjs-original.svg`,
  'Nuxt.js': `${DEVICON}/nuxtjs/nuxtjs-original.svg`,
  Golang: `${DEVICON}/go/go-original.svg`,
  Gin: 'https://gin-gonic.com/_astro/gin.D6H2T_2v_hOrNd.webp',
  GORM: 'https://gorm.io/gorm.svg',
  'Node.js': `${DEVICON}/nodejs/nodejs-original.svg`,
  Express: `${DEVICON}/express/express-original.svg`,
  Prisma: `${DEVICON}/prisma/prisma-original.svg`,
  Git: `${DEVICON}/git/git-original.svg`,
  Docker: `${DEVICON}/docker/docker-original.svg`,
  PostgreSQL: `${DEVICON}/postgresql/postgresql-original.svg`,
  MariaDB: `${DEVICON}/mariadb/mariadb-original.svg`,
  MySQL: `${DEVICON}/mysql/mysql-original.svg`,
}

export const allSkills: string[] = [
  'HTML5',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'Express',
  'NestJS',
  'Next.js',
  'Nuxt.js',
  'React',
  'Tailwind CSS',
  'Prisma',
  'Golang',
  'Gin',
  'GORM',
  'Docker',
  'Git',
  'PostgreSQL',
  'MariaDB',
  'MySQL',
]

export const capabilities: { title: string; body: string }[] = [
  {
    title: 'Full-Stack Web Apps',
    body: 'TypeScript from database to UI. Next.js frontends backed by Express or NestJS APIs, designed to stay maintainable after handover.',
  },
  {
    title: 'APIs & Data Modeling',
    body: 'REST endpoints with Prisma and MySQL. Schemas planned up front so features do not turn into migrations later.',
  },
  {
    title: 'Bots & Automation',
    body: 'Discord bots that do real work: invoices, music, server stores. Built with Discord.js and deployed with Docker.',
  },
  {
    title: 'Stores & Payments',
    body: 'Game-server webstores with product catalogs and checkout flows, built for small teams that need to get paid.',
  },
]
