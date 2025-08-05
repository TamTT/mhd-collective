import React, { useState, useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const Properties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  
  // Handle sliding the carousel
  const handleSlide = (direction: 'next' | 'prev') => {
    const maxIndex = Math.ceil(properties.length / 3) - 1;
    
    if (direction === 'next') {
      setCurrentIndex(prevIndex => prevIndex >= maxIndex ? 0 : prevIndex + 1);
    } else {
      setCurrentIndex(prevIndex => prevIndex <= 0 ? maxIndex : prevIndex - 1);
    }
  };
  
  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handleSlide('prev');
      } else if (e.key === 'ArrowRight') {
        handleSlide('next');
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  // Add responsive behavior
  useEffect(() => {
    const handleResize = () => {
      // Reset to first slide on mobile
      if (window.innerWidth < 768 && currentIndex > 0) {
        setCurrentIndex(0);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);
  const properties = [
    {
      id: 1,
      title: 'Modern Downtown Apartment',
      location: 'Downtown San Diego',
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      price: 'Starting at $3,500/month',
      image: '/images/property1_cropped.svg',
      description: 'Luxurious apartment in the heart of downtown with stunning city views, modern amenities, and easy access to restaurants and entertainment.'
    },
    {
      id: 2,
      title: 'Spacious Family Home',
      location: 'La Jolla',
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2800,
      price: 'Starting at $6,400/month',
      image: '/images/property2_cropped.svg',
      description: 'Beautiful family home in a quiet neighborhood with a large backyard, updated kitchen, and close proximity to excellent schools and parks.'
    },
    {
      id: 3,
      title: 'Beachfront Condo',
      location: 'Oceanside',
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1500,
      price: 'Starting at $3,900/month',
      image: '/images/property3_cropped.svg',
      description: 'Stunning beachfront condo with panoramic ocean views, private balcony, and resort-style community amenities including pool and fitness center.'
    },
    {
      id: 4,
      title: 'Charming Craftsman Home',
      location: 'North Park',
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1800,
      price: 'Starting at $4,900/month',
      image: '/images/property4_cropped.svg',
      description: 'Beautifully restored craftsman home with original details, modern updates, and a prime location near trendy shops, restaurants, and breweries.'
    }
  ];

  return (
    <Layout title="Our Properties | MHD Properties">
      <div className="bg-beige-light py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-center">Our Properties</h1>
          <p className="text-xl text-center mt-4 max-w-3xl mx-auto">
            Discover our selection of quality properties throughout Southern California, 
            carefully maintained to provide comfortable and enjoyable living experiences.
          </p>
        </div>
      </div>
      
      <section className="section">
        <div className="max-w-7xl mx-auto relative">
          {/* Carousel Navigation */}
          <div className="flex justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Properties</h2>
            <div className="flex space-x-2">
              <button 
                onClick={() => handleSlide('prev')} 
                className="bg-beige-dark hover:bg-beige-darker text-white px-4 py-2 rounded-md transition"
                aria-label="Previous properties"
              >
                &larr;
              </button>
              <button 
                onClick={() => handleSlide('next')} 
                className="bg-beige-dark hover:bg-beige-darker text-white px-4 py-2 rounded-md transition"
                aria-label="Next properties"
              >
                &rarr;
              </button>
            </div>
          </div>
          
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100 / 3}%)` }}
            >
              {properties.map((property) => (
                <div 
                  key={property.id} 
                  className="flex-shrink-0 w-full md:w-1/3 px-2"
                  style={{ minWidth: 'calc(100% / 3)' }}
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                    <div 
                      className="h-64 bg-gray-200 relative"
                      style={{
                        backgroundImage: `url(${property.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white py-2 px-4">
                        {property.price}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                      <p className="text-gray-600 mb-4">{property.location}</p>
                      <div className="flex justify-between mb-4">
                        <span>{property.bedrooms} Beds</span>
                        <span>{property.bathrooms} Baths</span>
                        <span>{property.sqft} sqft</span>
                      </div>
                      <p className="text-gray-700 mb-4">{property.description}</p>
                      <Link href={`/properties/${property.id}`} className="btn w-full text-center">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6">
            {Array.from({ length: Math.ceil(properties.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 mx-1 rounded-full ${currentIndex === index ? 'bg-beige-dark' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-beige-light py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="heading">Looking for Something Specific?</h2>
          <p className="text-lg mb-8">
            We're constantly adding new properties to our portfolio. Contact us to discuss your specific needs and preferences.
          </p>
          <Link href="/contact" className="btn">
            Contact Our Team
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Properties;
