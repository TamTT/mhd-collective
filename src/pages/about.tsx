import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout title="About Us | MHD Properties">
      <div className="bg-beige-light py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-center">About MHD Properties</h1>
        </div>
      </div>
      
      <section className="section">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="subheading">Our Story</h2>
            <p className="mb-6">
              Founded in Southern California, MHD Properties was established with a simple yet powerful vision: to provide property management services that combine professional expertise with a personal touch. Our journey began with a small portfolio of properties in the San Diego area, and we have since grown to manage diverse properties throughout Southern California.
            </p>
            
            <h2 className="subheading">Our Mission</h2>
            <p className="mb-6">
              At MHD Properties, our mission is to maximize the value and potential of each property we manage while providing exceptional service to both property owners and tenants. We believe that quality properties deserve quality management, and we are committed to maintaining the highest standards in all aspects of our work.
            </p>
            
            <h2 className="subheading">Local Roots, Professional Service</h2>
            <p className="mb-6">
              As a locally owned and operated company, we take pride in our deep understanding of the Southern California real estate market. Our team members live and work in the communities we serve, giving us valuable insights into local trends, regulations, and opportunities. This local expertise, combined with our professional approach to property management, allows us to deliver results that consistently exceed expectations.
            </p>
            
            <h2 className="subheading">Our Approach</h2>
            <p className="mb-6">
              We believe that successful property management requires a balanced approach that considers the needs of property owners, tenants, and the properties themselves. We focus on:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Quality Properties:</strong> We carefully select and maintain properties that meet our high standards for quality, safety, and appeal.</li>
              <li><strong>Responsive Communication:</strong> We prioritize clear, timely communication with all stakeholders, ensuring that questions are answered and concerns are addressed promptly.</li>
              <li><strong>Proactive Management:</strong> Rather than simply reacting to issues as they arise, we take a proactive approach to property management, identifying and addressing potential problems before they become significant.</li>
              <li><strong>Personalized Service:</strong> We recognize that each property and client is unique, and we tailor our services to meet specific needs and goals.</li>
            </ul>
            
            <h2 className="subheading">Our Team</h2>
            <p className="mb-6">
              Our dedicated team brings together professionals with diverse backgrounds in real estate, property management, maintenance, and customer service. What unites us is a shared commitment to excellence and a genuine passion for what we do. We continuously invest in professional development and stay updated on industry best practices to ensure that we provide the highest level of service.
            </p>
            
            <h2 className="subheading">Community Involvement</h2>
            <p>
              As members of the Southern California community, we believe in giving back and contributing to the well-being of the areas where we operate. We actively participate in local initiatives and support organizations that work to improve housing access, community development, and quality of life in our region.
            </p>
          </div>
        </div>
      </section>
      
      <section className="bg-beige-light py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="heading">Partner With Us</h2>
          <p className="text-lg mb-8">
            Whether you're a property owner looking for reliable management services or a potential tenant searching for a quality home, we invite you to experience the MHD difference.
          </p>
          <div className="flex justify-center">
            <a href="/contact" className="btn">Contact Us Today</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
