import React, { useEffect, useState } from "react";
import { IoMdSpeedometer } from "react-icons/io";
import { AiFillPieChart } from "react-icons/ai";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "../Shared/Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import { toast } from "react-toastify";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  // const [orderQty, setOrderQty] = useState(0);

  const {
    data: product,
    isLoading,
    refetch,
  } = useQuery(["product", id], () =>
    axios.get(`http://localhost:5000/product/${id}`)
  );
  if (isLoading) {
    return <Loading />;
  }
  const { _id, name, description, minOrder, availableQty, price, image } =
    product.data;

  // const handleOrderQty = (event) => {
  //   const qty = event.target.value;
  //   setOrderQty(qty);
  //   console.log("Qty", orderQty);
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    const quantity = event.target.quantity.value;
    const totalPrice = quantity * price;
    console.log(totalPrice);
    const order = {
      email: user.email,
      name: name,
      productId: _id,
      orderQty: quantity,
      price: price,
      totalPrice: totalPrice,
      status: "unpaid",
    };
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((inserted) => {
        console.log(inserted);
        if (inserted.insertedId) {
          toast.success("Order placed successfully");
          event.target.reset();
        } else {
          toast.error("Failed to place order");
        }
      });
  };
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mx-auto my-12">
        <div className="bg-gray-100 shadow-lg  rounded-3xl p-5">
          <div className="flex-none grid sm:grid-cols-1 md:grid-cols-2 gap-5">
            <div className="w-full">
              <img
                src={image}
                alt="Just a flower"
                className="w-full h-full object-scale-down lg:object-cover  rounded-2xl"
              />
            </div>
            <div className="w-full py-2">
              <h2 className="text-lg text-left font-bold text-blue-700">
                {name}
              </h2>
              <p className="w-full text-left  text-sm  text-gray-500">
                {description}
              </p>

              <div className="flex py-4  text-sm font-medium text-gray-500">
                <div className="flex-1 inline-flex items-center">
                  <IoMdSpeedometer className="h-5 w-5 text-gray-400" />
                  <p className="">Minimum Order : {minOrder} pieces</p>
                </div>
                <div className="flex-1 inline-flex items-center">
                  <AiFillPieChart className="h-5 w-5 text-gray-400" />
                  <p className="">Stock: {availableQty} pieces Available</p>
                </div>
              </div>
              <div>
                <h3 className="text-left text-2xl font-semibold text-primary">
                  Price : ${price}
                </h3>
              </div>
              <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
              <form onSubmit={handleSubmit}>
                <div className="flex space-x-3 text-sm font-medium">
                  <div className="bg-white px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                    <span className="font-medium">Order Qty</span>
                    <input
                      // onChange={handleOrderQty}
                      type="number"
                      name="quantity"
                      placeholder={minOrder}
                      defaultValue={minOrder}
                      min={minOrder}
                      max={availableQty}
                      className="input input-sm rounded-full font-medium bg-accent text-lg text-secondary max-w-xs "
                    />
                  </div>

                  <button className="flex items-center btn btn-primary px-5 shadow-sm tracking-wider text-white font-medium rounded-full hover:bg-red-600">
                    Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Purchase;
