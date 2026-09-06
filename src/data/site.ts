/* Site-wide profile, contact, and navigation.
   Edit this file to update name, roles, links, and stats. */

import { allSkills } from './skills'
import { projects } from './projects'

export const site = {
  name: 'Fajar Aziz Kurniawan',
  shortName: 'Jariz',
  brand: 'JARIZ',
  roles: ['Website Developer', 'Full-Stack Developer', 'Freelancer'],
  location: 'Indonesia',
  portrait: '/images/portrait-front.webp',
  portraitAlt: 'Portrait of Fajar Aziz Kurniawan',
  portraitBackdrop: '/images/portrait-backdrop.webp',
  email: 'jrzfjr5@gmail.com',
  cv: '/docs/CV_FAJAR_AZIZ_KURNIAWAN.pdf',
  cvFilename: 'CV_Fajar_Aziz_Kurniawan.pdf',
  availability: 'Available for Work',
  socials: [
    { label: 'GitHub', href: 'https://github.com/J-yriz' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jariz' },
  ],
  nav: [
    { label: 'Work', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'About', to: '/about' },
  ],
  stats: [
    { value: '3+', label: 'Years Experience' },
    { value: String(projects.length), label: 'Projects Shipped' },
    { value: String(allSkills.length), label: 'Core Technologies' },
  ],
} as const

export function mailtoHref(subject = "Project inquiry"): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`
}
