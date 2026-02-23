import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to maximize your rental property investment? Contact Purple Stone Real Estate today for a free property analysis and consultation.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Speak directly with our property management team</p>
            <a href="tel:1300312524" className="text-purple-600 hover:text-purple-700 font-medium">
            1300 312 524
            </a>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">Send us your property details and questions</p>
            <a href="mailto:admin@purplestonerealestate.com.au" className="text-purple-600 hover:text-purple-700 font-medium">
              admin@purplestonerealestate.com.au
            </a>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-4">Stop by our office for a consultation</p>
            <p className="text-purple-600 font-medium">
              Suite 330, Level 2<br />66 Victor Cresent, Narre Warren VIC 3805
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-purple-600 p-8 rounded-lg text-white">
            <Clock className="w-12 h-12 mb-4" />
            <h3 className="mb-4">Office Hours</h3>
            <div className="space-y-2">
              <p className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday:</span>
                <span>By Appointment</span>
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg border-2 border-purple-600">
            <MessageSquare className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="mb-4">Property Management Inquiries</h3>
            <p className="text-gray-700 mb-6">
              Interested in our property management services? Reach out to discuss how we can help maximize your rental property returns.
            </p>
            <div className="space-y-3">
              <a 
                href="tel:1300312524"
                className="block w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors text-center"
              >
                Call for Free Consultation
              </a>
              <a 
                href="mailto:info@purplestone.com?subject=Property Management Inquiry"
                className="block w-full bg-white text-purple-600 border-2 border-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors text-center"
              >
                Email Your Questions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}