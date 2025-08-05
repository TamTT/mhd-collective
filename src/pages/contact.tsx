import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout title="Contact Us | MHD Properties">
      <div className="bg-beige-light py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-center">Contact Us</h1>
        </div>
      </div>
      
      <section className="section">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="subheading">Get In Touch</h2>
              <p className="mb-6">
                We'd love to hear from you! Whether you're a property owner interested in our management services, 
                a current client with questions, or a potential tenant looking for information about our properties, 
                our team is here to help.
              </p>
              
              <div className="mb-6">
                <h3 className="font-bold mb-2">Contact Information:</h3>
                <p>Phone: (619) 555-1234</p>
                <p>Email: info@mhdpropertymanagement.com</p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Office Hours:</h3>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="subheading">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-beige-dark"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-beige-dark"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-1 font-medium">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-beige-dark"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-beige-dark"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="Property Management">Property Management</option>
                    <option value="Tenant Inquiry">Property Inquiry</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-beige-dark"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
    </Layout>
  );
};

export default Contact;
