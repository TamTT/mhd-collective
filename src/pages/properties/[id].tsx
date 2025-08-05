import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Link from 'next/link';

// Sample properties data - in a real application, this would come from a database or API
const properties = [
  {
    id: 1,
    title: 'Modern Downtown Apartment',
    location: 'Downtown San Diego',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    price: 'Starting at $3,500/month',
    image: '/images/property1.svg',
    description: 'Luxurious apartment in the heart of downtown with stunning city views, modern amenities, and easy access to restaurants and entertainment.',
    fullDescription: `
      This beautiful modern apartment is located in the vibrant downtown area of San Diego, offering an unparalleled urban living experience. The spacious 1,200 square foot floor plan features 2 bedrooms and 2 bathrooms, perfect for professionals or small families.
      
      The open-concept living area is flooded with natural light through floor-to-ceiling windows, providing breathtaking views of the city skyline. The gourmet kitchen is equipped with high-end stainless steel appliances, quartz countertops, and custom cabinetry.
      
      Both bedrooms are generously sized with ample closet space. The primary suite includes an en-suite bathroom with a walk-in shower and double vanity. The second bathroom features a bathtub/shower combination and modern fixtures.
      
      Building amenities include a 24-hour fitness center, rooftop pool and lounge area, secure parking, and concierge service. The location offers easy access to the Gaslamp Quarter, Little Italy, and the waterfront, with numerous dining, shopping, and entertainment options within walking distance.
      
      Public transportation is readily available, and major highways are easily accessible for commuters.
    `,
    features: [
      'Floor-to-ceiling windows with city views',
      'Gourmet kitchen with stainless steel appliances',
      'In-unit washer and dryer',
      'Central air conditioning and heating',
      'Hardwood floors throughout',
      'Walk-in closets',
      'Balcony with city views',
      '24-hour fitness center access',
      'Rooftop pool and lounge',
      'Secure parking garage',
      'Pet-friendly (with restrictions)',
      'High-speed internet ready'
    ],
    nearbyAttractions: [
      'Gaslamp Quarter (0.3 miles)',
      'Petco Park (0.5 miles)',
      'Little Italy (0.7 miles)',
      'Waterfront Park (0.9 miles)',
      'Balboa Park (1.5 miles)',
      'San Diego Zoo (2.1 miles)'
    ]
  },
  {
    id: 2,
    title: 'Spacious Family Home',
    location: 'La Jolla',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    price: 'Starting at $6,400/month',
    image: '/images/property2.svg',
    description: 'Beautiful family home in a quiet neighborhood with a large backyard, updated kitchen, and close proximity to excellent schools and parks.',
    fullDescription: `
      This elegant family home is nestled in the prestigious La Jolla neighborhood, offering a perfect blend of luxury and comfort. With 2,800 square feet of living space, the home features 4 bedrooms and 3 bathrooms, providing ample room for family living and entertaining.
      
      The grand entryway leads to a spacious living room with a fireplace and large windows overlooking the beautifully landscaped yard. The gourmet kitchen has been recently updated with high-end appliances, custom cabinetry, and a large center island with breakfast bar seating. The adjacent dining area opens to a covered patio, perfect for al fresco dining.
      
      The primary suite is located on the main floor and includes a walk-in closet and a luxurious bathroom with a soaking tub and separate shower. Three additional bedrooms are located upstairs, along with two full bathrooms and a bonus room that could serve as a home office or playroom.
      
      The backyard is a private oasis with mature trees, a large lawn area, and a patio with built-in barbecue. The property includes a two-car garage with additional storage space.
      
      Located in one of San Diego's most desirable neighborhoods, this home is within walking distance to top-rated schools, parks, and beaches. Shopping centers, restaurants, and major highways are just minutes away.
    `,
    features: [
      'Recently updated gourmet kitchen',
      'Spacious primary suite on main floor',
      'Fireplace in living room',
      'Hardwood floors in main living areas',
      'Covered patio for outdoor entertaining',
      'Large, landscaped backyard',
      'Built-in barbecue',
      'Two-car garage with storage',
      'Central air conditioning and heating',
      'Laundry room with washer and dryer',
      'Bonus room/office space',
      'Smart home features'
    ],
    nearbyAttractions: [
      'La Jolla Shores Beach (1.2 miles)',
      'Torrey Pines Golf Course (2.5 miles)',
      'La Jolla Cove (1.8 miles)',
      'Scripps Park (1.5 miles)',
      'Birch Aquarium (1.0 mile)',
      'UCSD Campus (2.3 miles)'
    ]
  },
  {
    id: 3,
    title: 'Beachfront Condo',
    location: 'Oceanside',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1500,
    price: 'Starting at $3,900/month',
    image: '/images/property3.svg',
    description: 'Stunning beachfront condo with panoramic ocean views, private balcony, and resort-style community amenities including pool and fitness center.',
    fullDescription: `
      Experience the ultimate Southern California lifestyle in this breathtaking beachfront condo in Oceanside. This 1,500 square foot property offers 2 bedrooms and 2 bathrooms with unobstructed panoramic views of the Pacific Ocean.
      
      The open floor plan maximizes the spectacular views with floor-to-ceiling windows and sliding glass doors leading to a private balcony where you can enjoy stunning sunsets and the sound of crashing waves. The living area features contemporary furnishings, a gas fireplace, and a dining space perfect for entertaining.
      
      The gourmet kitchen is equipped with granite countertops, stainless steel appliances, and a breakfast bar. The spacious primary bedroom includes an en-suite bathroom with a walk-in shower and soaking tub, plus direct access to the balcony. The second bedroom is ideal for guests and includes ample closet space and access to the second full bathroom.
      
      This luxury condo community offers resort-style amenities including a heated oceanfront pool and spa, state-of-the-art fitness center, clubhouse with lounge, and direct beach access. Additional features include secured underground parking, elevator access, and 24-hour security.
      
      Located in the heart of Oceanside, this property is within walking distance to the pier, harbor, and numerous restaurants and shops. Easy access to I-5 makes commuting convenient, while the Oceanside Transit Center provides additional transportation options.
    `,
    features: [
      'Panoramic ocean views',
      'Private balcony',
      'Gas fireplace',
      'Gourmet kitchen with granite countertops',
      'Primary suite with ocean views',
      'In-unit washer and dryer',
      'Central air conditioning',
      'Secured underground parking',
      'Elevator access',
      'Heated oceanfront pool and spa',
      'Fitness center',
      'Direct beach access'
    ],
    nearbyAttractions: [
      'Oceanside Pier (0.5 miles)',
      'Oceanside Harbor (1.0 mile)',
      'California Surf Museum (0.7 miles)',
      'Mission San Luis Rey (3.2 miles)',
      'LEGOLAND California (7.5 miles)',
      'Carlsbad Village (4.3 miles)'
    ]
  },
  {
    id: 4,
    title: 'Charming Craftsman Home',
    location: 'North Park',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    price: 'Starting at $4,900/month',
    image: '/images/property4.svg',
    description: 'Beautifully restored craftsman home with original details, modern updates, and a prime location near trendy shops, restaurants, and breweries.',
    fullDescription: `
      This beautifully restored Craftsman home combines historic charm with modern conveniences in the vibrant North Park neighborhood. Built in 1925 and thoughtfully updated, this 1,800 square foot home features 3 bedrooms and 2 bathrooms while preserving original architectural details.
      
      The welcoming front porch leads to a living room with a decorative fireplace, built-in bookshelves, and original hardwood floors. The formal dining room includes a built-in buffet with leaded glass cabinets. The updated kitchen maintains the home's character while offering modern stainless steel appliances, quartz countertops, and custom cabinetry.
      
      The primary bedroom features a walk-in closet and an en-suite bathroom with a clawfoot tub and separate shower. Two additional bedrooms share a beautifully updated second bathroom. A cozy den could serve as a home office or reading nook.
      
      The backyard is perfect for entertaining with a covered patio, landscaped garden, and mature fruit trees. A detached garage has been converted to a versatile studio space, ideal for a home office or creative pursuits.
      
      Located in one of San Diego's most desirable urban neighborhoods, this home is within walking distance to trendy restaurants, craft breweries, boutique shops, and the iconic Observatory North Park. Balboa Park is just minutes away, and downtown San Diego is easily accessible.
    `,
    features: [
      'Original hardwood floors',
      'Built-in bookshelves and buffet',
      'Decorative fireplace',
      'Updated kitchen with quartz countertops',
      'Clawfoot tub in primary bathroom',
      'Covered front porch',
      'Landscaped backyard with mature fruit trees',
      'Converted garage/studio space',
      'Central heating',
      'Updated electrical and plumbing',
      'Period light fixtures',
      'Laundry room'
    ],
    nearbyAttractions: [
      'North Park Observatory (0.3 miles)',
      'Balboa Park (1.0 mile)',
      'San Diego Zoo (1.5 miles)',
      'Morley Field Sports Complex (0.8 miles)',
      'North Park Farmers Market (0.4 miles)',
      'Multiple craft breweries within walking distance'
    ]
  }
];

const PropertyDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  
  // Find the property based on the ID from the URL
  const property = properties.find(p => p.id === Number(id));
  
  // If property not found or page is still loading
  if (!property) {
    return (
      <Layout title="Property Details | MHD Properties">
        <div className="section">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md flex justify-center items-center py-12">
              {router.isFallback ? (
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-beige-dark"></div>
              ) : (
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Property Not Found</h2>
                  <p className="mb-6">The property you're looking for doesn't exist or has been removed.</p>
                  <Link href="/properties" className="btn">
                    View All Properties
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout title={`${property.title} | MHD Properties`}>
      <div className="bg-beige-light py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-center">{property.title}</h1>
          <p className="text-xl text-center mt-2">{property.location}</p>
        </div>
      </div>
      
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${property.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">{property.title}</h2>
                  <span className="text-xl font-bold text-beige-dark">{property.price}</span>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-beige-light px-4 py-2 rounded-full">
                    <span className="font-medium">{property.bedrooms} Bedrooms</span>
                  </div>
                  <div className="bg-beige-light px-4 py-2 rounded-full">
                    <span className="font-medium">{property.bathrooms} Bathrooms</span>
                  </div>
                  <div className="bg-beige-light px-4 py-2 rounded-full">
                    <span className="font-medium">{property.sqft} sqft</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">Description</h3>
                  <p className="text-gray-700">{property.description}</p>
                </div>
                
                <div className="flex gap-4">
                  <Link href="/booking" className="btn">
                    Book This Property
                  </Link>
                  <Link href="/contact" className="btn bg-black hover:bg-beige-dark">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">Property Details</h3>
              <div className="whitespace-pre-line text-gray-700">
                {property.fullDescription}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div>
                <h3 className="text-xl font-bold mb-4">Features & Amenities</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {property.features.map((feature, index) => (
                    <li key={index} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Nearby Attractions</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {property.nearbyAttractions.map((attraction, index) => (
                    <li key={index} className="text-gray-700">{attraction}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-beige-light py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="heading">Interested in This Property?</h2>
          <p className="text-lg mb-8">
            Contact us today to schedule a viewing or book your stay online.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/booking" className="btn">
              Book Now
            </Link>
            <Link href="/properties" className="btn bg-black hover:bg-beige-dark">
              View Other Properties
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PropertyDetail;
