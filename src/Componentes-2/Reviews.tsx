import React from "react";

const reviewsData = [
  {
    id: 1,
    name: "Johnny Cash",
    date: "June 2023",
    rating: 5.0,
    review:
      "Michelles place was so great and definitely the perfect place for our long weekend. The lake is amazing!",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Yuta Watanabe",
    date: "May 2023",
    rating: 4.5,
    review:
      "The location is perfect. I love the lake so much!!! This is one of the best stays we had for a while. Definitely recommended.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Shane Willis",
    date: "December 2022",
    rating: 4.8,
    review:
      "A great place overall. One of the nicest places in town for sure. I will come back in the next few months with my family :)",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
];

const Reviews = () => {
  return (
    <div className="max-w-6xl mx-auto my-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Reviews</h2>
        <a href="#" className="text-teal-500 font-semibold">
          View all
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {reviewsData.map((review) => (
          <div
            key={review.id}
            className="p-4 border rounded-lg shadow-sm bg-white"
          >
            <div className="flex items-center space-x-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold">{review.name}</h3>
                <p className="text-gray-500 text-sm">{review.date}</p>
              </div>
              <span className="ml-auto text-yellow-500 font-semibold">
                {review.rating} ⭐
              </span>
            </div>
            <p className="mt-3 text-gray-700">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
