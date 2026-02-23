import { Phone, Mail, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-purple-900 to-purple-700 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1649769425782-8cdb757da2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlJTIwaG91c2V8ZW58MXx8fHwxNzY0MTMzOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury Real Estate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-purple-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <h1 className="mb-6">Professional Property Management Services</h1>
          <p className="text-xl mb-8 text-purple-100">
          Maximize your investment returns with Purple Stone Real Estate's comprehensive property management solutions. We handle everything from tenant screening and rent collection to maintenance and compliance, 
          so you can enjoy hassle-free property ownership.
          </p>
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <span>1300 312 524</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <span>admin@purplestonerealestate.com.au</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Officer, Melbourne</span>
            </div>
          </div>
          <a href="#contact" className="bg-white text-purple-900 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors">Get a Free Rental Appraisal</a>
          {/* <button className="bg-white text-purple-900 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors">
            Contact Me Today
          </button> */}
        </div>
      </div>
    </div>
  );
}