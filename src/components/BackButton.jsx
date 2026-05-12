'use client'
import { useRouter } from "next/navigation";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";

const BackButton = () => {
    const router = useRouter()
  return (
    <div>
      <button onClick={()=> router.back()} className="flex items-center gap-2 text-gray-600 hover:text-black transition">
        <FiArrowLeft /> Back to Destinations
      </button>
    </div>
  );
};

export default BackButton;
