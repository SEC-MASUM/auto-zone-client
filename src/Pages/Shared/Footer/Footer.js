import React from "react";
import logo from "../../../Assets/images/Logo.png";
import american from "../../../Assets/icons/001-american-express.png";
import discover from "../../../Assets/icons/002-discover.png";
import paypal from "../../../Assets/icons/003-paypal.png";
import visa from "../../../Assets/icons/004-visa.png";
import discover1 from "../../../Assets/icons/005-discover-1.png";

const Footer = () => {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto">
        <footer class="footer p-10  text-base-100">
          <div>
            <img src={logo} alt="" className="h-14 bg-white p-1 rounded-l-full rounded-tr-full" />
          </div>
          <div>
            <span class="footer-title">Services</span>
            <a class="link link-hover">Branding</a>
            <a class="link link-hover">Design</a>
            <a class="link link-hover">Marketing</a>
            <a class="link link-hover">Advertisement</a>
          </div>
          <div>
            <span class="footer-title">Company</span>
            <a class="link link-hover">About us</a>
            <a class="link link-hover">Contact</a>
            <a class="link link-hover">Jobs</a>
            <a class="link link-hover">Press kit</a>
          </div>
          <div>
            <span class="footer-title">Legal</span>
            <a class="link link-hover">Terms of use</a>
            <a class="link link-hover">Privacy policy</a>
            <a class="link link-hover">Cookie policy</a>
          </div>
        </footer>
        <footer class="footer px-10 py-4 border-t  text-base-100 border-base-300 items-center">
          <div class="items-center grid-flow-col">
            <p>Copyright © 2018 PlazaThemes. All Right Reserved.</p>
          </div>
          <div class="md:place-self-center md:justify-self-end bg-white px-2">
            <div class="grid grid-flow-col gap-4">
              <a>
                <img src={american} alt="" className="h-12" />
              </a>
              <a>
                <img src={discover} alt="" className="h-12" />
              </a>
              <a>
                <img src={visa} alt="" className="h-12" />
              </a>
              <a>
                {" "}
                <img src={paypal} alt="" className="h-12" />
              </a>
              <a>
                {" "}
                <img src={discover1} alt="" className="h-12" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
