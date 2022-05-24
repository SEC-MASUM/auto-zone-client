import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../Firebase/Firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.review?.value, event.target.rating?.value);
    const review = {
      userName: user.displayName,
      email: user.email,
      rating: event.target.rating?.value,
      review: event.target.review?.value,
    };
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.insertedId) {
          toast.success("Review added successfully");
          event.target.reset();
        } else {
          toast.error("Failed to add the review");
        }
      });
  };

  return (
    <div>
      <div className="hero">
        <div className="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-2xl font-bold text-primary">Add review</h1>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="form-control justify-center items-center space-x-2">
                <label className="label">
                  <span className="label-text text-xl font-semibold">
                    Give Ratings out of 5
                  </span>
                </label>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating"
                    value="1"
                    className="mask mask-star-2  h-10 w-10 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating"
                    value="2"
                    className="mask mask-star-2   h-10 w-10 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating"
                    value="3"
                    className="mask mask-star-2   h-10 w-10 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating"
                    value="4"
                    className="mask mask-star-2   h-10 w-10 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating"
                    value="5"
                    className="mask mask-star-2   h-10 w-10 bg-orange-400"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Opinion</span>
                </label>
                <textarea
                  name="review"
                  className="textarea textarea-bordered"
                  type="text"
                  placeholder="What to you want to say about us?"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
