import React from "react";

const Review = ({ oneReview }) => {
  const { userName, rating, review, email } = oneReview;
  console.log(oneReview);
  return (
    <div className="h-[60vh] w-full overflow-hidden flex flex-nowrap text-center">
      <div class=" text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
        <div >
          <div class=" text-9xl text-red-600 text-left leading-10 h-5">“</div>
          <p class="max-w-md text-sm text-center px-5">{oneReview.review}</p>
          <div class=" text-9xl text-red-600 text-right leading-none h-10 -mt-4">
            ”
          </div>
        </div>
        <div class="w-full">
          <p class="text-md text-red-600 font-bold text-center">{userName}</p>
          <p class="text-xs text-gray-500 text-center">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
