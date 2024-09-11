import { useState } from "react";
import Button from "./Button";
import SearchInput from "./SearchInput";
import { FaCaretDown } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
  const [openModel, setOpenModel] = useState<boolean>(false);
  return (
    <div className=" bg-homeBackgroundImage bg-fixed bg-center bg-cover min-h-screen">
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
    </div>
  );
};

export default Home;
