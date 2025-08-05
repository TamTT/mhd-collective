import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomeCarousel = () => {
  const carouselImages = [
    {
      src: '/images/interior1_cropped.svg',
      alt: 'Elegant living room with modern furnishings',
      caption: 'Luxury Living Spaces'
    },
    {
      src: '/images/interior2_cropped.svg',
      alt: 'Spacious kitchen with high-end appliances',
      caption: 'Modern Kitchens'
    },
    {
      src: '/images/interior3_cropped.svg',
      alt: 'Master bedroom with premium finishes',
      caption: 'Comfortable Bedrooms'
    },
    {
      src: '/images/interior4_cropped.svg',
      alt: 'Stylish bathroom with quality fixtures',
      caption: 'Elegant Bathrooms'
    }
  ];

  return (
    <div className="relative">
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        swipeable={true}
        emulateTouch={true}
        className="carousel-container"
      >
        {carouselImages.map((image, index) => (
          <div key={index} className="carousel-slide h-[400px] md:h-[500px] lg:h-[600px] relative">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${image.src})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
              <div className="text-center px-4 max-w-3xl">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 shadow-text">
                  {image.caption}
                </h2>
                <p className="text-lg md:text-xl text-white shadow-text">
                  Quality Properties in Southern California
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
