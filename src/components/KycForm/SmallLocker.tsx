import { useFormContext } from "react-hook-form";
import { branchList } from "../../constants/BranchList-data";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function SmallLockerDetails() {
  const [branch, setBranch] = useState("");
  const location= useLocation();
  const size=location.search.split('=').at(-1);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const handleBranchSelector = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const branchName = e.target.value;
    setBranch(branchName);
  };
  
  return (
    <>
      <div className="w-full   flex justify-center items-center">
        
          <div className="w-md shadow-lg p-7  rounded-lg">
            <div className="text-[20px] text-center mb-5 font-bold">
              {size} Locker Details
            </div>
            <div className="flex flex-col justify-center  w-full  rounded">
              <label className="block text-gray-700 font-medium mb-1">
                SIZE
              </label>
              <input
                type="text"
                placeholder="Enter size"
                value={size}
                {...register("size")}
                className="w-full border border-gray-300 rounded-lg p-2  outline-none "
              />
              <p className="text-[12px] text-red-500 mb-5">
                {errors.size?.message}
              </p>

              <label className="block text-gray-700 font-medium mb-1">
                DATE
              </label>
              <input
                type="date"
                {...register("reversedDate")}
                className="w-full border border-gray-300 rounded-lg p-2  outline-none "
              />
              <p className="text-[12px] text-red-500 mb-5">
                {errors.reversedDate?.message}
              </p>

              <label className="block text-gray-700 font-medium mb-1">
                ACCOUNT NUMBER
              </label>
              <input
                type="text"
                placeholder="Enter account number"
                {...register("accountNumber")}
                className="w-full border border-gray-300 rounded-lg p-2  outline-none "
              />
              <p className="text-[12px] text-red-500 mb-5">
                {errors.accountNumber?.message}
              </p>

              <label className="block text-gray-700 font-medium mb-1">
                BANK NAME
              </label>
              <input
                type="text"
                placeholder="Enter bank name"
                {...register("bankName")}
                className="w-full border border-gray-300 rounded-lg p-2  outline-none "
              />
              <p className="text-[12px] text-red-500 mb-5">
                {errors.bankName?.message}
              </p>

              <label className="block text-gray-700 font-medium mb-1">
                Branch Name
              </label>
              <select
                {...register("branch")}
                className="w-full border border-gray-300 rounded-lg p-2 outline-none text-gray-500 "
                value={branch}
                onChange={handleBranchSelector}
              >
                <option value="">Select Branch</option>
                {branchList.map((b, index) => (
                  <option key={index} value={b}>
                    {b}
                  </option>
                ))}
              </select>
              <p className="text-[12px] text-red-500 mb-5">
                {errors.branch?.message}
              </p>
            </div>
          </div>
       
      </div>
    </>
  );
}

export default SmallLockerDetails;
