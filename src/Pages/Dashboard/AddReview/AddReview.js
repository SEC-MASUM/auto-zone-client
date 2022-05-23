import React from "react";

const AddReview = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.review?.value, event.target.rating?.value);
  };

  return (
    <div>
      {" "}
      h-10 w-10
      <div class="hero">
        <div class="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
          <div class="card-body">
            <h1 className="text-2xl font-bold text-primary">Add review</h1>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div class="form-control justify-center items-center space-x-2">
                <label class="label">
                  <span class="label-text text-xl font-semibold">
                    Give Ratings out of 5
                  </span>
                </label>
                <div class="rating">
                  <input
                    type="radio"
                    name="rating"
                    value="1"
                    class="mask mask-star-2   h-10 w-10
 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating"
                    value="2"
                    class="mask mask-star-2   h-10 w-10
 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating"
                    value="3"
                    class="mask mask-star-2   h-10 w-10
 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating"
                    value="4"
                    class="mask mask-star-2   h-10 w-10
 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating"
                    value="5"
                    class="mask mask-star-2   h-10 w-10
 bg-orange-400"
                  />
                </div>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Opinion</span>
                </label>
                <textarea
                  name="review"
                  class="textarea textarea-bordered"
                  type="text"
                  placeholder="What to you want to say about us?"
                  required
                />
              </div>
              <div class="form-control mt-6">
                <button type="submit" class="btn btn-primary">
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
