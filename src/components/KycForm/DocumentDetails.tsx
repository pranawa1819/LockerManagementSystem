import { useFormContext } from "react-hook-form";

function DocumentDetails() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="w-md shadow-lg  p-7 rounded-lg">
          <div className="text-[20px] text-center mb-5 font-bold">Document</div>
          <div className="flex flex-col justify-center  w-full  rounded">
            <label className="block text-gray-700 font-medium mb-1">
              DATE OF BIRTH
            </label>
            <input
              type="date"
              placeholder="Enter your date of birth"
              maxLength={10}
              {...register("dateOfBirth")}
              className="w-full border border-gray-300 rounded-lg p-2  outline-none "
            />
            <p className="text-[12px] text-red-500 mb-5">
              {errors.dateOfBirth?.message as string}
            </p>

            <label className="block text-gray-700 font-medium mb-1">
              OCCUPATION
            </label>
            <input
              type="text"
              placeholder="Enter your occupation"
              {...register("occupation")}
              className="w-full border border-gray-300 rounded-lg p-2  outline-none "
            />
            <p className="text-[12px] text-red-500 mb-5">
              {errors.occupation?.message as string}
            </p>

            <label className="block text-gray-700 font-medium mb-1">
              ANNUAL SALARY
            </label>
            <input
              type="text"
              placeholder="Enter your annual salary"
              {...register("annualSalary")}
              className="w-full border border-gray-300 rounded-lg p-2  outline-none "
            />
            <p className="text-[12px] text-red-500 mb-5">
              {errors.annualSalary?.message as string}
            </p>

            <label className="block text-gray-700 font-medium mb-1">
              PHOTO
            </label>
            <input
              type="file"
              {...register("photo")}
              className="w-full border border-gray-300 rounded-lg p-2  outline-none"
            />
            <p className="text-[12px] text-red-500 mb-5">
              {errors.photo?.message as string}
            </p>

            <label className="block text-gray-700 font-medium mb-1">
              CITIZENSHIP
            </label>
            <div className="flex justify-center items-center gap-3">
              <label className="block text-gray-700 font-medium  text-center">
                FRONT
              </label>
              <input
                type="file"
                {...register("citizenshipFront")}
                className="w-full border border-gray-300 rounded-lg p-2  outline-none"
              />
            </div>
            <p className="text-[12px] text-red-500 mb-5">
              {errors.citizenshipFront?.message as string}
            </p>

            <div className="flex justify-center items-center gap-5">
              <label className="block text-gray-700 font-medium text-center">
                BACK
              </label>
              <input
                type="file"
                {...register("citizenshipBack")}
                className="w-full border border-gray-300 rounded-lg p-2  outline-none "
              />
            </div>
            <p className="text-[12px] text-red-500 mb-5">
              {errors.citizenshipBack?.message as string}
            </p>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default DocumentDetails;
