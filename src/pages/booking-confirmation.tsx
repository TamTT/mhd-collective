import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';

const BookingConfirmation = () => {
  const router = useRouter();
  const [bookingDetails, setBookingDetails] = useState<any>(null);
  
  // In a real application, you would fetch the booking details from your API
  // For demo purposes, we'll use mock data
  useEffect(() => {
    // Simulate fetching booking details
    const mockBookingDetails = {
      id: 'BK-' + Math.floor(100000 + Math.random() * 900000),
      property: 'Modern Downtown Apartment',
      checkIn: '2025-07-10',
      checkOut: '2025-07-15',
      guests: 2,
      totalPrice: 1250,
      name: 'John Doe',
      email: 'john.doe@example.com'
    };
    
    setTimeout(() => {
      setBookingDetails(mockBookingDetails);
    }, 1000);
  }, []);
  
  return (
    <Layout title="Booking Confirmation | MHD Properties">
      <div className="bg-beige-light py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-center">Booking Confirmation</h1>
        </div>
      </div>
      
      <section className="section">
        <div className="max-w-3xl mx-auto">
          {bookingDetails ? (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-green-100 text-green-600 mb-4">
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Booking Successful!</h2>
                <p className="text-gray-600 mt-2">
                  Your booking has been confirmed. We've sent a confirmation email to {bookingDetails.email}.
                </p>
              </div>
              
              <div className="border-t border-b border-gray-200 py-6 my-6">
                <h3 className="font-bold text-lg mb-4">Booking Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Booking Reference:</span>
                    <span className="font-medium">{bookingDetails.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Property:</span>
                    <span className="font-medium">{bookingDetails.property}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Check-in Date:</span>
                    <span className="font-medium">{new Date(bookingDetails.checkIn).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Check-out Date:</span>
                    <span className="font-medium">{new Date(bookingDetails.checkOut).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Number of Guests:</span>
                    <span className="font-medium">{bookingDetails.guests}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Amount Paid:</span>
                    <span className="font-bold">${bookingDetails.totalPrice}</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">What's Next?</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>You'll receive a detailed confirmation email with check-in instructions.</li>
                  <li>Our team will contact you 24 hours before your arrival to ensure a smooth check-in.</li>
                  <li>If you have any questions or need to make changes to your booking, please contact us at <a href="mailto:bookings@mhdpropertymanagement.com" className="text-beige-dark hover:underline">bookings@mhdpropertymanagement.com</a> or call (619) 555-1234.</li>
                </ul>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <Link href="/properties" className="btn bg-black hover:bg-beige-dark">
                  Browse More Properties
                </Link>
                <Link href="/" className="btn">
                  Return to Homepage
                </Link>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Thank you for choosing MHD Properties for your stay!
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-md flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-beige-dark"></div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BookingConfirmation;
