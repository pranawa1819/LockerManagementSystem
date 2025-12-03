import { useForm } from "react-hook-form";
import { RiFileAddLine } from "react-icons/ri";
import { AddLockerSchema } from "../../constants/AddLocker.zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { lockerSize } from "../../constants/LockerSize-data";
import { useState } from "react";
type FormValues = z.infer<typeof AddLockerSchema>;
function Addlocker() {
  const [successMsg, setSuccessMsg] = useState("");
  const form = useForm<FormValues>({ resolver: zodResolver(AddLockerSchema) });

  const { register, formState, handleSubmit, reset } = form;
  const onsubmit = (data: FormValues) => {
    console.log(data);
    localStorage.setItem("Locker Type:", JSON.stringify(data));
    reset();
    setSuccessMsg("Locker type added successfully!");
    
    setTimeout(() => {
      setSuccessMsg("");
    }, 3000);

  
  };
  const { errors, isSubmitSuccessful } = formState;
  return (
    <>
      <div className="w-full  flex flex-col md:p-8 gap-8">
        <div className="flex gap-3 items-center">
          <RiFileAddLine className="md:text-[24px]" />
          <div className="md:text-[24px]">Add Locker</div>
        </div>
        {isSubmitSuccessful && (
          <div className="flex justify-center items-center w-sm">
            <span className="bg-green-400 rounded-md text-center text-white px-3 py-4">{successMsg}</span>
          </div>
        )}
        <div className="w-full  flex  items-center">
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="w-xl shadow-lg p-7  rounded-lg">
              <div className="text-[20px] text-center mb-2 font-bold">
                Update Locker Type
              </div>
              <div className="text-[14px] text-center mb-5 text-gray-400">
                Fill the info
              </div>
              <div className="flex flex-col justify-center  w-full  rounded">
                <label className="block text-gray-700 font-medium mb-1">
                  Size of Locker
                </label>
                <select
                  className="w-full border border-gray-300 rounded-lg p-2  outline-none text-gray-400"
                  {...register("lockersize")}
                >
                  <option value="">Select Province</option>
                  {lockerSize.map((p, index) => (
                    <option key={index} value={p.size}>
                      {p.size}
                    </option>
                  ))}
                </select>
                <p className="text-[12px] text-red-500 mb-5">
                  {errors.lockersize?.message}
                </p>

                <label className="block text-gray-700 font-medium mb-1">
                  Price
                </label>
                <input
                  type="number"
                  placeholder="Enter price"
                  {...register("price")}
                  className="w-full border border-gray-300 rounded-lg p-2  outline-none "
                />
                <p className="text-[12px] text-red-500 mb-5">
                  {errors.price?.message}
                </p>

                <button className="bg-[#47446a] text-white px-8 py-3 text-lg transition-all duration-300">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Addlocker;
