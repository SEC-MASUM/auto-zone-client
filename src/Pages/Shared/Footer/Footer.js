import React from "react";
import logo from "../../../Assets/images/Logo.png";
import american from "../../../Assets/icons/001-american-express.png";
import discover from "../../../Assets/icons/002-discover.png";
import paypal from "../../../Assets/icons/003-paypal.png";
import visa from "../../../Assets/icons/004-visa.png";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="bg-secondary">
      <div className="container mx-auto">
        <footer className="footer p-10  text-base-100">
          <div>
            <img
              src={logo}
              alt=""
              className="h-14 bg-white p-1 rounded-l-full rounded-tr-full"
            />
          </div>
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Manufacturing</a>
            <a className="link link-hover">Delivery</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
        <footer className="footer px-10 py-4 border-t  text-base-100 border-base-300 items-center">
          <div className="items-center grid-flow-col">
            <p>Copyright &copy; {year} Auto Zone. All Right Reserved.</p>
          </div>
          <div className="md:place-self-center md:justify-self-end bg-white px-2">
            <div className="grid grid-flow-col gap-4">
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
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
