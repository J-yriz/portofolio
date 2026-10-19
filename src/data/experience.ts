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
    role: 'Full Stack Developer',
    company: 'Logika Data',
    companyHref: 'https://logikadata.co.id/',
    period: 'Dec 2025 — Oct 2026',
    location: 'Semarang, ID | Remote',
    body: 'Developed and maintained full-stack web applications for SMEs using Next.js and NestJS, designed relational databases with MariaDB and PostgreSQL, and built PoS and backoffice systems.',
    tags: ['Next.js', 'NestJS', 'PostgreSQL', 'MariaDB'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Raznar',
    companyHref: 'https://raznar.id/',
    period: 'Jul 2023 — Dec 2025',
    location: 'Tangerang Selatan, ID | Remote Freelance',
    body: 'Integrated third-party payment gateways (Midtrans/Xendit) to facilitate secure transactions, and built buying and selling web applications with Next.js and Golang using Tripay.',
    tags: ['Next.js', 'Golang', 'Payment Gateway', 'MySQL'],
  },
  {
    role: 'Quality Assurance Intern',
    company: 'GMEDIA',
    companyHref: 'https://gmedia.net.id/',
    period: 'Dec 2022 — Apr 2023',
    location: 'Semarang, ID | On Site',
    body: 'Conducted rigorous functional and manual testing on web applications to ensure quality software delivery, zero-bug deployment, and clear defect reporting.',
    tags: ['QA', 'Manual Testing', 'Functional Testing'],
  },
]

export interface Education {
  degree: string
  institution: string
  institutionHref?: string
  period: string
  location: string
  body: string
  tags: string[]
}

export const education: Education[] = [
  {
    degree: 'S1 Computer Science',
    institution: 'Universitas Dian Nuswantoro',
    institutionHref: 'https://dinus.ac.id/',
    period: 'Sep 2024 — Present',
    location: 'Semarang, ID',
    body: 'Undergraduate computer science program focusing on software engineering, web application development, algorithms, and database systems.',
    tags: ['Web Programming', 'Algorithms', 'Database Systems'],
  },
  {
    degree: 'Software Engineering (RPL)',
    institution: 'SMK Ibu Kartini',
    period: 'Jul 2021 — Jun 2024',
    location: 'Semarang, ID',
    body: 'Vocational high school education focused on software engineering fundamentals, web development, and design systems.',
    tags: ['Software Engineering', 'Web Development', 'Design System'],
  },
]

export interface Organization {
  role: string
  organization: string
  organizationHref?: string
  period: string
  location: string
  body: string
  tags: string[]
}

export const organizations: Organization[] = [
  {
    role: 'Project Manager',
    organization: 'Dinus Open Source Community (DOSCOM)',
    organizationHref: 'https://github.com/doscom',
    period: 'Nov 2024 — Present',
    location: 'Semarang, ID',
    body: 'Leading project execution, coordinating cross-functional teams, and driving engineering deliverables. Progressed from Member of Programmer Division (Nov 2024 – Nov 2025) to Back End Developer (Nov 2025 – Jun 2026), and promoted to Project Manager.',
    tags: ['Project Management', 'Back End Developer', 'Programmer Division', 'Open Source'],
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
