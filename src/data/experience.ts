/* Experience and certificates. Newest first. */

export interface Experience {
  role: string
  company: string
  companyHref?: string
  period: string
  location: string
  body: string
  tags: string[]
}

export const experience: Experience[] = [
  {
    role: 'FullStack Developer',
    company: 'Logika Data',
    companyHref: 'https://logikadata.co.id/',
    period: 'Dec 2025 - Present',
    location: 'Semarang, ID | Remote',
    body: 'Full-stack developer building PoS systems, backoffice dashboards, and business websites for SMEs with Next.js on the frontend and NestJS on the backend.',
    tags: ['Next.js', 'NestJS', 'PoS'],
  },
  {
    role: 'Freelance Website Developer',
    company: 'Raznar',
    companyHref: 'https://raznar.id/',
    period: 'Jul 2023 — Dec 2025',
    location: 'Tangerang, ID | Remote',
    body: 'Designing and shipping web apps, store backends, and Discord bots for game communities and small teams.',
    tags: ['Full-Stack', 'Bots', 'Stores'],
  },
  {
    role: 'Quality Assurance Intern',
    company: 'Nexa',
    companyHref: 'https://nexa.net.id/',
    period: 'Dec 2022 — Apr 2023',
    location: 'Semarang, ID | On Site',
    body: 'Work placement at an internet service provider. Tested releases and learned how production systems stay reliable.',
    tags: ['QA', 'Production'],
  },
]

export interface Certificate {
  name: string
  issuer: string
  year: string
  /* Path gambar di /public, mis. "/it-competition.webp".
     Tambah entry baru di bawah untuk menambah sertifikat. */
  image: string
}

export const certificates: Certificate[] = [
  {
    name: 'IT Competition — Web Development',
    issuer: 'Universitas Dian Nuswantoro',
    year: '2025',
    image: '/images/it-competition.webp',
  },
  {
    name: 'Quality Assurance Intern',
    issuer: 'PT. Internet Mulia Untuk Negeri (Nexa)',
    year: '2023',
    image: '/images/nexa-qualitycontrol.webp',
  },
]
