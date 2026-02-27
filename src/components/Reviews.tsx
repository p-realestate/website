import { Star } from "lucide-react";

interface Review {
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
}

export function Reviews() {
  const reviews: Review[] = [
    {
      name: "Dr. Abhishek Katoch",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjV-4l3IFrkT6he0U8fE4MuEM3fEvH5_k4OwiGvl-X6PazaTM61_=s64-c-rp-mo-br100",
      rating: 5,
      date: "2 weeks ago",
      text: "Fantastic real estate agents! Danny is very professional and genuinely friendly—an all-around great guy. I would highly recommend him.",
    },
    {
      name: "Chittima Phakdee",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUS-0grXmoZPvTLqntWrpDnyshs1oVKeeyzRFBpIIhi6ThUPaO4=s64-c-rp-mo-br100",
      rating: 5,
      date: "3 month ago",
      text: "Very helpful and made looking for a rental property less stressfull. Kudos to both Danny and Nuwan for their excellent service",
    },
    {
      name: "Shelly Turner",
      avatar: "https://lh3.googleusercontent.com/a/ACg8ocJWQ_BMFC813vrftEEqRBKr0OYPbPCXqy1xM4_XiXfdjIjmoA=s64-c-rp-mo-br100",
      rating: 5,
      date: "10 weeks ago",
      text: "Danny has been a fantastic agent, helping us with our rental property. He's incredibly professional, approachable, and easy to communicate with. We're very happy with the service he’s provided.",
    },
    {
      name: "Lisa Bolitho",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXDv8u8EFJ3LiqvcEBPpDcJZVzAPvKl_LxX95yb4TouGhWDIFvm=s64-c-rp-mo-ba3-br100",
      rating: 5,
      date: "10 months ago",
      text: "Fantastic Realestate Agents, Danny is extremely professional and a friendly nice guy. Would highly recommend",
    },
    {
      name: "Nerelle Foster",
      avatar: "https://lh3.googleusercontent.com/a/ACg8ocJPnaUBpeMH497hj1RqNfc5aAJSxLEfOR_EVP0duGipR04Liw=s64-c-rp-mo-br100",
      rating: 5,
      date: "10 months ago",
      text: "Great agent, very friendly and accomodating.",
    },
    {
      name: "Kylie Maiden",
      avatar: "https://lh3.googleusercontent.com/a/ACg8ocIHecXWkTHi6MT-c4CtdPb164ZRbdsiFScUOa8eepTuovD5Zw=w72-h72-p-rp-mo-br100",
      rating: 4,
      date: "10 months ago",
      text: "We rent through this realestate, they are very helpful",
    },
  ];

  const averageRating = 4.9;
  const totalReviews = 7;

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={`${
              index < rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-300 text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-8 h-8" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <h2 className="mb-0">Google Reviews</h2>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-2">
            {renderStars(4.9)}
            <span className="text-2xl font-bold text-gray-900">{averageRating}</span>
          </div>
          
          <p className="text-gray-600">
            Based on {totalReviews} reviews
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {review.name}
                  </h4>
                  <div className="flex items-center gap-2">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-3 line-clamp-4">{review.text}</p>
              
              <p className="text-sm text-gray-400">{review.date}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=purple+stone+real+estate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-lg border-2 border-gray-300 hover:border-purple-600 hover:text-purple-600 transition-colors font-semibold"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            See All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
