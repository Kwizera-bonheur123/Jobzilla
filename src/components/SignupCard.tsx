import { IoMdClose } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";
import Button from "./Button";
const SignupCard = () => {
  return (
    <div className=" bg-black/35 h-screen w-full fixed z-50 top-0 left-0 ">
      <div className=" bg-white h-[100%] mx-[30%] w-[40%]">
        <div className=" w-full h-2 bg-blue-700" />
        <IoMdClose size="30px" className=" absolute right-[30%] top-2" />
        <div className="">
          <h1 className=" text-center mt-12 font-semibold text-4xl">Sign Up</h1>
          <p className=" text-center mt-6">
            Sign Up and get access to all the features of Jobzilla
          </p>
          <div className=" flex">
            <Button
              buttonType="button"
              title="Candidate"
              //   icon={FaUserTie}
              icon={FaUserTie}
              otherStyles="bg-blue-700 text-white font-bold"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupCard;
