import Button from "./Button";
import Logo from "../assets/logo-light-3.png";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-gray-800 py-[9%] md:py-10 px-4 sm:px-16 lg:px-[10%]">
      <div>
        <div className=" sm:flex justify-between lg:gap-8">
          <h1 className=" text-white text-2xl sm:text-xl tracking-wider lg:w-[40%]">
            Join our email subscription now to get updates on new jobs and
            notifications.
          </h1>
          <form className=" mt-8 sm:mt-0 flex flex-1">
            <input
              type="text"
              placeholder="Enter Your Email"
              className=" w-full sm:w-[300px] lg:w-[100%] bg-white h-12 sm:h-[60px] rounded-l-xl px-3"
            />
            <Button
              title="Subscribe Now"
              otherStyles="bg-blue-600 w-[58%] sm:w-[60%] lg:w-[30%] text-sm rounded-l-none h-12 sm:h-16 md:h-[60px] text-center text-white font-bold"
              buttonType="submit"
            />
          </form>
        </div>
        <div className=" h-[2px] my-10 w-full" />

        <div className=" grid lg:flex grid-cols-1 gap-5 lg:gap-0">
          <div className="lg:w-[28.5%]">
            <img src={Logo} className=" h-12" />
            <p className=" text-white py-3 sm:py-7 lg:w-[60%]">
              Many desktop publishing packages and web page editors now.
            </p>
            <div className=" text-white grid gap-2">
              <div className=" flex gap-2">
                <h6 className=" font-bold">Address : </h6>
                <h6 className=" font-thin">65 Sunset CA 90026, USA</h6>
              </div>
              <div className=" flex gap-2">
                <h6 className=" font-bold"> Email :</h6>
                <h6 className=" font-thin">kbonheur123@gmail.com</h6>
              </div>
              <div className=" flex gap-2">
                <h6 className=" font-bold">Call :</h6>
                <h6 className=" font-thin">+250 781 454 225</h6>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:flex gap-5 lg:gap-20">
            <div className=" text-white ">
              <h1 className=" text-[#1967D2] text-2xl">For Candidate</h1>
              <p className=" bg-[#1967D2] h-1 my-5 w-14" />
              <div className=" grid gap-3">
                <p className=" font-thin cursor-pointer text-white hover:text-[#1967D2]">
                  User dashboard
                </p>
                <p className=" font-thin cursor-pointer text-white hover:text-[#1967D2]">
                  Alert resume
                </p>
                <p className=" font-thin cursor-pointer text-white hover:text-[#1967D2]">
                  Candidate
                </p>
                <p className=" font-thin cursor-pointer text-white hover:text-[#1967D2]">
                  Blog list
                </p>
                <p className=" font-thin cursor-pointer text-white hover:text-[#1967D2]">
                  Blog single
                </p>
              </div>
            </div>
            <div className=" text-white ">
              <h1 className=" text-[#1967D2] text-2xl">For Employers</h1>
              <p className=" bg-[#1967D2] h-1 my-5 w-14" />
              <div className=" grid gap-3">
                <p className=" font-thin cursor-pointer text-white hover:text-[#1967D2]">
                  Post jobs
                </p>
                <p className=" font-thin cursor-pointer text-white hover:text-[#1967D2]">
                  Contact
                </p>
                <p className=" font-thin cursor-pointer text-white hover:text-[#1967D2]">
                  Jobs listing
                </p>
                <p className=" font-thin cursor-pointer text-white hover:text-[#1967D2]">
                  Jobs details
                </p>
              </div>
            </div>
            <div className=" text-white">
              <h1 className=" text-[#1967D2] text-2xl">Helpful </h1>
              <p className=" bg-[#1967D2] h-1 my-5 w-14" />
              <div className=" grid gap-3">
                <p className=" font-thin cursor-pointer text-white hover:text-[#1967D2]">
                  FAQs
                </p>
                <p className="font-thin cursor-pointer text-white hover:text-[#1967D2]">
                  Employer details
                </p>
                <p className="font-thin cursor-pointer text-white hover:text-[#1967D2]">
                  Profile
                </p>
                <p className="font-thin cursor-pointer text-white hover:text-[#1967D2]">
                  404 page
                </p>
              </div>
            </div>
            <div className=" text-white">
              <h1 className=" text-[#1967D2] text-2xl">Quick links </h1>
              <p className=" bg-[#1967D2] h-1 my-5 w-14" />
              <div className=" grid gap-3">
                <p className="font-thin cursor-pointer text-white hover:text-[#1967D2]">
                  Home
                </p>
                <p className="font-thin cursor-pointer text-white hover:text-[#1967D2]">
                  About us
                </p>
                <p className="font-thin cursor-pointer text-white hover:text-[#1967D2]">
                  Jobs
                </p>
                <p className="font-thin cursor-pointer text-white hover:text-[#1967D2]">
                  Employers
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="h-[1px] w-full bg-gray-400 my-10" />
          <div className=" lg:flex lg:justify-between">
            <p className=" text-white text-sm">
              Copyright © 2023 by thewebmax All Rights Reserved.
            </p>
            <div className=" text-[#1967D2] flex gap-10 mt-5 lg:mt-0">
              <FaFacebookF size="20px" />
              <FaXTwitter size="20px" />
              <FaInstagram size="24px" />
              <FaYoutube size="24px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
