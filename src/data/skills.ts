/* Story parts for the Home "What I work with" paragraph.
   { skill } renders underlined, { text } renders plain.
   Keep every `allSkills` entry present here so the story stays complete. */
export type StoryPart = { text: string } | { skill: string }

export const skillStory: StoryPart[] = [
  { text: 'Every project of mine usually kicks off with a solid base with' },
  { skill: 'HTML5' },
  { text: ',' },
  { skill: 'EJS' },
  { text: ', and' },
  { skill: 'Tailwind CSS' },
  { text: 'laying down structure and styling that just looks good no matter the screen, phone or desktop, doesn\'t matter. From there, things start coming to life.' },
  { skill: 'JavaScript' },
  { text: 'and' },
  { skill: 'TypeScript' },
  { text: 'bring in the logic and keep things from breaking in weird ways, while' },
  { skill: 'React' },
  { text: ',' },
  { skill: 'Next.js' },
  { text: ',' },
  { skill: 'Nest.js' },
  { text: ', and' },
  { skill: 'Nuxt.js' },
  { text: 'take small interactions and turn them into full, working apps people can actually use. Behind the scenes,' },
  { skill: 'Node.js' },
  { text: ',' },
  { skill: 'Express' },
  { text: ', and' },
  { skill: 'Golang' },
  { text: 'power the services that keep everything running, with' },
  { skill: 'Prisma' },
  { text: 'handling the data so nothing gets lost or messy. And once everything\'s built,' },
  { skill: 'Git' },
  { text: 'keeps track of every change,' },
  { skill: 'Docker' },
  { text: 'packages it all up so it runs the same everywhere, and yeah, even' },
  { skill: 'Microsoft Office' },
  { text: 'shows up when it\'s time to turn the technical stuff into docs and spreadsheets clients will actually open and read.' },
]

/* Preview artwork per skill keyword for the HoverPreview component.
   Devicon logos via jsDelivr, EJS via Simple Icons, Microsoft Office
   via SVG Repo. Entries verified reachable. */
const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

export const skillPreviewImages: Record<string, string> = {
  HTML5: `${DEVICON}/html5/html5-original.svg`,
  EJS: 'https://cdn.simpleicons.org/ejs/1A1A1A',
  'Tailwind CSS': `${DEVICON}/tailwindcss/tailwindcss-original.svg`,
  JavaScript: `${DEVICON}/javascript/javascript-original.svg`,
  TypeScript: `${DEVICON}/typescript/typescript-original.svg`,
  React: `${DEVICON}/react/react-original.svg`,
  'Next.js': `${DEVICON}/nextjs/nextjs-original.svg`,
  'Nest.js': `${DEVICON}/nestjs/nestjs-original.svg`,
  'Nuxt.js': `${DEVICON}/nuxtjs/nuxtjs-original.svg`,
  'Node.js': `${DEVICON}/nodejs/nodejs-original.svg`,
  Express: `${DEVICON}/express/express-original.svg`,
  Golang: `${DEVICON}/go/go-original.svg`,
  Prisma: `${DEVICON}/prisma/prisma-original.svg`,
  Git: `${DEVICON}/git/git-original.svg`,
  Docker: `${DEVICON}/docker/docker-original.svg`,
  'Microsoft Office': 'https://www.svgrepo.com/show/303589/office-1-logo.svg',
}

export const allSkills: string[] = [
  'HTML5',
  'JavaScript',
  'Node.js',
  'Express',
  'Git',
  'EJS',
  'React',
  'Next.js',
  'Nest.js',
  'Nuxt.js',
  'TypeScript',
  'Tailwind CSS',
  'Prisma',
  'Docker',
  'Golang',
  'Microsoft Office'
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
