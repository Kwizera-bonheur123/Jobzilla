import { IoLocationOutline } from "react-icons/io5";
import Profile from "../assets/pic1.jpg";
import { useState } from "react";
const Candidate = () => {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <div className=" bg-slate-100 pt-16 px-3 pb-8">
      <p className=" text-center text-blue-800 font-bold text-xl py-4">
        Candidates
      </p>
      <h1 className=" text-center text-2xl lg:text-5xl text-gray-950 font-bold">
        Featured Candidates
      </h1>
      <div>
        <div className=" py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:flex-wrap gap-7">
          {Array.from({ length: 10 })
            .slice(0, isExpand ? undefined : 8)
            .map((_, i) => (
              <div key={i} className="shadow-boxShadow bg-white rounded-xl">
                <div className="flex gap-6 p-4">
                  <img
                    src={Profile}
                    className=" w-12 sm:w-20 lg:w-24 h-12 sm:h-20 lg:h-24 rounded-xl"
                    alt="Profile"
                  />
                  <div>
                    <h2 className="text-blue-700 bg-blue-100/40 w-fit px-4 py-1 rounded-lg text-sm">
                      Featured
                    </h2>
                    <h2 className="font-bold text-md lg:text-xl py-2">
                      John Doe
                    </h2>
                    <h4 className=" text-sm">Software Developer</h4>
                  </div>
                </div>
                <div className="bg-blue-100/60 flex justify-between items-center px-3 h-16 rounded-b-xl sm:mt-4 lg:mt-7 ">
                  <div className="flex items-center font-semibold gap-2 text-sm">
                    <IoLocationOutline size="17px" />
                    <h3>New York</h3>
                  </div>
                  <div className="flex">
                    <p className="text-sm">$27</p>
                    <p className="text-blue-700 font-bold text-sm"> / Hour</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className=" flex justify-center items-center w-full mt-6 lg:mt-10">
          <button
            onClick={() => setIsExpand(!isExpand)}
            className=" bg-blue-600 text-white font-bold px-4 py-3 lg:px-6 lg:py-4 rounded-xl"
          >
            All Candidates
          </button>
        </div>
      </div>
    </div>
  );
};

export default Candidate;
