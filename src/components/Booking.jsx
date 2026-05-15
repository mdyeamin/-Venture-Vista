"use client";
import { authClient } from "@/lib/auth-client";
import { Calendar } from "@gravity-ui/icons";
import { InputGroup, Label, TextField } from "@heroui/react";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const Booking = ({ destination }) => {
  const [dateValue, setDateValue] = useState(null);
  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  const { price, name, _id, image, duration, description, country, category } =
    destination;

  const handleBooking = async () => {
    if (dateValue === null) {
      alert("Please pick a Date");
      return;
    }
    const bookingData = {
      userName: user?.name,
      email: user?.email,
      userId: user?.id,
      userImage: user?.image,
      // destination information below
      bookingDate: new Date(dateValue),
      name,
      price,
      image,
      description,
      destinationId: _id,
      country,
      category,
    };

    const res = await fetch("http://localhost:8000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data =await res.json();
    console.log("after Booking", data);
    if(res.ok){
      redirect("/my-bookings")
    }
  };

  return (
    <div className="lg:col-span-1">
      <div className="border border-gray-100 rounded-2xl p-8 shadow-xl bg-white sticky top-10">
        <p className="text-gray-500 text-sm">Starting from</p>
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-4xl font-bold text-[#1DA1C1]">${price}</span>
          <span className="text-gray-500">/ person</span>
        </div>

        <div className="mb-6">
          <TextField
            defaultValue={dateValue}
            onChange={setDateValue}
            className="w-full max-w-[280px]"
            type="date"
            name="date"
          >
            <Label>Departure Date</Label>
            <InputGroup>
              <InputGroup.Prefix>
                <Calendar className="size-4 text-muted" />
              </InputGroup.Prefix>
              <InputGroup.Input className="w-full max-w-[280px]" />
            </InputGroup>
          </TextField>
        </div>

        <button
          onClick={handleBooking}
          className="w-full bg-[#1DA1C1] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#178ba7] transition-all mb-6"
        >
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
  );
};

export default Booking;
