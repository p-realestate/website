import { Bed, Bath, Maximize } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PropertyCardProps {
  image: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
  status: "For Sale" | "For Rent" | "Sold";
}

export function PropertyCard({ 
  image, 
  title, 
  price, 
  location, 
  beds, 
  baths, 
  sqft, 
  status 
}: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative">
        <ImageWithFallback 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover"
        />
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white ${
          status === "For Sale" ? "bg-purple-600" : 
          status === "For Rent" ? "bg-green-600" : 
          "bg-gray-600"
        }`}>
          {status}
        </div>
      </div>
      <div className="p-6">
        <div className="text-purple-600 mb-2">{price}</div>
        <h3 className="mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{location}</p>
        <div className="flex items-center gap-4 text-gray-700">
        { beds > 0 && (
          <div className="flex items-center gap-1">
            <Bed size={20} />
            <span>{beds} Beds</span>
          </div>
          ) }
          { baths > 0 && (
            <div className="flex items-center gap-1">
              <Bath size={20} />
              <span>{baths} Baths</span>
            </div>
          ) }
          <div className="flex items-center gap-1">
            <Maximize size={20} />
            <span>{sqft}</span>
          </div>
        </div>
      </div>
    </div>
  );
}