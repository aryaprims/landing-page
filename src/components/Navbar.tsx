import { useState } from 'react'

import { SquareMenu } from 'lucide-react'
import { navItems } from './constants'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const smoothScroll = (event: React.SyntheticEvent) => {
    event.preventDefault()
    const target = event.target as HTMLAnchorElement
    const id = target.getAttribute('href')?.replace('#', '')
    const element = document.getElementById(String(id))

    if (element == null) {
      window.scroll({
        top: 0,
        behavior: 'smooth',
      })
    } else {
      element?.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className='py-7 w-full fixed top-0  z-50 bg-slate-400 text-white'>
      <div className='container lg:w-3/4 lg:mx-auto  flex items-center justify-between'>
        <a
          className='font-bold text-4xl hover:text-teal-400 transition-colors duration-200'
          href='#'
          onClick={smoothScroll}
        >
          Landing Page
        </a>
        <button
          type='button'
          className='lg:hidden'
          onClick={() => setIsOpen(!isOpen)}
        >
          <SquareMenu className='w-6 h-6' />
        </button>
        <ul
          className={`${
            isOpen ? 'flex' : 'hidden'
          } lg:flex items-center justify-between gap-8 flex-col lg:flex-row fixed lg:relative top-0 -z-50 lg:z-0 bg-slate-400 text-white inset-x-0 py-10 lg:py-0 mt-20 lg:mt-0`}
          onClick={smoothScroll}
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className='text-xl hover:text-teal-400 transition-colors duration-200'
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
