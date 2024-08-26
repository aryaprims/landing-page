import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Carousels() {
  return (
    <section id='carousel' className='py-32 bg-slate-100 mt-20'>
      <div className='container'>
        <h2 className='text-4xl text-center font-semibold'>Our Moments</h2>
        <div className='lg:w-3/4 lg:mx-auto'>
          <Carousel 
            showThumbs={false} 
            autoPlay 
            infiniteLoop 
            interval={3000} 
            showStatus={false}
          >
            <div>
              <img src='//momen1.jpg' alt='Slide 1' className='rounded-xl'/>
              <p className='legend'>Caption for Slide 1</p>
            </div>
            <div>
              <img src='/momen2.jpg' alt='Slide 2' className='rounded-xl'/>
              <p className='legend'>Caption for Slide 2</p>
            </div>
            <div>
              <img src='/photo3.png' alt='Slide 3' className='rounded-xl'/>
              <p className='legend'>Caption for Slide 3</p>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}