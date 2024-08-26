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
    name: 'Hustler 1',
    image: '/hustler-1',
    title: 'Hustler',
    description: 'sang hustler',
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
    name: 'Hustler 2',
    image: '/hustler-2',
    title: 'Hustler',
    description: 'sang hustler',
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
    name: 'Hipster 1',
    image: '/hipster-1',
    title: 'Hipster',
    description: 'sang hipster',
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
    name: 'Hipster 2',
    image: '/hipster-2',
    title: 'Hipster',
    description: 'sang hipster',
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
    name: 'Hipster 3',
    image: '/hipster-3',
    title: 'Hipster',
    description: 'sang hipster',
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
    name: 'hacker 1',
    image: '/hacker-1',
    title: 'Hacker',
    description: 'sang hacker',
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
    name: 'AL AUFAR',
    image: '/hacker-2',
    title: 'Hacker Terkuat Di Bumi',
    description: 'siapakah hacker terkuat di bumi? SAYA!',
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
