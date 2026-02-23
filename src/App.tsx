import { Hero } from "./components/Hero";
import { PropertyCard } from "./components/PropertyCard";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import logo from "figma:asset/54e011d33ca06c9ef20f7dda3a672d1a9592e972.png";

export default function App() {
  const featuredProperties = [
    {
      image: "https://thm.arosoftware.com/aro-au-prod-storage.s3-ap-southeast-2.amazonaws.com/purplestone/listings/6/images/v6k34rvcfai6xctpyg7m24bh4a_2638-67c3c550f373d.w.300.h.210.q.75.zc.C.jpg",
      title: "House for Rent",
      price: "$2650.60 per month",
      location: "6 Limestone Court, Warragul, VIC 3820",
      beds: 4,
      baths: 2,
      sqft: "514 sqm",
      status: "For Rent" as const
    },
    {
      image: "https://thm.arosoftware.com/aro-au-prod-storage.s3-ap-southeast-2.amazonaws.com/purplestone/listings/30/images/Untitled_design__4__9_52_49_pm_9216-6992f73a40a88.w.300.h.210.q.75.zc.C.jpg",
      title: "Family Home",
      price: "$930,000- $1,010,000",
      location: "11 Jeanne Street, Cockatoo, VIC 3781",
      beds: 4,
      baths: 3,
      sqft: "1014 sqm",
      status: "For Sale" as const
    },
    {
      image: "https://thm.arosoftware.com/aro-au-prod-storage.s3-ap-southeast-2.amazonaws.com/purplestone/listings/2/images/1739401652-406fc2ef-50f9-40d2-9559-80842407c103__203981460-image-M.w.300.h.210.q.75.zc.C.jpg",
      title: "Vacant Land",
      price: "$445,000 - $500,000",
      location: "36 Shakespeare Grove, Officer, VIC 3809",
      sqft: "576 sqm",
      status: "For Sale" as const
    },
    {
      image: "https://thm.arosoftware.com/aro-au-prod-storage.s3-ap-southeast-2.amazonaws.com/purplestone/listings/3/images/1739401653-5bc83691-6078-42bb-ac72-ba9c38e40d5d__204021884-image-M.w.300.h.210.q.75.zc.C.jpg",
      title: "Vacant Land",
      price: "$460,000",
      location: "591 South Gippsland Highway, Cranbourne East, VIC 3977",
      sqft: "350 sqm",
      status: "For Sale" as const
    },
    {
      image: "https://thm.arosoftware.com/aro-au-prod-storage.s3-ap-southeast-2.amazonaws.com/purplestone/listings/21/images/me75by7y2qi6zl6pmmy6kcgwei_10_54_31_am_5436-68a6b413cf808.w.300.h.210.q.75.zc.C.jpg",
      title: "Family Home",
      price: "$310 per week",
      location: "3/27 Elgin St, Morwell, VIC 3840",
      beds: 2,
      baths: 1,
      sqft: "305 sqm",
      status: "Leased" as const
    },
    {
      image: "https://thm.arosoftware.com/aro-au-prod-storage.s3-ap-southeast-2.amazonaws.com/purplestone/listings/8/images/wicwdhhgmai65m5s5w5yfahs2a__1__9956-67c7d909caa9e.w.300.h.210.q.75.zc.C.jpg",
      title: "Charming Suburban Home",
      price: "$1477.38 Calendar Month",
      location: "107 Drummond St S, Ballarat Central, VIC 3350",
      beds: 2,
      baths: 1,
      sqft: "506 sqm",
      status: "Leased" as const
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <ImageWithFallback 
                src={logo} 
                alt="Purple Stone Real Estate" 
                className="h-40"
              />
            <div className="hidden md:flex gap-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
              <a href="#properties" className="text-gray-700 hover:text-purple-600 transition-colors">Properties</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
            </div>
            <button className="md:hidden text-gray-700">
              Menu
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home">
        <Hero />
      </div>

      {/* Featured Properties */}
      <section id="properties" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Featured Properties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore my carefully curated selection of premium properties in the most desirable locations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <div id="about">
        <About />
      </div>

      {/* Services Section */}
      <div id="services">
        <Services />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="mb-4">Purple Stone Real Estate</h3>
              <p className="text-purple-200">
                Your trusted partner in finding the perfect property.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-purple-200 hover:text-white transition-colors">Home</a>
                <a href="#properties" className="block text-purple-200 hover:text-white transition-colors">Properties</a>
                <a href="#about" className="block text-purple-200 hover:text-white transition-colors">About</a>
                <a href="#services" className="block text-purple-200 hover:text-white transition-colors">Services</a>
              </div>
            </div>
            <div>
              <h4 className="mb-4">Contact</h4>
              <div className="space-y-2 text-purple-200">
                <p>(555) 123-4567</p>
                <p>info@purplestone.com</p>
                <p>Los Angeles, CA</p>
              </div>
            </div>
          </div>
          <div className="border-t border-purple-800 mt-8 pt-8 text-center text-purple-200">
            <p>&copy; 2026 Purple Stone Real Estate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}