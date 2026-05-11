import DestinationCard from "@/components/DestinationCard";
import { getDestinations } from "@/lib/data";
import { Label, ListBox, Select } from "@heroui/react";

const Destinations = async () => {
  const destinations = await getDestinations();
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-12 bg-white font-sans">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[42px] font-light text-[#111] mb-1 tracking-tight">
            Explore All Destinations
          </h1>
          <p className="text-gray-500 text-[15px]">
            Find your perfect travel experience from our curated collection
          </p>
        </div>

        {/* Filter Bar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-300 rounded-sm divide-y md:divide-y-0 md:divide-x divide-gray-300">
          {/* Category Select */}
          <Select className="w-full">
            <Select.Trigger className="h-[60px] px-6 bg-white hover:bg-gray-50 border-none shadow-none rounded-none outline-none ring-0 transition-colors flex items-center justify-between">
              <Label className="text-[13px] font-normal text-gray-500 uppercase tracking-widest">
                Category
              </Label>
              <Select.Indicator className="text-gray-400" />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="beach">Beach</ListBox.Item>
                <ListBox.Item id="mountain">Mountain</ListBox.Item>
                <ListBox.Item id="city">City</ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          {/* Price Range Select */}
          <Select className="w-full">
            <Select.Trigger className="h-[60px] px-6 bg-white hover:bg-gray-50 border-none shadow-none rounded-none outline-none ring-0 transition-colors flex items-center justify-between">
              <Label className="text-[13px] font-normal text-gray-500 uppercase tracking-widest">
                Price Range
              </Label>
              <Select.Indicator className="text-gray-400" />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="low">$0 - $500</ListBox.Item>
                <ListBox.Item id="mid">$500 - $1500</ListBox.Item>
                <ListBox.Item id="high">$1500+</ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          {/* Sort By Select */}
          <Select className="w-full">
            <Select.Trigger className="h-[60px] px-6 bg-white hover:bg-gray-50 border-none shadow-none rounded-none outline-none ring-0 transition-colors flex items-center justify-between">
              <Label className="text-[13px] font-normal text-gray-500 uppercase tracking-widest">
                Sort By
              </Label>
              <Select.Indicator className="text-gray-400" />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="newest">Newest First</ListBox.Item>
                <ListBox.Item id="low-high">Price: Low to High</ListBox.Item>
                <ListBox.Item id="high-low">Price: High to Low</ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
        </div>

        {/* Footer Text */}
        <div className="mt-4">
          <p className="text-gray-500 text-[13px]">
            Showing {destinations.length} destinations
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 bg-white py-10">
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination}/>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
