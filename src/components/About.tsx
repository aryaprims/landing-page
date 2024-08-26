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
              Our mission is to create innovative, user-friendly, and secure
              products that help our clients succeed in their digital
              transformation journey. We believe in the power of collaboration,
              and we work closely with our clients to bring their vision to
              life.
            </p>
          </div>
        </div>
        <div className='lg:w-3/4 lg:mx-auto flex flex-col-reverse gap-4 lg:flex-row items-center justify-around'>
          <div className='lg:w-1/2 text-center'>
            <p>
              We are a dedicated team of professionals committed to delivering
              top-notch digital solutions that cater to your specific needs. Our
              expertise spans across various domains, ensuring that you receive
              the best service possible.
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
