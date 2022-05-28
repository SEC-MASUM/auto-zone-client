import React from "react";

import Hero from "../../Components/Hero/Hero";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

import code from "../../Assets/images/code.png";
import output from "../../Assets/images/output.png";
const Blogs = () => {
  return (
    <>
      <Navbar />
      <Hero>Blog</Hero>
      <div className="container mx-auto min-h-screen">
        <div className="max-w-5xl mx-auto my-12 space-y-3 ">
          {/* ----------Q1------------ */}
          <div
            tabindex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 focus:bg-fuchsia-500 focus:text-white transition-all ease-in delay-100"
          >
            <div class="collapse-title text-xl font-medium">
              How will you improve the performance of a React Application?
            </div>
            <div class="collapse-content">
              <p>
                ১. By splitting a large bundle file to small files
                <br />
                ২. অনেক ডাটা এক সাথে সার্ভার থেকে লোড না করে যতটুকু প্রয়োজন
                ততটুকু লোড করার মাধ্যমে
                <br />
                ৩. সার্ভের সাইট এর সাথে কমিউনিকেট করার জন্য rest api বযবহার করার
                মাধ্যমে
                <br />
                ৪. মিডিয়া কন্টেন্ট গুলো যখন যতটুকু প্রয়োজন ততটুকু লোড করার
                মাধমে।
                <br />
                উপরের কাজ গুলা করার জন্য Lazy loading, react-window, React hook,
                reference, suspense use করা হয়ে থাকে।
              </p>
            </div>
          </div>
          {/* ----------Q2------------ */}
          <div
            tabindex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 focus:bg-fuchsia-500 focus:text-white transition-all ease-in delay-100"
          >
            <div class="collapse-title text-xl font-medium">
              What are the different ways to manage a state in a React
              application?
            </div>
            <div class="collapse-content">
              <p>
                State গুলার মধ্যে প্রধানত ৪ ধরনের state properly manage করতে হয়-
                <br />
                1. Local state
                <br /> 2.Global state <br /> 3. Server state <br /> 4. URL state
                <br /> <br /> <b>Local state</b> - Local state manage করার জন্য
                useState, useReducer hook use করা হয় <br /> <b>Global state</b>{" "}
                - Global state manage করার জন্য useReducer, useContext hook use
                করা হয় । এছাড়া third-party libraries like Zustand, Jotai, and
                Recoil use করা যায়। <br /> <b>Server state</b> - Server state
                manage করার জন্য SWR, React Query are most popular libraries{" "}
                <br /> <b>URL state</b> - Server state manage করার জন্য
                useHistory, useLocation, useParams hook use করা হয়।
              </p>
            </div>
          </div>
          {/* ----------Q3------------ */}
          <div
            tabindex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 focus:bg-fuchsia-500 focus:text-white transition-all ease-in delay-100"
          >
            <div class="collapse-title text-xl font-medium">
              How does prototypical inheritance work?
            </div>
            <div class="collapse-content">
              <p>
                Prototypical inheritance js এর একটা feature । prototypical
                inheritance এর মাধ্যমে একটা object এর property and methods অন্য
                object এর ভিতর add করা যায়। ব্যাপার টা Parent class and Child
                class er মত।
              </p>
            </div>
          </div>
          {/* ----------Q4------------ */}
          <div
            tabindex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 focus:bg-fuchsia-500 focus:text-white transition-all ease-in delay-100"
          >
            <div class="collapse-title text-xl font-medium">
              You have an array of products. Each product has a name, price,
              description, etc. How will you implement a search to find products
              by name?
            </div>
            <div class="collapse-content">
              <img src={code} alt="code" />
              <img src={output} alt="output" />
            </div>
          </div>
          {/* ----------Q5------------ */}
          <div
            tabindex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 focus:bg-fuchsia-500 focus:text-white transition-all ease-in delay-100"
          >
            <div class="collapse-title text-xl font-medium">
              What is a unit test? Why should write unit tests?
            </div>
            <div class="collapse-content">
              <p>
                Unit Testing : Unit testing হচ্ছে software development process
                এর একটা important part. একটা application or software এর ছোট ছোট
                যে পার্টগুলা থাকে যেগুলা অন্য কোনো পার্ট এর উপর নির্ভর করে না
                সেই পার্টগুলাকে Test করারে Unite Test বলে। এই test গুলা software
                developer যখন software developer করে তখন নিজেই করে। আবার QA
                department এ যারা থাকে তারাও করে। Software develope করার সময় যেন
                quality maintain হয় এবং সব requirement fullfill হয় তার জন্য
                ইউনিট টেস্ট লেখা হয়। এতে করে developer এর depelopment process
                easier হয়, অনেক সময়, শ্রম ও অর্থ বেচে যায়।
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
