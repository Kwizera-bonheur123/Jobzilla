import { useState } from "react";
import Button from "./Button";
import SearchInput from "./SearchInput";
import { FaCaretDown } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import IG from "../assets/ig-removebg-preview.png";
import { PiCheckCircleFill } from "react-icons/pi";
import Icon1 from "../assets/icon1.png";
import Candidate from "./Candidate";
import w1 from "../assets/w1.png";
import w2 from "../assets/w2.png";
import w5 from "../assets/w5.png";
import w6 from "../assets/w6.png";
import SignupCard from "./SignupCard";
import { useAppSelector } from "./redux/hooks/hooks";

const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const jobResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const companyResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };
  const { signUpModel } = useAppSelector((state) => state.toggleModels);
  const [activeLink, setActiveLink] = useState("All");
  const [openModel, setOpenModel] = useState(false);

  const links = ["All", "Full-time", "Part time", "Monthly"];
  return (
    <div
      className={` ${
        signUpModel ? " overflow-hidden" : " overflow-y-auto"
      }bg-homeBackgroundImage bg-fixed bg-center bg-cover min-h-screen`}
    >
      {signUpModel && <SignupCard />}
      <div className="mx-[3%] sm:mx-[8%] md:mx-[10%] pt-[38%] sm:pt-[28%] md:pt-[17%] h-[40%]">
        <h1 className=" text-white text-4xl md:text-6xl font-bold">
          FIND TOP IT JOBS
        </h1>
        <h2 className="text-white text-4xl md:text-6xl tracking-wide font-extralight my-4">
          For talent developers
        </h2>
      </div>
      <form className="bg-white mx-4 sm:mx-[8%] md:mr-[35%] md:ml-[10%] p-4 md:p-2 grid sm:grid-cols-2 md:grid-cols-4 gap-6 rounded-xl mt-12 sm:mt-6 md:mt-16">
        <div>
          <label className=" text-gray-400 md:text-sm">WHAT</label>
          <div
            onClick={() => setOpenModel(!openModel)}
            className=" flex justify-between font-bold"
          >
            <label className="md:text-sm">Job title</label>
            <FaCaretDown />
          </div>
          {openModel && <SearchInput />}
        </div>
        <div>
          <label className=" text-gray-400 md:text-sm">TYPE</label>
          <div
            onClick={() => setOpenModel(!openModel)}
            className=" flex justify-between font-bold"
          >
            <label>All categories</label>
            <FaCaretDown />
          </div>
          {openModel && <SearchInput />}
        </div>
        <div>
          <label className=" text-gray-400">LOCATION</label>
          <div className=" flex justify-between font-bold">
            <input
              placeholder="Location"
              className=" border-none font-bold placeholder:font-bold placeholder-black focus:border-none focus:outline-none"
            />
            <FaLocationDot />
          </div>
        </div>
        <Button
          title="Find Job"
          otherStyles="bg-blue-600 w-full h-12 sm:h-16 md:h-14 text-center text-white font-bold"
          buttonType="submit"
        />
      </form>
      <h1 className=" text-white text-xl mx-4 sm:mx-[8%] md:mx-[10%] mt-7 sm:mt-10">
        Type your keyword, then click search to find your perfect job.
      </h1>
      <div>
        <h1 className="text-xl text-white font-bold mx-4 sm:mx-[8%] mt-20 md:mx-[10%]">
          JOBS AT A GLANCE
        </h1>
        <Carousel
          autoPlay={true}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={2000}
          arrows={false}
          showDots={false}
          className=" bg-transparent py-6 mx-4 sm:mx-2 mt-12"
        >
          <div className=" bg-white p-4 rounded-lg grid gap-2 mx-3">
            <div className=" flex -mt-2 gap-4">
              <div className=" bg-blue-600 p-3 rounded-xl h-fit w-fit -mt-7 z-40">
                <GoPeople size="30px" className=" text-white " />
              </div>
              <h3 className=" text-blue-800 font-bold text-sm">65 Jobs</h3>
            </div>
            <h3 className=" font-semibold text-md">Human resaurces</h3>
          </div>
          <div className=" bg-white p-4 rounded-lg grid gap-2 mx-3">
            <div className=" flex -mt-2 gap-4">
              <div className=" bg-blue-600 p-3 rounded-xl h-fit w-fit -mt-7 z-40">
                <GoPeople size="30px" className=" text-white " />
              </div>
              <h3 className=" text-blue-800 font-bold text-sm">65 Jobs</h3>
            </div>
            <h3 className=" font-semibold text-md">Human resaurces</h3>
          </div>
          <div className=" bg-white p-4 rounded-lg grid gap-2 mx-3">
            <div className=" flex -mt-2 gap-4">
              <div className=" bg-blue-600 p-3 rounded-xl h-fit w-fit -mt-7 z-40">
                <GoPeople size="30px" className=" text-white " />
              </div>
              <h3 className=" text-blue-800 font-bold text-sm">65 Jobs</h3>
            </div>
            <h3 className=" font-semibold text-md">Human resaurces</h3>
          </div>
          <div className=" bg-white p-4 rounded-lg grid gap-2 mx-3">
            <div className=" flex -mt-2 gap-4">
              <div className=" bg-blue-600 p-3 rounded-xl h-fit w-fit -mt-7 z-40">
                <GoPeople size="30px" className=" text-white " />
              </div>
              <h3 className=" text-blue-800 font-bold text-sm">65 Jobs</h3>
            </div>
            <h3 className=" font-semibold text-md">Human resaurces</h3>
          </div>
          <div className=" bg-white p-4 rounded-lg grid gap-2 mx-3">
            <div className=" flex -mt-2 gap-4">
              <div className=" bg-blue-600 p-3 rounded-xl h-fit w-fit -mt-7 z-40">
                <GoPeople size="30px" className=" text-white " />
              </div>
              <h3 className=" text-blue-800 font-bold text-sm">65 Jobs</h3>
            </div>
            <h3 className=" font-semibold text-md">Human resaurces</h3>
          </div>
          <div className=" bg-white p-4 rounded-lg grid gap-2 mx-3">
            <div className=" flex -mt-2 gap-4">
              <div className=" bg-blue-600 p-3 rounded-xl h-fit w-fit -mt-7 z-40">
                <GoPeople size="30px" className=" text-white " />
              </div>
              <h3 className=" text-blue-800 font-bold text-sm">65 Jobs</h3>
            </div>
            <h3 className=" font-semibold text-md">Human resaurces</h3>
          </div>
        </Carousel>
      </div>
      <div className="bg-white py-8 px-3 h-[650px]">
        <h1 className=" font-semibold text-[22px] font-sans">
          Recommended Jobs
        </h1>
        <div className=" bg-blue-100 pt-8 mt-6 rounded-[35px] px-3 sm:px-10 lg:px-[9%] h-[350px]">
          <ul className="text-blue-700 font-semibold flex justify-between mx-10 sm:mx-32 lg:mx-96 border-b-2 border-gray-300 pb-4 relative">
            {links.map((link) => (
              <li
                key={link}
                className="relative cursor-pointer"
                onClick={() => setActiveLink(link)}
              >
                <span
                  className={`${
                    activeLink === link ? "text-black" : "text-blue-700"
                  } pb-2 text-sm`}
                >
                  {link}
                </span>
                {activeLink === link && (
                  <span className="absolute left-0 bottom-[-17px] w-full h-[2px] bg-blue-700 z-30" />
                )}
              </li>
            ))}
          </ul>
          <div className=" mt-8">
            <Carousel responsive={jobResponsive} arrows={true}>
              <div className=" bg-white border-2 sm:border-0 border-gray-300 rounded-xl px-4 pt-5 sm:mx-4">
                <div className=" bg-gray-200 rounded-xl px-4 py-5 mb-4">
                  <div className=" flex justify-between w-full">
                    <h3 className="text-blue-600">Full Time</h3>
                    <h3>1 day ago</h3>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex justify-center">
                      <img src={IG} className=" w-24 h-24" />
                    </div>
                    <p className=" text-center font-bold">Instagram</p>
                    <p className=" text-center font-thin text-sm">
                      Washington U.S.A
                    </p>
                  </div>
                </div>
                <p className=" text-black text-center font-bold text-xl">
                  Backend Developer
                </p>
                <div className=" flex justify-center pb-8 pt-5">
                  <p className=" text-blue-800 text-xl font-extrabold">$130</p>
                  <p className=" mt-1">/ Month</p>
                </div>
                <div className=" flex justify-center -mb-8 text-blue-700 p-1 ">
                  <PiCheckCircleFill size="60px" />
                </div>
              </div>
              <div className=" bg-white border-2 sm:border-0 border-gray-300 rounded-xl px-4 pt-5 sm:mx-4">
                <div className=" bg-gray-200 rounded-xl px-4 py-5 mb-4">
                  <div className=" flex justify-between w-full">
                    <h3 className="text-blue-600">Full Time</h3>
                    <h3>1 day ago</h3>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex justify-center">
                      <img src={IG} className=" w-24 h-24" />
                    </div>
                    <p className=" text-center font-bold">Instagram</p>
                    <p className=" text-center font-thin text-sm">
                      Washington U.S.A
                    </p>
                  </div>
                </div>
                <p className=" text-black text-center font-bold text-xl">
                  Backend Developer
                </p>
                <div className=" flex justify-center pb-8 pt-5">
                  <p className=" text-blue-800 text-xl font-extrabold">$130</p>
                  <p className=" mt-1">/ Month</p>
                </div>
                <div className=" flex justify-center -mb-8 text-blue-700 p-1 ">
                  <PiCheckCircleFill size="60px" />
                </div>
              </div>
              <div className=" bg-white border-2 sm:border-0 border-gray-300 rounded-xl px-4 pt-5 sm:mx-4">
                <div className=" bg-gray-200 rounded-xl px-4 py-5 mb-4">
                  <div className=" flex justify-between w-full">
                    <h3 className="text-blue-600">Full Time</h3>
                    <h3>1 day ago</h3>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex justify-center">
                      <img src={IG} className=" w-24 h-24" />
                    </div>
                    <p className=" text-center font-bold">Instagram</p>
                    <p className=" text-center font-thin text-sm">
                      Washington U.S.A
                    </p>
                  </div>
                </div>
                <p className=" text-black text-center font-bold text-xl">
                  Backend Developer
                </p>
                <div className=" flex justify-center pb-8 pt-5">
                  <p className=" text-blue-800 text-xl font-extrabold">$130</p>
                  <p className=" mt-1">/ Month</p>
                </div>
                <div className=" flex justify-center -mb-8 text-blue-700 p-1 ">
                  <PiCheckCircleFill size="60px" />
                </div>
              </div>
              <div className="pb-6">
                <div className=" bg-white border-2 sm:border-0 border-gray-300 rounded-xl px-4 pt-5 sm:mx-4">
                  <div className=" bg-gray-200 rounded-xl px-4 py-5 mb-4">
                    <div className=" flex justify-between w-full">
                      <h3 className="text-blue-600">Full Time</h3>
                      <h3>1 day ago</h3>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex justify-center">
                        <img src={IG} className=" w-24 h-24" />
                      </div>
                      <p className=" text-center font-bold">Instagram</p>
                      <p className=" text-center font-thin text-sm">
                        Washington U.S.A
                      </p>
                    </div>
                  </div>
                  <p className=" text-black text-center font-bold text-xl">
                    Backend Developer
                  </p>
                  <div className=" flex justify-center pb-8 pt-5">
                    <p className=" text-blue-800 text-xl font-extrabold">
                      $130
                    </p>
                    <p className=" mt-1">/ Month</p>
                  </div>
                  <div className=" flex justify-center -mb-8 p-1 text-blue-600">
                    <PiCheckCircleFill size="60px" />
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <div className=" py-28 px-2 bg-cardBackgroundImage">
        <h2 className=" text-white text-center font-semibold">
          Working progress
        </h2>
        <div className=" flex justify-center">
          <h1 className=" text-white text-center text-xl lg:text-5xl font-bold tracking-wide py-3 lg:w-[45%]">
            Follow Our Steps, We Will Help You
          </h1>
        </div>
        <div className=" flex flex-wrap justify-center gap-5 lg:mt-16 md:mx-[3%]">
          <div className=" rounded-xl shadow-custom bg-[#002860] p-7 sm:w-[42%] lg:w-[27%]">
            <div className=" flex justify-between">
              <img src={Icon1} className=" w-14 h-16" />
              <span className="text-[#002860] custom-stroke text-7xl font-extrabold">
                01
              </span>
            </div>
            <h1 className=" text-white font-semibold text-lg sm:text-md tracking-wide mt-5 mb-2">
              Register Your Account
            </h1>
            <p className=" text-sm text-white mb-5">
              You need to create an account to find the best and preferred job.
            </p>
          </div>
          <div className=" rounded-xl shadow-custom bg-[#002860] p-7 sm:w-[42%] lg:w-[27%]">
            <div className=" flex justify-between">
              <img src={Icon1} className=" w-14 h-16" />
              <span className="text-[#002860] custom-stroke text-7xl font-extrabold">
                02
              </span>
            </div>
            <h1 className=" text-white font-semibold text-lg tracking-wide mt-5 mb-2">
              Apply For Dream Job
            </h1>
            <p className=" text-sm text-white mb-5">
              You need to create an account to find the best and preferred job.
            </p>
          </div>
          <div className=" rounded-xl shadow-custom bg-[#002860] p-7 sm:w-[42%] lg:w-[27%]">
            <div className=" flex justify-between">
              <img src={Icon1} className=" w-14 h-16" />
              <span className="text-[#002860] custom-stroke text-7xl font-extrabold">
                03
              </span>
            </div>
            <h1 className=" text-white font-semibold text-lg tracking-wide mt-5 mb-2">
              Upload Your Resume
            </h1>
            <p className=" text-sm text-white mb-5">
              You need to create an account to find the best and preferred job.
            </p>
          </div>
        </div>
      </div>
      <Candidate />
      <div className=" bg-white h-[670px] sm:h-[500px]">
        <div className=" bg-[#002760] h-[320px] w-full text-white pt-10 px-3 sm:px-20">
          <h3 className=" text-center font-bold text-lg">Top Companies</h3>
          <h2 className=" text-center font-bold text-2xl tracking-wide">
            Get hired in top campanies
          </h2>
          <div className=" bg-[#e9f1fb] pb-10 pt-16 lg:pt-16 mt-14 rounded-5xl">
            <div className=" px-6">
              <Carousel
                autoPlay={true}
                responsive={companyResponsive}
                infinite={true}
                autoPlaySpeed={2000}
                arrows={false}
                showDots={false}
                className=""
              >
                <img src={w1} className=" h-6 sm:h-5 lg:h-6" />
                <img src={w2} className=" h-6 sm:h-5 lg:h-6" />
                <img src={w5} className=" h-6 sm:h-5 lg:h-6" />
                <img src={w6} className=" h-6 sm:h-5 lg:h-6" />
                <img src={w1} className=" h-6 sm:h-5 lg:h-6" />
                <img src={w2} className=" h-6 sm:h-5 lg:h-6" />
                <img src={w5} className=" h-6 sm:h-5 lg:h-6" />
                <img src={w6} className=" h-6 sm:h-5 lg:h-6" />
              </Carousel>
            </div>
            <p className=" h-[1px] bg-gray-300 w-full mt-16 font-extrabold z-40" />
            <div className=" grid grid-cols-1 sm:grid-cols-3 my-6 gap-8 px-3 sm:px-7">
              <div>
                <div className="text-blue-600 font-extrabold flex justify-center items-baseline">
                  <p className=" text-2xl lg:text-3xl">5</p>
                  <p className=" text-3xl lg:text-4xl">M</p>
                  <p className=" text-2xl lg:text-4xl">+</p>
                </div>
                <p className="text-slate-950 text-center">
                  Million daily active users
                </p>
              </div>
              <div>
                <div className="text-blue-600 font-extrabold flex justify-center items-baseline">
                  <p className=" text-2xl lg:text-3xl">9</p>
                  <p className=" text-3xl lg:text-4xl">K</p>
                  <p className=" text-2xl lg:text-4xl">+</p>
                </div>
                <p className="text-slate-950 text-center">
                  Million daily active users
                </p>
              </div>
              <div>
                <div className="text-blue-600 font-extrabold flex justify-center items-baseline">
                  <p className=" text-2xl lg:text-3xl">2</p>
                  <p className=" text-3xl lg:text-4xl">M</p>
                  <p className=" text-2xl lg:text-4xl">+</p>
                </div>
                <p className="text-slate-950 text-center">
                  Million daily active users
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
