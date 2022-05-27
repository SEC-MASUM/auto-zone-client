import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { IoMdSpeedometer } from "react-icons/io";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Hero from "../../Components/Hero/Hero";
import auth from "../../Firebase/Firebase.init";
import Footer from "../Shared/Footer/Footer";
import Loading from "../Shared/Loading/Loading";
import Navbar from "../Shared/Navbar/Navbar";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1K18SECEnSWhNz9P00ol1AFf0sdb6WyvU5BUKbClbo7IlCmf1joCL6kUD4UgXGDeD8XaSqO9YUJHkfDr8UCdvR00FQIhoHeS"
);

const Payment = () => {
  const { id } = useParams();
  const [user, loading] = useAuthState(auth);
  // const url = `http://localhost:5000/payment/order/${id}`;
  // const url = `https://auto-zone-01.herokuapp.com/payment/order/${id}`;
  const {
    data: order,
    isLoading,
    refetch,
  } = useQuery(["order", id], () =>
    axios.get(`https://auto-zone-01.herokuapp.com/payment/order/${id}`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );

  if (isLoading || loading) {
    return <Loading />;
  }

  const {
    _id,
    name,
    email,
    price,
    totalPrice,
    status,
    orderQty,
    phone,
    address,
    image,
  } = order.data;
  const { country, addressLine, city, state, zip } = address;
  return (
    <div>
      <Navbar />
      <Hero>Payment</Hero>
      <h3 className="bg-accent text-secondary text-center font-semibold text-xl py-3">
        Order ID: {id}
      </h3>
      {/* ----------------Payment Option-------------- */}
      <div className="container mx-auto card min-w-min lg:max-w-lg bg-gray-100 shadow-xl my-4">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order.data} />
          </Elements>
        </div>
      </div>
      {/* ---------------------- */}
      <div className="container mx-auto my-8">
        <div className="bg-gray-100 shadow-lg  rounded-3xl p-5">
          <div className="flex-none grid sm:grid-cols-1 md:grid-cols-2 gap-5">
            <div className="w-full h-fit">
              <img
                src={
                  image ||
                  "https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                }
                alt="Just a flower"
                className="max-h-[400px] object-scale-down lg:object-fill   rounded-2xl"
              />
            </div>
            <div className="w-full py-2">
              <h2 className="text-2xl text-left font-bold text-blue-700">
                {name}
              </h2>

              {/* ----------Price and Order Qty---------- */}
              <div className="text-left">
                <h3 className="text-left">Unite Price : ${price}</h3>

                <h4>Order Qty: {orderQty}</h4>
                <p className="text-left text-2xl font-semibold">
                  <span className=" text-green-500">
                    Please pay : ${totalPrice}
                  </span>
                  <span> to confirm your order.</span>
                </p>
              </div>
              <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
              {/* ---------------Address-------- */}
              <div className="flex flex-col  justify-items-stretch ">
                <h1 className="text-center text-xl  text-primary">
                  Shipping Information
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
                  <label className="label">
                    <span className="label-text">
                      Name : {user.displayName}
                    </span>
                  </label>
                  <label className="label">
                    <span className="label-text">Email: {email}</span>
                  </label>
                  <label className="label">
                    <span className="label-text">Phone: {phone}</span>
                  </label>
                  <label className="label">
                    <span className="label-text">Country : {country}</span>
                  </label>
                  <label className="label">
                    <span className="label-text">
                      Address Line : {addressLine}
                    </span>
                  </label>
                  <label className="label">
                    <span className="label-text">State: {state}</span>
                  </label>
                  <label className="label">
                    <span className="label-text">City: {city}</span>
                  </label>
                  <label className="label">
                    <span className="label-text">Zip : {zip}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Payment;
