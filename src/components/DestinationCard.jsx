import Image from 'next/image';
import React from 'react';

const DestinationCard = ({destination}) => {

    const {name,category,price,duration,date,country,image,description} = destination
    return (
        <div>
            <div  className="group cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-sm mb-4">
        <Image src={image}
          width={200}
          height={200}
          alt={name}
         
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        {/* Rating Tag */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-sm flex items-center gap-1 shadow-sm">
          <span className="text-sm font-bold text-gray-800">4.5</span>
          <svg className="w-3 h-3 text-black fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-3">
        <div className="flex items-center text-gray-500 gap-1 text-[13px]">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          <span>{country}</span>
        </div>

        <div className="flex justify-between items-start">
          <h3 className="text-xl font-medium text-gray-900 tracking-tight">{name}</h3>
          <div className="text-right">
            <span className="text-xl font-bold text-gray-900">${price}</span>
            <span className="text-gray-400 text-xs font-light">/Person</span>
          </div>
        </div>

        <div className="flex items-center text-gray-500 gap-2 text-[13px]">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          <span>{duration}</span>
        </div>

        <div className="pt-2">
          <button className="text-[#1DA1C1] text-sm font-bold tracking-widest border-b-2 border-[#1DA1C1] pb-0.5 flex items-center gap-2 hover:text-[#178ba7] hover:border-[#178ba7] transition-all uppercase">
            Book Now 
            <svg className="w-4 h-4 rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
          </button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default DestinationCard;