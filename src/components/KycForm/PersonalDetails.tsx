import { useFormContext } from "react-hook-form";

function PersonalDetails() {
 const {
     register,
     formState: { errors },
   } = useFormContext();
 
  return (
    <>
      <div className="w-full   flex justify-center items-center">
        
          <div className="w-md shadow-lg p-7  rounded-lg">
            <div className="text-[20px] text-center mb-5 font-bold">
              Personal Details
            </div>
            <div className="flex flex-col justify-center  w-full  rounded">
              <label className="block text-gray-700 font-medium mb-1">
                FUll NAME
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                maxLength={10}
                {...register("fullName")}
                className="w-full border border-gray-300 rounded-lg p-2  outline-none "
              />
              {errors.fullName &&(
              <p className="text-[12px] text-red-500 mb-5">{errors?.fullName?.message as string} </p>
)}
              <label className="block text-gray-700 font-medium mb-1">
                PHONE NUMBER
              </label>
              <input
                type="tel"
                placeholder="Enter phone number"
                {...register("phoneNumber")}
                className="w-full border border-gray-300 rounded-lg p-2  outline-none "
              />
              <p className="text-[12px] text-red-500 mb-5">{errors.phoneNumber?.message as string}</p>

              <label className="block text-gray-700 font-medium mb-1">
                EMAIL
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email")}
                className="w-full border border-gray-300 rounded-lg p-2  outline-none "
              />
              <p className="text-[12px] text-red-500 mb-5">{errors.email?.message as string}</p>

              <label className="block text-gray-700 font-medium mb-1">
                MARITAL STATUS
              </label>
              <div className="flex items-center gap-5 mb-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="single"
                    {...register("maritalStatus")}
                  />
                  Single
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="married"
                    {...register("maritalStatus")}
                  />
                  Married
                </label>
              </div>
              <p className="text-[12px] text-red-500 mb-5">
                {errors.maritalStatus?.message as string}
              </p>

              <label className="block text-gray-700 font-medium mb-1">
                NATIONALITY
              </label>
              <input
                type="text"
                placeholder="Enter your nationality"
                {...register("nationality")}
                className="w-full border border-gray-300 rounded-lg p-2  outline-none "
              />
              <p className="text-[12px] text-red-500 mb-5">{errors.nationality?.message as string}</p>

            </div>
          </div>
        
      </div>
    </>
  );
}

export default PersonalDetails;
