import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Carousels() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const works = [
    { id: 1, image: '/momen1.jpg', title: 'Work 01', subtitle: 'Web Design' },
    { id: 2, image: '/momen2.jpg', title: 'Work 02', subtitle: 'Web Design' },
    { id: 3, image: '/momen3.jpg', title: 'Work 03', subtitle: 'Web Design' },
    { id: 4, image: '/momen4.jpg', title: 'Work 04', subtitle: 'Web Design' },
    { id: 5, image: '/momen5.jpg', title: 'Work 05', subtitle: 'Web Design' },
    { id: 6, image: '/momen6.jpg', title: 'Work 06', subtitle: 'Web Design' },
  ];

  return (
    <section className="py-32 bg-slate-100">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-semibold mb-10">Our Moments</h2>
        <Slider {...settings}>
          {works.map((work) => (
            <div key={work.id} className="p-4">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                  <a href="#" className="text-white text-2xl">
                    <span className="ion-ios-search"></span>
                  </a>
                </div>
              </div>
              <div className="text pt-3 w-full text-center">
                <h3 className="text-lg font-semibold"><a href="#">{work.title}</a></h3>
                <span className="text-gray-500">{work.subtitle}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

