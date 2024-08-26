import { MailIcon, MapPin, PhoneIcon } from 'lucide-react'
import { navItems } from './constants'

export default function Footer() {
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
    <footer className='bg-slate-400 text-white py-5'>
      <div className='container lg:w-3/4 lg:mx-auto '>
        <div className='flex flex-col lg:flex-row items-start justify-between pb-10 gap-10'>
          <div className='flex flex-col items-start gap-3'>
            <a
              className='font-bold text-4xl hover:text-teal-400 transition-colors duration-200'
              href='#'
              onClick={smoothScroll}
            >
              Landing Page
            </a>
            <p className='flex items-center gap-2'>
              <MailIcon className='w-5 h-5' /> email@example.com
            </p>
            <p className='flex items-center gap-2'>
              <PhoneIcon className='w-5 h-5' /> +123 456 7890
            </p>
            <p className='flex items-center gap-2'>
              <MapPin className='w-5 h-5' /> 123 Main St, City, Country
            </p>
          </div>

          <ul
            className='flex flex-row flex-wrap items-center justify-start lg:justify-between gap-8'
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
        <hr className='bg-secondary' />
        <div className='d-flex justify-content-between'>
          <p>&copy; 2024 Dark Landing Page. All Rights Reserved.</p>
          <div>
            <a href='#' className='text-white me-3'>
              <i className='bi bi-twitter'></i>
            </a>
            <a href='#' className='text-white me-3'>
              <i className='bi bi-linkedin'></i>
            </a>
            <a href='#' className='text-white'>
              <i className='bi bi-github'></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
