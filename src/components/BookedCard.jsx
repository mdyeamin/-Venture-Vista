import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import {
  FiCalendar,
  FiCheckCircle,
  FiEye,
  FiMapPin,
  FiTrash2,
} from "react-icons/fi";
import DeleteBookingModal from "./DeleteBookingModal";

const BookedCard = ({ bookedData }) => {


  return (
    <>
      {bookedData.map((data) => (
        <div key={data._id}>
          <div className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Destination Image */}
            <div className="w-full md:w-72 h-44 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={data.image}
                width={200}
                height={200}
                alt="Bali Paradise"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details Content */}
            <div className="flex-1 w-full">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-bold mb-3">
                <FiCheckCircle size={14} />
                Confirmed
              </div>

              <h2 className="text-3xl font-serif text-gray-900 mb-3">
                {data.name}
              </h2>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <FiCalendar className="text-gray-400" />
                  <span>
                    Departure Date:{" "}
                    {new Date(data.bookingDate).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <FiMapPin className="text-gray-400" />
                  <span>Booking ID: b1</span>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <span className="text-3xl font-bold text-[#1DA1C1]">
                  ${data.price}
                </span>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  
                  <DeleteBookingModal bookingId={data._id}/>
                  <Button
                    variant=""
                    className="flex items-center gap-2 bg-[#1DA1C1] text-white px-6 py-2 rounded-md hover:bg-[#178ba7] transition text-sm font-medium shadow-sm"
                  >
                    <FiEye size={16} /> View
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BookedCard;
