import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      title: 'Insurance Housing Placement',
      description: 'Specialized housing solutions for insurance clients during home repairs or displacement. We work directly with insurance companies to provide comfortable, fully-furnished accommodations that meet policy requirements and minimize disruption.',
      icon: '🏠'
    },
    {
      title: 'Medical Professional Housing',
      description: 'Tailored accommodations for traveling healthcare professionals on assignment. Our properties offer convenient locations near medical facilities, flexible lease terms, and fully-equipped living spaces designed for comfort after long shifts.',
      icon: '⚕️'
    },
    {
      title: 'Military Relocation Services',
      description: 'Seamless housing solutions for military personnel and their families during PCS moves or temporary assignments. We understand military allowances and offer properties that meet DoD requirements with flexible terms aligned to military orders.',
      icon: '🎖️'
    },
    {
      title: 'Corporate Apartment Management',
      description: 'End-to-end management of corporate housing portfolios. We handle everything from property acquisition and setup to maintenance and tenant relations, allowing companies to offer quality housing benefits without administrative burden.',
      icon: '🏢'
    },
    {
      title: 'Executive Accommodations',
      description: 'Premium housing options for executives and project teams. Our upscale properties feature sophisticated amenities, dedicated workspaces, and concierge services to support productivity and comfort during extended business engagements.',
      icon: '✨'
    },
    {
      title: 'Relocation Support Services',
      description: 'Comprehensive relocation assistance beyond just housing. We offer neighborhood orientation, local resource connections, and personalized support to help transferees and their families quickly settle into their new community.',
      icon: '🌎'
    }
  ];

  return (
    <Layout title="Our Services | MHD Properties">
      <div className="bg-beige-light py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-center">Our Services</h1>
          <p className="text-xl text-center mt-4 max-w-3xl mx-auto">
            Specialized corporate housing solutions for professionals on the move.
            We provide comfortable, fully-furnished accommodations for insurance clients,
            healthcare professionals, military personnel, and corporate relocations.
          </p>
        </div>
      </div>
      
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="heading">Ready to Experience Hassle-Free Property Management?</h2>
          <p className="text-lg mb-8">
            Contact us today to discuss how our services can help you maximize your property investment.
          </p>
          <Link href="/contact" className="btn">
            Get Started
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
