import BackButton from "@/components/BackButton";
import EditModal from "@/components/EditModal";
import { getSingleDestinationsById } from "@/lib/data";
import Image from "next/image";
import {
  FiArrowLeft,
  FiEdit,
  FiTrash2,
  FiMapPin,
  FiStar,
  FiCalendar,
  FiCheck,
  FiArrowRight,
} from "react-icons/fi";

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
          <button className="flex items-center gap-2 border border-red-200 text-red-500 px-4 py-1.5 rounded-md hover:bg-red-50 transition">
            <FiTrash2 size={16} /> Cancel
          </button>
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
        <div className="lg:col-span-1">
          <div className="border border-gray-100 rounded-2xl p-8 shadow-xl bg-white sticky top-10">
            <p className="text-gray-500 text-sm">Starting from</p>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-bold text-[#1DA1C1]">
                ${price}
              </span>
              <span className="text-gray-500">per person</span>
            </div>

            <div className="mb-6">
              <div className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-700">
                {date}
              </div>
            </div>

            <button className="w-full bg-[#1DA1C1] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#178ba7] transition-all mb-6">
              Book Now <FiArrowRight />
            </button>

            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-xs text-green-700">
                <FiCheck /> Free cancellation up to 7 days
              </li>
              <li className="flex items-center gap-2 text-xs text-green-700">
                <FiCheck /> Travel insurance included
              </li>
              <li className="flex items-center gap-2 text-xs text-green-700">
                <FiCheck /> 24/7 customer support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
