export default function Products() {
  return (
    <section id='product' className='py-32'>
      <div className='container flex flex-col gap-6'>
        <h2 className='text-4xl text-center font-semibold'>Products</h2>
        <div className='lg:w-3/4 lg:mx-auto flex justify-center'>
          <img src='/figma1.png' className='lg:w-3/4' alt='' />
        </div>
        <a
              href='https://www.figma.com/proto/NAFZFZQFovC7AY4T5ZZS02/GROUP4_PIJAR-SEKOLAH?node-id=25-17196&t=ERMxsOi7VjS5s0Wg-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=25%3A17196'
              className='py-4 px-8 bg-teal-500 text-white rounded-xl w-fit'
        >
              Test Prototype
        </a>
      </div>
    </section>
  )
}
