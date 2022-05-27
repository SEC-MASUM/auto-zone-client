import React, { useEffect, useState } from "react";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();

  const { _id, totalPrice, email, address } = order;
  useEffect(() => {
    // const url = `http://localhost:5000/create-payment-intent`;
    const url = `https://auto-zone-01.herokuapp.com/create-payment-intent`;
    if (totalPrice < 999999.99) {
      (async () => {
        const paymentIntent = await axios.post(
          url,
          { totalPrice },
          {
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        console.log(paymentIntent.data);

        if (paymentIntent.data) {
          console.log(paymentIntent.data?.clientSecret);
          setClientSecret(paymentIntent.data?.clientSecret);
        }
      })();
    } else {
      setCardError("Amount must be no more than $999,999.99");
    }
  }, [totalPrice]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");

    // Confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: email,
            address: address.country,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      // setProcessing(false);
    } else {
      setCardError("");
      console.log(paymentIntent);
      setTransactionId(paymentIntent.id);
      setSuccess("Congrats! Your Payment is completed successfully");
      // Update Order in database
      const order = {
        status: "paid",
        transactionId: paymentIntent.id,
      };
      // const url = `http://localhost:5000/payment/order/${_id}`;
      const url = `https://auto-zone-01.herokuapp.com/payment/order/${_id}`;
      fetch(url, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          // if (data.acknowledged) {
          //   navigate("/dashboard");
          // }
          // console.log(data);
        });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="btn btn-primary my-4"
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
      {success && (
        <>
          <p className="text-green-400">{success}</p>
          <p>
            Your Transaction Id:
            <span className="text-orange-600"> {transactionId}</span>
          </p>
        </>
      )}
    </div>
  );
};

export default CheckoutForm;
