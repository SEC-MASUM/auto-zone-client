import React from "react";

const categories = [
  {
    name: "Bumpers & Components",
    image: "https://i.ibb.co/q7jBpCw/bumpers-and-components.png",
  },
  {
    name: "Fenders & Components",
    image: "https://i.ibb.co/L0BkMYc/fenders-and-components.png",
  },
  {
    name: "Mirrors & Components",
    image: "https://i.ibb.co/0BGJmFJ/mirrors-and-components.png",
  },
  {
    name: "Hoods & Components",
    image: "https://i.ibb.co/SJNjKhq/hoods-and-components.jpg",
  },
  {
    name: "Grilles & Components",
    image: "https://i.ibb.co/pLX9dwH/grilles-and-components.jpg",
  },
  {
    name: "Door Handles,Locks & Accessories",
    image:
      "https://i.ibb.co/JR93Mr5/door-handles-comma-locks-and-accessories.jpg",
  },
  {
    name: "Windows & Components",
    image: "https://i.ibb.co/xfCKxTx/windows-and-components.png",
  },
  {
    name: "Other Auto Body Replacement",
    image: "https://i.ibb.co/mhdn7DS/other-auto-body-replacement.jpg",
  },
  {
    name: "Radiator Support & Components",
    image: "https://i.ibb.co/3sfYzKR/radiator-support-and-components.png",
  },
  {
    name: "Fuel Tanks & Components",
    image: "https://i.ibb.co/HhrNHQP/fuel-tanks-and-components.jpg",
  },
  {
    name: "Switches, Relays, Wiring & Components",
    image:
      "https://i.ibb.co/SJJnqd5/switches-comma-relays-comma-wiring-and-components.png",
  },

  {
    name: "Truck Bed & Tailgate Accessories",
    image: "https://i.ibb.co/dPZscnR/truck-bed-and-tailgate-accessories.jpg",
  },
  {
    name: "Tailgates & Components",
    image: "https://i.ibb.co/Xbmxy23/tailgates-and-components.jpg",
  },
  {
    name: "OE Replica Wheels",
    image: "https://i.ibb.co/ggm1D11/oe-replica-wheels.jpg",
  },
  {
    name: "Windshield, Wipers, Washers, Accessories & Components",
    image:
      "https://i.ibb.co/Z2BgLxr/windshield-comma-wipers-comma-washers-comma-accessories-and-components.jpg",
  },
  {
    name: "Auto Body Styling & Accessories",
    image: "https://i.ibb.co/tBPbbYk/auto-body-styling-and-accessories.jpg",
  },
  {
    name: "Lift Supports & Components",
    image: "https://i.ibb.co/khHVhqW/lift-supports-and-components.png",
  },
  {
    name: "Rocker Panels & Accessories",
    image: "https://i.ibb.co/QrRqBz0/rocker-panels-and-accessories.png",
  },
];
const Categories = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center  font-bold my-12">Categories</h1>
      <div className="place-items-center grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-3 gap-y-6">
        {categories.map((category) => (
          <div
            className="hero group  bg-white  min-w-40 h-40 min-h-fit max-w-xs md:max-w-sm   rounded-xl  shadow-lg hover:shadow-red-500/50 hover:shadow-lg"
            style={{
              backgroundImage: `url(${category.image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "auto",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-overlay rounded-xl group-hover:bg-opacity-90 bg-gray-800 bg-opacity-0"></div>
            <div className="hidden group-hover:block hero-content text-center text-white">
              <p>{category.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Categories;
