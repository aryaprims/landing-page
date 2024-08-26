export default function Hero() {
  return (
    <section id='home' className='py-32 bg-slate-200 mt-20'>
      <div className='container'>
        <div className='lg:w-3/4 lg:mx-auto flex flex-col lg:flex-row items-center justify-between'>
          <div className='w-full lg:w-1/2 flex flex-col gap-5'>
            <h1 className='text-6xl font-bold'>Welcome to PijarSekolah</h1>
            <p className='text-2xl'>
              Digitalisasi, Edukasi, Berprestasi!
            </p>
            <a
              href='#values'
              className='py-4 px-8 bg-teal-500 text-white rounded-xl w-fit'
            >
              Explore Features
            </a>
          </div>
          <img src='/pijarlogo.png' className='w-96' alt='' />
        </div>
      </div>
    </section>
  )
}
