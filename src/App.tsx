import { Hero } from "./components/Hero";
import { PropertyCard } from "./components/PropertyCard";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import logo from "figma:asset/54e011d33ca06c9ef20f7dda3a672d1a9592e972.png";
import { useState } from "react";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { OFFICER_ADDRESS, OFFICE_EMAIL, OFFICE_PHONE } from "./constants/constants";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;

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
    },
    {
      image: "https://thm.arosoftware.com/aro-au-prod-storage.s3-ap-southeast-2.amazonaws.com/purplestone/listings/15/images/ftnxishvcyi67alrbopyjfww54_11_07_30_pm_8647-68540d9c6bc2a.w.1400.h.980.zc.C.aoe.1.q.70.f.webp.jpg",
      title: "Unit for Rent",
      price: "$450 per week",
      location: "1/40 Gladstone St, Warragul",
      beds: 2,
      baths: 1,
      sqft: "139 sqm",
      status: "Leased" as const
    },
    {
      image: "https://thm.arosoftware.com/aro-au-prod-storage.s3-ap-southeast-2.amazonaws.com/purplestone/listings/20/images/image8__1__9211-6873088b022d0.w.1920.h.1080.zc.C.aoe.1.q.70.f.webp.jpg",
      title: "Family Home",
      price: "$450 per week",
      location: "57 Patriot Cres, Smythes Creek",
      beds: 4,
      baths: 2,
      sqft: "511 sqm",
      status: "Leased" as const
    },
    {
      image: "https://thm.arosoftware.com/aro-au-prod-storage.s3-ap-southeast-2.amazonaws.com/purplestone/listings/22/images/qdeobporqyi6ncszemtbxaegse_9847-68bd5b49f38ba.w.1400.h.980.zc.C.aoe.1.q.70.f.webp.jpg",
      title: "Family Home",
      price: "$475 per week",
      location: "1 Beckham Ct, Warragul",
      beds: 2,
      baths: 1,
      sqft: "395 sqm",
      status: "Leased" as const
    },
    {
      image: "https://thm.arosoftware.com/aro-au-prod-storage.s3-ap-southeast-2.amazonaws.com/purplestone/listings/28/images/image_7354-6948c8a38591d.w.1400.h.980.zc.C.aoe.1.q.70.f.webp.jpg",
      title: "Home for Rent",
      price: "$475 per week",
      location: "30 Sydney Way, Alfredton",
      beds: 4,
      baths: 2,
      sqft: "215 sqm",
      status: "Leased" as const
    },
    {
      image: "https://thm.arosoftware.com/aro-au-prod-storage.s3-ap-southeast-2.amazonaws.com/purplestone/listings/16/images/mofvqrinwui6xmkt5ok272kpgy_0075-685d88caa1d01.w.1400.h.980.zc.C.aoe.1.q.70.f.webp.jpg",
      title: "Home for Rent",
      price: "$480 per week",
      location: "43 Latrobe St, Warragul",
      beds: 3,
      baths: 1,
      sqft: "740 sqm",
      status: "Leased" as const
    }
  ];

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = featuredProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty,
  );

  const totalPages = Math.ceil(featuredProperties.length / propertiesPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
            <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
           {/* Mobile Menu */}
           {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a 
                  href="#home" 
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="#properties" 
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Properties
                </a>
                <a 
                  href="#about" 
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#services" 
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a 
                  href="#contact" 
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
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
            {currentProperties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
                    {/* Pagination Controls */}
                    <div className="flex justify-center items-center gap-2 mt-12">
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft size={20} />
              Previous
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === page
                      ? "bg-purple-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight size={20} />
            </button>
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
                <p>{OFFICE_PHONE}</p>
                <p>{OFFICE_EMAIL}</p>
                <p>{OFFICER_ADDRESS}</p>
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