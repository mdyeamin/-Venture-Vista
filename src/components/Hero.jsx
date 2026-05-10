import { FiSearch, FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/Banner.png')" }} // পাথ ঠিক করা হয়েছে
      >
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight">
          Discover Your <br /> Next Adventure
        </h1>
        <p className="text-sm md:text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-sm flex items-center gap-2 transition-all uppercase text-sm font-semibold tracking-wider w-full sm:w-auto justify-center">
            Explore Now <FiArrowRight size={18} />
          </button>
          <button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30 px-8 py-3 rounded-sm transition-all uppercase text-sm font-semibold tracking-wider w-full sm:w-auto justify-center">
            View Destination
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 w-full bg-white/10 backdrop-blur-md border-t border-white/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch">
          <div className="grid grid-cols-2 md:grid-cols-4 flex-grow divide-x divide-white/20 border-b md:border-b-0 border-white/20">
            <div className="py-1.5 px-4 hover:bg-white/5 transition-colors cursor-pointer flex flex-col justify-center">
              <p className="text-[9px] uppercase text-gray-300 font-bold leading-tight">
                Location
              </p>
              <p className="text-[11px] font-medium text-white truncate">
                Address, City Or Zip
              </p>
            </div>

            <div className="py-1.5 px-4 hover:bg-white/5 transition-colors cursor-pointer flex flex-col justify-center">
              <p className="text-[9px] uppercase text-gray-300 font-bold leading-tight">
                Date/Duration
              </p>
              <p className="text-[11px] font-medium text-white">
                Anytime/3 Days
              </p>
            </div>

            {/* Budget */}
            <div className="py-1.5 px-4 hover:bg-white/5 transition-colors cursor-pointer flex flex-col justify-center">
              <p className="text-[9px] uppercase text-gray-300 font-bold leading-tight">
                Budget
              </p>
              <p className="text-[11px] font-medium text-white">$0-$3000</p>
            </div>

            {/* People */}
            <div className="py-1.5 px-4 hover:bg-white/5 transition-colors cursor-pointer flex flex-col justify-center">
              <p className="text-[9px] uppercase text-gray-300 font-bold leading-tight">
                People
              </p>
              <p className="text-[11px] font-medium text-white">5-10</p>
            </div>
          </div>

          {/* Search Button */}
          <button className="bg-cyan-500 hover:bg-cyan-600 transition-all flex items-center justify-center py-2.5 md:px-8 w-full md:w-auto group">
            <span className="text-xs font-bold uppercase tracking-widest mr-2">
              Search
            </span>
            <FiSearch
              size={14}
              className="group-hover:scale-110 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;