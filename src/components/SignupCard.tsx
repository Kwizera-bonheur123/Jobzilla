import { IoMdClose } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import Button from "./Button";
import FormInput from "./Form/InputText";
import { DynamicData } from "./types/DynamicData";
import { useAppDispatch } from "./redux/hooks/hooks";
import { manipulateSignupModel } from "./redux/features/OpenModelsSlice";
const SignupCard = () => {
  const handlePropagation = (event: DynamicData) => {
    event?.stopPropagation();
  };
  const dispatch = useAppDispatch();
  return (
    <div
      className=" bg-black/50 h-screen w-full fixed z-50 top-0 left-0 overflow-auto "
      onClick={() => dispatch(manipulateSignupModel())}
    >
      <div
        className=" bg-white h-[100%] mx-[30%] w-[40%]"
        onClick={handlePropagation}
      >
        <div className=" w-full h-2 bg-blue-700" />
        <IoMdClose
          onClick={() => dispatch(manipulateSignupModel())}
          size="30px"
          className=" absolute right-[31%] cursor-pointer top-3"
        />
        <div className=" px-6">
          <h1 className=" text-center mt-12 font-semibold text-4xl">Sign Up</h1>
          <p className=" text-center mt-6">
            Sign Up and get access to all the features of Jobzilla
          </p>
          <div className=" flex gap-4 mt-20">
            <Button
              buttonType="button"
              title="Candidate"
              icon={FaUserTie}
              otherStyles="bg-blue-600 text-white font-semibold text-sm sm:py-3 sm:px-5 rounded-xl"
            />
            <Button
              buttonType="button"
              title="Candidate"
              icon={GiFamilyHouse}
              otherStyles="bg-white text-blue-600 font-semibold text-sm sm:py-3 sm:px-5 border-2 border-blue-600 rounded-xl"
            />
          </div>
          <div className=" mt-8 grid gap-5">
            <FormInput
              type="text"
              placeholder="Username*"
              otherStyles="rounded-lg h-14 pl-3 text-sm"
            />
            <FormInput
              type="text"
              placeholder="Username*"
              otherStyles="rounded-lg h-14 pl-3 text-sm"
            />
            <FormInput
              type="text"
              placeholder="Username*"
              otherStyles="rounded-lg h-14 pl-3 text-sm"
            />
            <FormInput
              type="text"
              placeholder="Username*"
              otherStyles="rounded-lg h-14 pl-3 text-sm"
            />
          </div>
          <div className=" flex gap-3 mt-3">
            <p>Already registered? </p>
            <a href="#" className="text-blue-700 font-semibold">
              Log in here
            </a>
          </div>
          <Button
            buttonType="submit"
            title="Sign Up"
            otherStyles=" text-white bg-blue-700 w-full h-14 flex justify-center items-center font-semibold mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default SignupCard;
