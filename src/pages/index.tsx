import React from 'react';
import Layout from '../components/Layout';
import HomeCarousel from '../components/HomeCarousel';
import Link from 'next/link';

const Home = () => {
  return (
    <Layout title="MHD Properties | Southern California">
      <HomeCarousel />
      
      <section className="section">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="heading">Welcome to MHD Properties</h1>
          <p className="text-lg mb-8">
            Your trusted partner for quality property management services in Southern California.
            We provide professional management solutions with a personal touch.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/properties" className="btn">
              View Our Properties
            </Link>
            <Link href="/contact" className="btn bg-black hover:bg-beige-dark">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      <section className="bg-beige-light py-16">
        <div className="section">
          <h2 className="heading text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="subheading">Property Management</h3>
              <p>Comprehensive management services for residential and commercial properties, ensuring optimal performance and tenant satisfaction.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="subheading">Tenant Placement</h3>
              <p>Professional screening and placement services to find reliable, quality tenants for your investment properties.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="subheading">Maintenance & Repairs</h3>
              <p>Prompt and efficient maintenance services to keep your properties in excellent condition and preserve their value.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn">
              Learn More About Our Services
            </Link>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="subheading">Local Expertise</h3>
              <p className="mb-4">
                As a locally owned and operated company, we have deep knowledge of the Southern California property market and community.
              </p>
              <h3 className="subheading">Quality Focus</h3>
              <p>
                We emphasize quality in everything we do - from the properties we manage to the service we provide to owners and tenants.
              </p>
            </div>
            <div>
              <h3 className="subheading">Professional Service</h3>
              <p className="mb-4">
                Our team of experienced professionals delivers reliable, responsive service that property owners and tenants can count on.
              </p>
              <h3 className="subheading">Personal Attention</h3>
              <p>
                We provide personalized attention to each property and client, ensuring that your specific needs and goals are met.
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/about" className="btn">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
