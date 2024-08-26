import { Github, Linkedin, LucideProps, Twitter } from 'lucide-react'

export const navItems = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Values',
    href: '#values',
  },
  {
    name: 'Product',
    href: '#product',
  },
  {
    name: 'Team',
    href: '#team',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
]

export const members: Member[] = [
  {
    name: 'Meytia Putri Asima Marpaung',
    image: '/hustler-1',
    title: 'as Hustler',
    description: 'sang Hustler cantik dan menawan',
    socials: [
      {
        icon: Twitter,
        link: '#',
      },
      {
        icon: Linkedin,
        link: '#',
      },
      {
        icon: Github,
        link: '#',
      },
    ],
  },
  {
    name: 'Khafillah Savana Aldaffa',
    image: '/hustler-2',
    title: 'as Hustler',
    description: 'sang Hustler tampan dan rupawan',
    socials: [
      {
        icon: Twitter,
        link: '#',
      },
      {
        icon: Linkedin,
        link: '#',
      },
      {
        icon: Github,
        link: '#',
      },
    ],
  },
  {
    name: 'Nadhifa Almyrahanna',
    image: '/hipster-1',
    title: 'as Hipster',
    description: 'sang Hipster cantik dan menawan',
    socials: [
      {
        icon: Twitter,
        link: '#',
      },
      {
        icon: Linkedin,
        link: '#',
      },
      {
        icon: Github,
        link: '#',
      },
    ],
  },
  {
    name: 'Benita Ardi',
    image: '/hipster-2',
    title: 'as Hipster',
    description: 'sang Hipster cantik dan menawan',
    socials: [
      {
        icon: Twitter,
        link: '#',
      },
      {
        icon: Linkedin,
        link: '#',
      },
      {
        icon: Github,
        link: '#',
      },
    ],
  },
  {
    name: 'Yus Lina Adelia Putri',
    image: '/hipster-3',
    title: 'as Hipster',
    description: 'sang Hipster tampan dan rupawan',
    socials: [
      {
        icon: Twitter,
        link: '#',
      },
      {
        icon: Linkedin,
        link: '#',
      },
      {
        icon: Github,
        link: '#',
      },
    ],
  },
  {
    name: 'Muhammad Fadhilsyah Lubis',
    image: '/hacker-1',
    title: 'as Hacker',
    description: 'sang Hacker tampan dan rupawan',
    socials: [
      {
        icon: Twitter,
        link: '#',
      },
      {
        icon: Linkedin,
        link: '#',
      },
      {
        icon: Github,
        link: '#',
      },
    ],
  },
  {
    name: 'Arya Prima Al Aufar',
    image: '/hacker-2',
    title: 'as Hacker',
    description: 'sang Hacker tampan dan rupawan',
    socials: [
      {
        icon: Twitter,
        link: '#',
      },
      {
        icon: Linkedin,
        link: '#',
      },
      {
        icon: Github,
        link: '#',
      },
    ],
  },
]

export type Icon = React.ForwardRefExoticComponent<
  Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
>

export type Social = {
  icon: Icon
  link: string
}

export type Member = {
  name: string
  image: string
  title: string
  description: string
  socials: Social[]
}
