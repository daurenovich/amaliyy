import React from "react";

export default function Hero() {
  return (
    <div
      className="  relative w-full h-[250px] flex items-center  bg-center bg-no-repeat bg-cover "
      style={{
        backgroundImage: "url('../img/img-2-23.png')",
      }}
    >
      <div className="text-start ml-10 mt-[-100px] ">
        <h1 className="text-3xl font-bold text-gray-900">
          Find a <span className="text-green-500">host</span> for every journey
        </h1>
        <p className="text-gray-600">
          Discover the best local rental properties that fit your every travel
          need
        </p>
      </div>

      <div className="absolute bottom-[50px] ml-10 transform  w-[1350px]  bg-white rounded-lg  p-2 flex gap-2">
        <input
          type="text"
          placeholder="Accommodation"
          className="flex-1 p-3 border rounded-md"
        />
        <input type="date" className="p-3 border rounded-md" />
        <input type="date" className="p-3 border rounded-md" />
        <input
          type="number"
          placeholder="Guest"
          className="p-3 border rounded-md w-20"
        />
        <button className="bg-green-500 text-white px-6 py-3 rounded-md flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M19.707 18.293l-5.63-5.63a8 8 0 10-1.414 1.414l5.63 5.63a1 1 0 001.414-1.414zM8 14a6 6 0 110-12 6 6 0 010 12z"></path>
          </svg>
          Search
        </button>
      </div>
    </div>
  );
}
