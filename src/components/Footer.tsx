import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">MHD Properties</h3>
            <p className="text-neutral-light">
              Professional property management services in Southern California, 
              providing quality properties and exceptional stays.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-beige-light transition-colors duration-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-beige-light transition-colors duration-300">About Us</Link></li>
              <li><Link href="/properties" className="hover:text-beige-light transition-colors duration-300">Properties</Link></li>
              <li><Link href="/services" className="hover:text-beige-light transition-colors duration-300">Services</Link></li>
              <li><Link href="/contact" className="hover:text-beige-light transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="mt-2">Email: info@mhdpropertymanagement.com</p>
              <p>Phone: (619) 555-1234</p>
            </address>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} MHD Properties. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
