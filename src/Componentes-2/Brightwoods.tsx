import React from "react";

const BookingCard = () => {
  return (
    <div id="estate" className="flex max-w-7xl mx-auto bg-white  p-6 ">
      {/* Top Image */}
      <img
        className="w-[800px] h-[500px] object-cover rounded-lg"
        src="../img/Frame 9.png"
        alt="Brightwoods Cabin"
      />

      {/* Details */}
      <div className="mt-6 ml-8">
        <h2 className="text-2xl font-bold">Brightwoods Cabin</h2>
        <p className="text-gray-500">Bridlepath, Ontario, Canada</p>
        <div className=" items-center gap-1  mt-1">
          <span className="text-lg font-bold text-yellow-500">5.0</span>
          <span>⭐</span>
          <a href="#" className="text-teal-500">
            200 Reviews
          </a>
          <p>
            Welcome to our cozy cabin retreat nestled in the heart of <br />
            Bridlepath, Ontario! Surrounded by lush landscapes and tranquil{" "}
            <br />
            trails, this charming getaway offers the perfect blend of rustic{" "}
            <br />
            elegance and modern comfort.
          </p>
        </div>

        {/* Pricing */}
        <p className="text-3xl font-bold mt-4">
          $658 <span className="text-lg">/night</span>
        </p>
        <button className="mt-4 w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600">
          Book this home
        </button>

        {/* Host Info */}
        <div className="mt-6 items-center  pt-4">
          <img
            src="../img/Ellipse 2.png"
            alt="host"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-semibold">Michelle Ward</p>
            <p className="text-gray-500 text-sm">Joined in May 2021</p>
          </div>
          <span className="ml-auto text-teal-500">🌟 Superhost</span>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
