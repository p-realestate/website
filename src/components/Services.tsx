import {
  Home,
  Search,
  FileText,
  Handshake,
  TrendingUp,
  Shield,
  Key,
  CheckCircle,
  Calendar,
  Users,
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Search,
      title: "Property Search",
      description:
        "Find the perfect rental property that matches your budget, location, and lifestyle preferences.",
    },
    {
      icon: Key,
      title: "Tenant Placement",
      description:
        "Comprehensive tenant screening and placement services to find reliable, qualified renters for your property.",
    },
    {
      icon: FileText,
      title: "Lease Management",
      description:
        "Professional lease agreement preparation and management to protect your interests and ensure compliance.",
    },
    {
      icon: Handshake,
      title: "Landlord Representation",
      description:
        "Expert representation for property owners to maximize rental income and minimize vacancies.",
    },
    {
      icon: Calendar,
      title: "Property Showings",
      description:
        "Flexible scheduling and professional property tours to help you find or rent out properties quickly.",
    },
    {
      icon: CheckCircle,
      title: "Move-In Coordination",
      description:
        "Seamless move-in process management including inspections, documentation, and key handover.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">My Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Specialized rental property services for both
            tenants seeking the perfect home and landlords
            looking to maximize their investment.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="mb-2">{service.title}</h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}