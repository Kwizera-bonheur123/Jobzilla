import { IoMdClose } from "react-icons/io";
import {
  LoginSchema,
  LoginSchemaType,
} from "../../validations/Login.validation";
import { DynamicData } from "../types/DynamicData";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import useToast from "../redux/hooks/useToast";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  closeModels,
  manipulateSignupModel,
} from "../redux/features/OpenModelsSlice";
import FormInput from "../Form/InputText";
import Button from "../Button";
import IconLoader from "../Loaders/iconLoader";
import { login } from "../redux/features/LoginSlice";
const LoginCard: React.FC = () => {
  const { isLoading } = useAppSelector((state) => state.register);
  const handlePropagation = (event: DynamicData) => {
    event?.stopPropagation();
  };
  const dispatch = useAppDispatch();
  const { showErrorMessage, showSuccessMessage } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) });

  const onSubmit: SubmitHandler<LoginSchemaType> = async (
    data: LoginSchemaType
  ) => {
    try {
      const res = await dispatch(login(data)).unwrap();
      localStorage.setItem("access_token", res.data.token);
      showSuccessMessage(res.data.message || "Successfully!!!");
    } catch (error) {
      const err = error as DynamicData;
      showErrorMessage(
        err.data.message ||
          err?.message ||
          "Unknown error occured! Please try again!"
      );
    }
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
          onClick={() => dispatch(closeModels())}
          size="30px"
          className=" absolute right-[31%] cursor-pointer top-3"
        />
        <div className=" px-6">
          <h1 className=" text-center mt-20 font-semibold text-4xl">Login</h1>
          <p className=" text-center mt-6">
            Login and get access to all the features of Jobzilla
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" mt-8 mb-5 grid gap-5">
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

            <Button
              buttonType="submit"
              disabled={isLoading ? true : false}
              title={
                isLoading ? (
                  <>
                    <IconLoader className="animate-spin mr-1" />{" "}
                    {"Authenticating...."}
                  </>
                ) : (
                  "Register"
                )
              }
              otherStyles={` ${
                isLoading ? "bg-blue-400 text-white" : "bg-blue-700 text-white"
              } ' w-full h-14 flex justify-center items-center font-semibold mt-5'`}
            />
            <div className=" flex gap-3 mt-3">
              <p>Don't have an account ? </p>
              <a
                onClick={() => dispatch(manipulateSignupModel())}
                href="#"
                className="text-blue-700 font-semibold"
              >
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
