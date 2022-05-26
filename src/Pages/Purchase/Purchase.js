import React, { useEffect, useState } from "react";
import { IoMdSpeedometer } from "react-icons/io";
import { AiFillPieChart } from "react-icons/ai";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "../Shared/Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import { toast } from "react-toastify";

const Purchase = () => {
  const [user, loading] = useAuthState(auth);
  const { id } = useParams();
  const navigate = useNavigate();
  // const [orderQty, setOrderQty] = useState(0);

  const {
    data: product,
    isLoading,
    refetch,
  } = useQuery(["product", id], () =>
    axios.get(`http://localhost:5000/product/${id}`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );
  if (isLoading || loading) {
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
    const phone = event.target.phone.value;
    const country = event.target.country.value;
    const addressLine = event.target.addressLine.value;
    const state = event.target.state.value;
    const city = event.target.city.value;
    const zip = event.target.zip.value;
    console.log(totalPrice);
    const order = {
      email: user.email,
      name: name,
      phone,
      address: {
        country,
        addressLine,
        state,
        city,
        zip,
      },
      productId: _id,
      orderQty: quantity,
      price,
      totalPrice,
      image,
      status: "unpaid",
    };
    console.log(order);
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
          navigate(`/payment/${inserted.insertedId}`);
        } else {
          toast.error("Failed to place order");
        }
      });
  };
  return (
    <>
      <Navbar />
      <Hero>Purchase</Hero>
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
              <form onSubmit={handleSubmit}>
                {/* ----------Price and Order Qty---------- */}
                <div className="flex justify-between items-center">
                  <h3 className="text-left text-2xl font-semibold text-primary">
                    Price : ${price}
                  </h3>
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
                </div>
                <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
                {/* ---------------Address-------- */}
                <div className="flex flex-col  justify-items-stretch ">
                  <h1>Shipping Information</h1>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
                    <div className="form-control mx-auto w-full max-w-sm">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={user.displayName}
                        className="input input-bordered w-full max-w-sm"
                        disabled
                        required
                      />
                    </div>
                    <div className="form-control mx-auto w-full max-w-sm">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={user.email}
                        className="input input-bordered w-full max-w-sm"
                        disabled
                        required
                      />
                    </div>
                    <div className="form-control mx-auto w-full max-w-sm">
                      <label className="label">
                        <span className="label-text">Phone</span>
                      </label>
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        className="input input-bordered w-full max-w-sm"
                        required
                      />
                    </div>
                    <div className="form-control mx-auto w-full max-w-sm">
                      <label className="label">
                        <span className="label-text">Country</span>
                      </label>
                      <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        className="input input-bordered w-full max-w-sm"
                        required
                      />
                    </div>
                    <div className="form-control mx-auto w-full max-w-sm">
                      <label className="label">
                        <span className="label-text">Address Line</span>
                      </label>
                      <input
                        type="text"
                        name="addressLine"
                        placeholder="Address Line"
                        className="input input-bordered w-full max-w-sm"
                      />
                    </div>
                    <div className="form-control mx-auto w-full max-w-sm">
                      <label className="label">
                        <span className="label-text">State</span>
                      </label>
                      <input
                        type="text"
                        name="state"
                        placeholder="State"
                        className="input input-bordered w-full max-w-sm"
                      />
                    </div>

                    <div className="form-control mx-auto w-full max-w-sm">
                      <label className="label">
                        <span className="label-text">City</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        className="input input-bordered w-full max-w-sm"
                        required
                      />
                    </div>
                    <div className="form-control mx-auto w-full max-w-sm">
                      <label className="label">
                        <span className="label-text">Zip</span>
                      </label>
                      <input
                        type="text"
                        name="zip"
                        placeholder="Zip"
                        className="input input-bordered w-full max-w-sm"
                        required
                      />
                    </div>
                  </div>
                </div>
                {/* ----------------Submit Button-------------- */}
                <div className="flex justify-center text-sm font-medium pt-3">
                  <button className="w-full max-w-sm flex items-center btn btn-primary px-5 shadow-sm tracking-wider text-white font-medium rounded-full hover:bg-red-600">
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
