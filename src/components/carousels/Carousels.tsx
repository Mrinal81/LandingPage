// Carousel.tsx
import React, { useState } from 'react';

interface CarouselProps {}

const data = [
  {
    description:
      'There are many variations of passages of Lorem Ipsum available but the majority have sufferg alteration in some form, by injected humour, or randomised words which look even slightly believable. If you are going to use a passage.',
    img: '/assets/career-1.png',
    author: 'Abcdefgh ijklmnop',
    role: 'Frontend Developer',
  },
  {
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.',
    img: '/assets/career-2.png',
    author: 'ijklmnop Abcdefgh',
    role: 'Backend Developer',
  },
];

const Carousel: React.FC<CarouselProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel flex items-center justify-center mt-20 mb-10">
      <div className="inner-carousel md:w-9/12 w-11/12 rounded-3xl flex items-center justify-center">
        <button
          className="left-btn rounded-full w-10 h-10 bg-blue-600 text-white font-bold text-lg"
          onClick={goToPrevSlide}
        >
          &lt;
        </button>
        <div className="carousel-content w-10/12 mb-10 p-4">
          <div className="carousel-title">
            <h1 className="carousel-heading md:text-3xl text-2xl font-bold text-center">See Our Success Stories</h1>
          </div>
          <div className="avatar-img flex items-center justify-center m-12 md:hidden">
            <img src={data[currentIndex].img} alt="profile-pic" className=' w-56'/>
          </div>
          <div className="carousel-card rounded-3xl flex justify-center items-center shadow-xl mt-20 gap-4 bg-card-bg md:border">
            <div className="w-2/5 p-6 hidden md:block">
              <img src="/assets/quote.png" alt="quote-img" className="quotes-img" />
            </div>
            <div className="w-5/5 bg-white p-6 flex gap-10 rounded-r-3xl">
              <div className="data">
                <div className="mb-8">
                  <p>{data[currentIndex].description}</p>
                </div>
                <div className="text-rit text-end">
                  <p className="font-bold">{data[currentIndex].author}</p>
                  <p>{data[currentIndex].role}</p>
                </div>
              </div>
              <div className="avatar-img flex items-center m-6 hidden md:block">
                <img src={data[currentIndex].img} alt="profile-pic" />
              </div>
            </div>
          </div>
        </div>
        <button
          className="right-btn rounded-full w-10 h-10 bg-blue-600 text-white text-lg font-bold"
          onClick={goToNextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
