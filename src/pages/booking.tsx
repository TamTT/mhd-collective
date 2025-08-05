import React, { useState } from 'react';
import Layout from '../components/Layout';

const Booking = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const properties = [
    {
      id: 1,
      title: 'Modern Downtown Apartment',
      location: 'Downtown San Diego',
    },
    {
      id: 2,
      title: 'Spacious Family Home',
      location: 'La Jolla',
    },
    {
      id: 3,
      title: 'Beachfront Condo',
      location: 'Oceanside',
    },
    {
      id: 4,
      title: 'Charming Craftsman Home',
      location: 'North Park',
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend
    setFormSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      const form = document.getElementById('bookingForm') as HTMLFormElement;
      if (form) form.reset();
    }, 5000);
  };

  return (
    <Layout title="Book A Stay | MHD Properties">
      <div className="bg-beige-light py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-center">Book A Stay</h1>
          <p className="text-xl text-center mt-4">
            Interested in one of our properties? Fill out the form below to inquire about availability and rates.
          </p>
        </div>
      </div>
      
      <section className="section">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="subheading">About Our Booking Process</h2>
              <p className="mb-6">
                We're excited that you're interested in staying at one of our premium properties. 
                Our team will review your inquiry and get back to you within 24 hours with availability 
                and detailed information about your selected property.
              </p>
              
              <div className="mb-6">
                <h3 className="font-bold mb-2">What to expect:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Confirmation of availability for your requested dates</li>
                  <li>Detailed pricing information including any seasonal rates</li>
                  <li>Information about check-in/check-out procedures</li>
                  <li>Answers to any specific questions you've included</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Contact Information:</h3>
                <p>Phone: (619) 555-1234</p>
                <p>Email: bookings@mhdpropertymanagement.com</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="subheading">Booking Inquiry</h2>
              
              {formSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  <p className="font-bold">Thank you for your inquiry!</p>
                  <p>We've received your booking request and will contact you shortly.</p>
                </div>
              ) : null}
              
              <form id="bookingForm" className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="property" className="block mb-1 font-medium">Select Property</label>
                  <select
                    id="property"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-beige-dark"
                    required
                  >
                    <option value="">Select a property</option>
                    {properties.map(property => (
                      <option key={property.id} value={property.id}>
                        {property.title} - {property.location}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="checkIn" className="block mb-1 font-medium">Check-in Date</label>
                    <input
                      type="date"
                      id="checkIn"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-beige-dark"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="checkOut" className="block mb-1 font-medium">Check-out Date</label>
                    <input
                      type="date"
                      id="checkOut"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-beige-dark"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="guests" className="block mb-1 font-medium">Number of Guests</label>
                  <input
                    type="number"
                    id="guests"
                    min="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-beige-dark"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">Full Name</label>
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
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">Special Requests or Questions</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-beige-dark"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn w-full"
                >
                  Submit Booking Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
