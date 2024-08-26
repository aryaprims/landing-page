import { Cpu, Settings, SquarePen, Zap, Medal } from 'lucide-react'

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
            <p>Fitur Absensi, Kehadiran, serta Reminder Absensi</p>
          </div>
          <div className='py-12 bg-slate-300 lg:col-span-2 flex flex-col items-center justify-center gap-4 rounded-xl'>
            <Zap className='w-16 h-16' />
            <h5 className='text-xl'>Fast Deployment</h5>
            <p>Desc</p>
          </div>
          <div className='py-12 bg-slate-300 lg:col-span-3 flex flex-col items-center justify-center gap-4 rounded-xl'>
            <Cpu className='w-16 h-16' />
            <h5 className='text-xl'>Smart Technology</h5>
            <p>Desc</p>
          </div>
          <div className='py-12 bg-slate-300 lg:col-span-3 flex flex-col items-center justify-center gap-4 rounded-xl'>
            <Settings className='w-16 h-16' />
            <h5 className='text-xl'>Free Maintenance</h5>
            <p>Desc</p>
          </div>
        </div>
      </div>
    </section>
  )
}
