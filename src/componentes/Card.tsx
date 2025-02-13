const stays = [
  {
    name: "Brightwoods Cabin",
    location: "Bridlepath, Ontario, Canada",
    price: "$658",
    rating: 4.9,
    imageUrl: "../img/image (1).png",
  },
  {
    name: "Urban Loft",
    location: "Georgina Bay, Ontario, Canada",
    price: "$410",
    rating: 4.5,
    imageUrl: "../img/image (2).png",
  },
  {
    name: "Forestville Cottages",
    location: "Simcoe, Ontario Canada",
    price: "$325",
    rating: 5.0,
    imageUrl: "../img/image (3).png",
  },
  {
    name: "Unionville Lodge",
    location: "Markham, Ontario Canada",
    price: "$485",
    rating: 4.6,
    imageUrl: "../img/img-11.png",
  },
  {
    name: "Sunset Retreat",
    location: "Niagara, Ontario, Canada",
    price: "$350",
    rating: 4.7,
    imageUrl: "../img/image (5).png",
  },
  {
    name: "Lakeview Haven",
    location: "Muskoka, Ontario, Canada",
    price: "$575",
    rating: 4.8,
    imageUrl: "../img/image (6).png",
  },
  {
    name: "Mountain Escape",
    location: "Blue Mountain, Ontario, Canada",
    price: "$600",
    rating: 4.9,
    imageUrl: "../img/image (7).png",
  },
  {
    name: "Downtown Condo",
    location: "Toronto, Ontario, Canada",
    price: "$700",
    rating: 4.5,
    imageUrl: "../img/image (8).png",
  },
  {
    name: "Cedarwood Cabin",
    location: "Algonquin, Ontario, Canada",
    price: "$480",
    rating: 4.7,
    imageUrl: "../img/image (9).png",
  },
  {
    name: "Riverside Bungalow",
    location: "Guelph, Ontario, Canada",
    price: "$365",
    rating: 4.6,
    imageUrl: "../img/image (10).png",
  },
  {
    name: "Lakeshore Villa",
    location: "Kingston, Ontario, Canada",
    price: "$550",
    rating: 4.9,
    imageUrl: "../img/image (11).png",
  },
  {
    name: "Garden Cottage",
    location: "Stratford, Ontario, Canada",
    price: "$430",
    rating: 4.8,
    imageUrl: "../img/image (12).png",
  },
  {
    name: "Hillside Retreat",
    location: "Cambridge, Ontario, Canada",
    price: "$390",
    rating: 4.5,
    imageUrl: "../img/image (13).png",
  },
  {
    name: "Seaside Getaway",
    location: "Port Hope, Ontario, Canada",
    price: "$520",
    rating: 4.9,
    imageUrl: "../img/image (9).png",
  },
  {
    name: "Vintage Loft",
    location: "Kitchener, Ontario, Canada",
    price: "$450",
    rating: 4.6,
    imageUrl: "../img/image (11).png",
  },
  {
    name: "Rustic Barnhouse",
    location: "Waterloo, Ontario, Canada",
    price: "$480",
    rating: 4.7,
    imageUrl: "../img/image (7).png",
  },
];

const StaysNearby = () => {
  return (
    <a href="#estate">
      <div className="p-8">
        <h1 className="text-xl font-bold mb-4">
          Stays nearby: Toronto Ontario
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {stays.map((stay, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src={stay.imageUrl}
                alt={stay.name}
                className="rounded-t-lg w-full h-80 object-cover"
              />
              <div className="mt-2">
                <h2 className="font-semibold text-lg">{stay.name}</h2>
                <p className="text-gray-500">{stay.location}</p>
                <p className="font-bold text-xl">{stay.price}/night</p>
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${
                        i < stay.rating ? "fill-current" : "text-gray-300"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 15l-5 3 1-6-5-5h7L10 1l2 6h7l-5 5 1 6-5-3z" />
                    </svg>
                  ))}
                  <span className="ml-2">{stay.rating}</span>
                </div>
                <button className="mt-2 text-teal-500">Price chart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </a>
  );
};

export default StaysNearby;
