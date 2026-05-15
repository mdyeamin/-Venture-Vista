import BackButton from "@/components/BackButton";
import Booking from "@/components/Booking";
import DeleteModal from "@/components/DeleteModal";
import EditModal from "@/components/EditModal";
import { getSingleDestinationsById } from "@/lib/data";
import Image from "next/image";
import { FiMapPin, FiStar, FiCalendar, FiCheck } from "react-icons/fi";

const Details = async ({ params }) => {
  const { id } = await params;
  const destination = await getSingleDestinationsById(id);
  const { name, country, category, price, duration, date, image, description } =
    destination;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white min-h-screen font-sans">
      {/* Top Navigation / Action Bar */}
      <div className="flex justify-between items-center mb-6">
        <BackButton />
        <div className="flex gap-3">
          <EditModal destination={destination} />
          <DeleteModal destination={destination} />
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="relative w-full h-[450px] rounded-xl overflow-hidden mb-8 shadow-lg">
        <Image
          src={image}
          width={500}
          height={500}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column: Details */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 text-gray-500 mb-2">
            <FiMapPin className="text-[#1DA1C1]" />
            <span className="text-sm">{country}</span>
          </div>

          <h1 className="text-5xl font-serif text-gray-900 mb-4">{name}</h1>

          <div className="flex items-center gap-6 mb-8 text-gray-700">
            <div className="flex items-center gap-1">
              <FiStar className="text-green-600 fill-green-600" />
              <span className="font-bold text-gray-900">4.9</span>
              <span className="text-gray-500">(234 reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCalendar className="text-gray-500" />
              <span className="font-medium text-gray-900">{duration}</span>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Overview
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {description}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">
              Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10">
              {[
                "Luxury beachfront accommodation",
                "Traditional Balinese spa treatment",
                "Sunrise trek to Mount Batur",
                "Visit Uluwatu Temple at sunset",
                "Private beach dinner experience",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-600"
                >
                  <FiCheck className="text-[#1DA1C1] text-xl" />
                  <span className="text-md">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Booking Card */}
        <Booking destination={destination} />
      </div>
    </div>
  );
};

export default Details;
