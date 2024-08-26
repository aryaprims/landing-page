export default function About() {
  return (
    <section id='about' className='py-32'>
      <div className='container flex flex-col gap-6'>
        <h2 className='text-4xl text-center font-semibold'>About Us</h2>
        <div className='lg:w-3/4 lg:mx-auto flex flex-col gap-4 lg:flex-row items-center justify-around'>
          <div className='lg:w-1/3'>
            <img src='/web-illustrator-3.png' className='w-96' alt='' />
          </div>
          <div className='lg:w-1/2 text-center'>
            <p>
            Pijar Sekolah adalah sebuah platform pembelajaran digital terpadu yang 
            mendukung pihak sekolah dalam menciptakan pembelajaran digital yang seru dan menyenangkan.
            </p>
          </div>
        </div>
        <div className='lg:w-3/4 lg:mx-auto flex flex-col-reverse gap-4 lg:flex-row items-center justify-around'>
          <div className='lg:w-1/2 text-center'>
            <p>
            Pijar Sekolah memiliki ribuan konten digital yang menarik, mulai dari Buku Digital Interaktif, 
            Buku Digital, Video Pembelajaran, hingga Laboratorium Maya yang bisa dimanfaatkan oleh semua siswa 
            untuk mendukung mereka dalam belajar di sekolah.
            </p>
          </div>
          <div className='lg:w-1/3'>
            <img src='/web-illustrator-3.png' className='w-96' alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}
