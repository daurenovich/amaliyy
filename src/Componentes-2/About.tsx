import React from "react";

const About = () => {
  return (
    <div className="p-8">
      {/* About this home */}
      <div className=" mx-auto flex">
        <div className="">
          <h2 className="text-2xl font-bold mb-2">About this home</h2>
          <p className="text-gray-600">
            Welcome to Brightwoods Cabin, your idyllic retreat nestled in the
            heart of Bridlepath, Ontario! Our cozy cabin, <br /> surrounded by
            the tranquility of nature's embrace, is designed to provide the
            ultimate relaxing getaway.
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Living Space:</strong> This charming cabin boasts a spacious
            living area adorned with rustic decor and modern amenities. <br />
            Enjoy the warmth of the wood-burning fireplace, relax on the plush
            sofas, and make yourself at home with our <br /> entertainment
            center featuring a flat-screen TV, WiFi, and more.
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Bedrooms:</strong> With 3 beautifully appointed bedrooms,
            our cabin comfortably accommodates up to [number of guests]. <br />
            Each room is furnished with luxurious bedding and unique
            woodland-inspired touches to ensure a restful slumber.
          </p>
          <button className="mt-2 text-teal-500 font-semibold">
            Show more
          </button>
        </div>
        <div className="space-y-4 ml-[200px]">
          <div className="flex items-center space-x-4 p-4">
            <span className="text-xl">📋</span>
            <div>
              <h3 className="font-bold">Dedicated workspace</h3>
              <p className="text-gray-600">A private room equipped with WiFi</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4">
            <span className="text-xl">📲</span>
            <div>
              <h3 className="font-bold">Self check-in</h3>
              <p className="text-gray-600">Check in with just your phone</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4">
            <span className="text-xl">✅</span>
            <div>
              <h3 className="font-bold">Free cancellation</h3>
              <p className="text-gray-600">Cancel anytime</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        {/* Amenities */}
        <div className=" mx-auto mt-8">
          <h2 className="text-xl font-bold mb-2">Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600">
            <span>✅ Lakeside</span>
            <span>✅ Free parking</span>
            <span>✅ Fire Extinguisher</span>
            <span>✅ Kitchen</span>
            <span>✅ Outdoor shower</span>
            <span>✅ Freezer</span>
            <span>✅ Security cameras on property</span>
            <span>✅ Hot water</span>
            <span>✅ Coffee Maker</span>
            <span>✅ Wifi</span>
            <span>✅ Shampoo</span>
            <span>✅ Glass stove</span>
          </div>
          <button className="mt-4 px-4 py-2 border border-gray-400 rounded-md text-black">
            Show all amenities
          </button>
        </div>

        {/* Extra Info */}
        <div className=" mt-8 grid grid-cols-1 mr-[200px] ">
          {/* Features */}

          {/* Map */}
          <div>
            <h2 className="text-xl font-bold mb-2">Where you’ll be</h2>
            <p className="text-gray-600">📍 The Bridle Path</p>
            <div className="mt-2">
              <img
                src="../img/Rectangle 1.png"
                alt="Map"
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
            <p className="mt-2 text-gray-500">🌤️ 20°C - Broken clouds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
