import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Users, Key, TrendingUp } from "lucide-react";
import profile from "figma:asset/danny.jpg";

export function About() {
  const stats = [
    { icon: Key, value: "100+", label: "Properties Rented" },
    { icon: Users, value: "150+", label: "Happy Clients" },
    { icon: Award, value: "4+", label: "Years Experience" },
    { icon: TrendingUp, value: "98%", label: "Occupancy Rate" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">About Your Agent</h2>
            <p className="text-gray-700 mb-4">
              Meet Danny Ferdinandusz, Danny is a dedicated property management professional at Purple Stone Real Estate with a passion for maximizing property investments and creating positive rental experiences. 
              With nearly 4 years of specialized experience in rental property management, he brings expertise in tenant relations, property maintenance, and investment optimization to every property he manages
            </p>
            <p className="text-gray-700 mb-6">
              His approach is built on three pillars: proactive property maintenance, thorough tenant screening, and transparent communication. He handles every aspect of rental management from marketing vacancies 
              and conducting showings to collecting rent and coordinating repairs, allowing property owners to enjoy passive income without the day-to-day hassles. 
              Whether you're a first-time landlord or an experienced investor, He is here to protect your investment and ensure your property reaches its full potential.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-lg text-center">
                  <stat.icon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-purple-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <ImageWithFallback
              src={profile}
              alt="Danny Ferdinanduz"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}