import { Waypoints, Gem, SquarePen, Handshake, Medal } from 'lucide-react'

export default function Values() {
  return (
    <section id='values' className='py-32'>
      <div className='container flex flex-col gap-6'>
        <h2 className='text-4xl text-center font-semibold'>Our Values</h2>
        <div className='lg:w-3/4 lg:mx-auto grid grid-cols-1 lg:grid-cols-6 gap-6'>
          <div className='py-12 bg-slate-300 lg:col-span-2 flex flex-col items-center justify-center gap-4 rounded-xl'>
            <Medal className='w-16 h-16' />
            <h5 className='text-xl'>Leaderboard</h5>
            <p>Fitur Ranking Siswa Terbaik</p>
          </div>
          <div className='py-12 bg-slate-300 lg:col-span-2 flex flex-col items-center justify-center gap-4 rounded-xl'>
            <SquarePen className='w-16 h-16' />
            <h5 className='text-xl'>Absensi</h5>
            <p className='text-center'>Fitur Absensi & Kehadiran disertai dengan Reminder</p>
          </div>
          <div className='py-12 bg-slate-300 lg:col-span-2 flex flex-col items-center justify-center gap-4 rounded-xl'>
            <Handshake className='w-16 h-16' />
            <h5 className='text-xl'>Easy to Use</h5>
            <p className='text-center'>Mudah digunakan serta terdapat Video Tutorial</p>
          </div>
          <div className='py-12 bg-slate-300 lg:col-span-3 flex flex-col items-center justify-center gap-4 rounded-xl'>
            <Waypoints className='w-16 h-16' />
            <h5 className='text-xl'>Integrated System</h5>
            <p className='text-center'>Sistem terintegrasi dengan Guru, Murid, dan Orang tua</p>
          </div>
          <div className='py-12 bg-slate-300 lg:col-span-3 flex flex-col items-center justify-center gap-4 rounded-xl'>
            <Gem className='w-16 h-16' />
            <h5 className='text-xl'>Fitur Andalan</h5>
            <p className='text-center'>Kelas, Absensi, Tugas</p>
          </div>
        </div>
      </div>
    </section>
  )
}
