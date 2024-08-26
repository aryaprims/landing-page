export default function Contact() {
  return (
    <section id='contact' className='py-32'>
      <div className='container flex flex-col gap-6'>
        <h2 className='text-4xl text-center font-semibold'>Contact Us</h2>
        <div className='flex flex-col gap-4 lg:flex-row items-start justify-around'>
          <div className='lg:w-1/3 w-full'>
            <form className='flex flex-col gap-4'>
              <input
                type='text'
                className='p-4 rounded-xl'
                id='name'
                placeholder='Enter your name'
              />
              <input
                type='email'
                className='p-4 rounded-xl'
                id='email'
                placeholder='Enter your email'
              />
              <textarea
                className='p-4 rounded-xl'
                id='message'
                rows={4}
                placeholder='Your message'
              />
              <button
                type='submit'
                className='py-4 px-8 bg-teal-500 text-white rounded-xl w-fit'
              >
                Send Message
              </button>
            </form>
          </div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509428!2d144.95565131531083!3d-37.81732697975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43b2c203f5%3A0xbdf5b0b874bd4a68!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1605039824801!5m2!1sen!2sau'
            className='aspect-video w-full lg:w-1/3 rounded-xl'
            loading='lazy'
          />
        </div>
      </div>
    </section>
  )
}
