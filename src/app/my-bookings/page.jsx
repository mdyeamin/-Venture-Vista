import BookedCard from "@/components/BookedCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Suspense } from "react";


const MyBookings = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const { user } = session;

  const res = await fetch(`http://localhost:8000/booking/${user?.id}`);
  const bookedData = await res.json();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen font-sans">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-serif text-gray-800 mb-2">My Bookings</h1>
        <p className="text-gray-500">
          Manage and view your upcoming travel plans
        </p>
      </div>

      {/* Booking Card Item */}
      <Suspense fallback="Loading...">
        <BookedCard bookedData={bookedData} />
      </Suspense>
    </div>
  );
};

export default MyBookings;
