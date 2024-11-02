import { IoMdClose } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";
import Button from "./Button";
import FormInput from "./Form/InputText";
import { DynamicData } from "./types/DynamicData";
import { useAppDispatch } from "./redux/hooks/hooks";
import { manipulateSignupModel } from "./redux/features/OpenModelsSlice";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterSchema,
  RegisterSchemaType,
} from "../validations/auth/Register.validation";
const SignupCard: React.FC = () => {
  const handlePropagation = (event: DynamicData) => {
    event?.stopPropagation();
  };
  const dispatch = useAppDispatch();
  const [candidate, setCandidate] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({ resolver: zodResolver(RegisterSchema) });

  const onSubmit: SubmitHandler<RegisterSchemaType> = async (
    data: RegisterSchemaType
  ) => {
    console.log("Submitted", data);
  };
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
          <div
            className=" flex gap-4 mt-20 w-fit"
            onClick={() => setCandidate(!candidate)}
          >
            <Button
              buttonType="button"
              title="Candidate"
              icon={FaUserTie}
              otherStyles={`${
                candidate
                  ? "bg-blue-600 text-white "
                  : "bg-white text-blue-600 border-2 border-blue-600"
              } ' font-semibold text-sm sm:py-3 sm:px-5 rounded-xl'`}
            />
            <Button
              buttonType="button"
              title="Candidate"
              icon={FaUserTie}
              otherStyles={`${
                !candidate
                  ? "bg-blue-600 text-white "
                  : "bg-white text-blue-600 border-2 border-blue-600"
              } ' font-semibold text-sm sm:py-3 sm:px-5 rounded-xl'`}
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" mt-8 grid gap-5">
              <FormInput
                type="text"
                placeholder="First name*"
                otherStyles="rounded-lg h-14 pl-3 text-sm"
                {...register("firstName")}
                error={errors.firstName}
              />

              <FormInput
                type="text"
                placeholder="Last name*"
                otherStyles="rounded-lg h-14 pl-3 text-sm"
                {...register("lastName")}
                error={errors.lastName}
              />
              <FormInput
                type="text"
                placeholder="Email*"
                otherStyles="rounded-lg h-14 pl-3 text-sm"
                {...register("email")}
                error={errors.email}
              />
              <FormInput
                type="text"
                placeholder="Password*"
                otherStyles="rounded-lg h-14 pl-3 text-sm"
                {...register("password")}
                error={errors.password}
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupCard;
