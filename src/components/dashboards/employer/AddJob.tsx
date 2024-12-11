import { FaSuitcase } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
export const AddJob = () => {
  return (
    <>
        <h1 className=" text-3xl mb-4">Manage Jobs</h1>
        <div className=" flex items-center gap-3 text-sm">
            <p>Home</p>
            <GoDotFill/>
            <p>Dasboard</p>
            <GoDotFill/>
            <p className=" text-blue-600">My Job Listing</p>
        </div>
        <div className=" bg-white p-5 mt-14">
        <div className=" flex gap-4 items-center mb-3">
            <FaSuitcase size='20px'/>
            <p className=" text-lg font-bold text-gray-700">Job Details</p>
        </div>
        </div>
        <p className=" h-[1.5px] bg-gray-300 w-full"/>
    </>
  )
}
