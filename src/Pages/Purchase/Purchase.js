import React from "react";
import { IoMdSpeedometer } from "react-icons/io";
import { AiFillPieChart } from "react-icons/ai";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Hero from "./Hero";

const Purchase = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mx-auto my-12">
        <div class="bg-gray-100 shadow-lg  rounded-3xl p-5">
          <div class="flex-none grid sm:grid-cols-1 md:grid-cols-2 gap-5">
            <div class="w-full">
              <img
                src="https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                alt="Just a flower"
                class="w-full h-full object-scale-down lg:object-cover  rounded-2xl"
              />
            </div>
            <div class="w-full py-2">
              <h2 class="text-lg text-left font-bold text-blue-700">
                Massive Dynamic
              </h2>
              <p class="w-full text-left  text-sm  text-gray-500">
                Discription Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Sapiente necessitatibus consectetur ullam soluta! Ipsa
                quibusdam quo fugiat minima? Minus voluptas autem aperiam sint
                eligendi excepturi
              </p>

              <div class="flex py-4  text-sm font-medium text-gray-500">
                <div class="flex-1 inline-flex items-center">
                  <IoMdSpeedometer className="h-5 w-5 text-gray-400" />
                  <p class="">Minimum Order : 10000 pieces</p>
                </div>
                <div class="flex-1 inline-flex items-center">
                  <AiFillPieChart className="h-5 w-5 text-gray-400" />
                  <p class="">Stock: 300000 pieces Available</p>
                </div>
              </div>
              <div>
                <h3 className="text-left text-2xl font-semibold text-primary">
                  Price : $2345
                </h3>
              </div>
              <div class="flex p-4 pb-2 border-t border-gray-200 "></div>
              <div class="flex space-x-3 text-sm font-medium">
                <div class="bg-white px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                  <span className="font-medium">Order Qty</span>
                  <input
                    type="number"
                    name="quantity"
                    placeholder="5000"
                    min="5000"
                    max="10000"
                    class="input input-sm rounded-full font-medium bg-accent text-lg text-secondary max-w-xs "
                  />
                </div>

                <button class="flex items-center btn btn-primary px-5 shadow-sm tracking-wider text-white font-medium rounded-full hover:bg-red-600">
                  Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Purchase;
