import React from "react";

const Review = ({ oneReview }) => {
  const { userName, rating, review } = oneReview;
  // console.log(rating);
  return (
    <div className="py-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-5">
          <div class="avatar">
            <div class="w-16 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=92310" alt="" />
            </div>
          </div>
          <h2 className="text-lg font-semibold text-gray-600">{userName}</h2>
        </div>
        <p className="rating flex items-center space-x-2">
          <span className="text-xl ">{rating}</span>
          <span className="mask mask-star-2 h-5 w-5 bg-orange-400"></span>
        </p>
      </div>
      <p class=" text-justify mt-2">{review}</p>
    </div>
  );
};

export default Review;
