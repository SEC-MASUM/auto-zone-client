import React from "react";
import { AiFillPieChart } from "react-icons/ai";
import { IoMdSpeedometer } from "react-icons/io";

const AddProduct = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="bg-gray-100 shadow-lg  rounded-3xl p-5">
          <h1 className="text-2xl font-bold text-primary pb-5">Add Product</h1>
          <div className="flex-none grid sm:grid-cols-1 md:grid-cols-2 gap-5">
            <div className="w-full">
              <img
                src="https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                alt="Just a flower"
                className="w-full h-full object-scale-down lg:object-cover  rounded-2xl"
              />
            </div>
            <div className="w-full py-2">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  class="input input-bordered w-full max-w-xs"
                />
                <label class="label">
                  <span class="label-text-alt">Alt label</span>
                </label>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Product Decsription</span>
                </label>
                <textarea
                  class="textarea textarea-bordered h-24"
                  placeholder="Decsription"
                ></textarea>
                <label class="label">
                  <span class="label-text-alt">Your bio</span>
                </label>
              </div>

              <div className="flex gap-5 py-4  text-sm font-medium text-gray-500">
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text flex gap-2">
                      Minimum Order{" "}
                      <IoMdSpeedometer className="h-5 w-5 text-gray-400" />
                    </span>
                  </label>

                  <input
                    type="number"
                    defaultValue="1"
                    min="1"
                    class="input input-sm input-bordered w-full max-w-xs"
                  />
                </div>
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text flex gap-2">
                      Available Qty{" "}
                      <AiFillPieChart className="h-5 w-5 text-gray-400" />
                    </span>
                  </label>

                  <input
                    type="number"
                    defaultValue="0"
                    min="0"
                    class="input input-sm input-bordered w-full max-w-xs"
                  />
                </div>
              </div>

              <div className="flex space-x-3 text-sm font-medium">
                <div className="bg-white px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                  <span className="font-medium">Price</span>
                  <input
                    type="number"
                    name="price"
                    placeholder="$"
                    min="1"
                    max="10000000"
                    className="input input-sm rounded-full font-medium bg-red-500 text-lg text-white max-w-xs "
                  />
                </div>
                <div className="bg-white px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                  <span className="font-medium">Discount</span>
                  <input
                    type="number"
                    name="discount"
                    placeholder="%"
                    min="0"
                    max="100"
                    className="input input-sm rounded-full font-medium bg-accent text-lg text-secondary max-w-xs "
                  />
                </div>
              </div>
              <div className="flex my-2 border-t-2 border-t border-gray-300"></div>
              <input
                type="file"
                className="flex items-center py-2 input  rounded font-medium  max-w-xs my-2"
              />
              <button className="w-full flex items-center btn btn-primary px-5 shadow-sm tracking-wider text-white font-medium rounded-full hover:bg-red-600">
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
