import { members, Social } from './constants'

export default function Team() {
  return (
    <section id='team' className='py-32'>
      <div className='container flex flex-col gap-6'>
        <h2 className='text-4xl text-center font-semibold'>Our Values</h2>
        <div className='lg:w-3/4 lg:mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6'>
          {members.map((member, index) => (
            <div
              key={index}
              className={`${
                [4, 5, 6].includes(index) ? 'lg:col-span-4' : 'lg:col-span-3'
              } bg-slate-300 p-4 flex flex-col gap-4 items-center justify-center text-center rounded-xl`}
            >
              <div className='overflow-hidden rounded-full w-24 h-24'>
                <img
                  src={`${member.image}.webp`}
                  alt='Team Member 1'
                  className='w-24 object-cover'
                />
              </div>
              <h5>{member.name}</h5>
              <p>{member.title}</p>
              <p>{member.description}</p>
              <div className='flex items-center justify-center'>
                {member.socials.map((social: Social, index: number) => (
                  <a href={social.link} className=' me-3' key={index}>
                    <social.icon className='w-6 h-6' />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
