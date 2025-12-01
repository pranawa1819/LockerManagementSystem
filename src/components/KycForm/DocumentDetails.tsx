import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { DocumentDetailsSchema } from "../../constants/DocumentDetails.zod";

type FormValues = z.infer<typeof DocumentDetailsSchema>;
function DocumentDetails() {
  const form = useForm<FormValues>({
    resolver: zodResolver(DocumentDetailsSchema),
  });
  const { register, formState, handleSubmit } = form;
  const navigate = useNavigate();
  const onsubmit = () => {
    navigate("/address-details");
  };
  const { errors } = formState;
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="w-md shadow-lg  p-7 rounded-lg">
            <div className="text-[20px] text-center mb-5 font-bold">
              Document
            </div>
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
                {errors.dateOfBirth?.message}
              </p>

              <label className="block text-gray-700 font-medium mb-1">
                OCCUPATION
              </label>
              <input
                type="text"
                placeholder="Enter phone number"
                {...register("occupation")}
                className="w-full border border-gray-300 rounded-lg p-2  outline-none "
              />
              <p className="text-[12px] text-red-500 mb-5">
                {errors.occupation?.message}
              </p>

              <label className="block text-gray-700 font-medium mb-1">
                Annual Salary
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                {...register("annualSalary")}
                className="w-full border border-gray-300 rounded-lg p-2  outline-none "
              />
              <p className="text-[12px] text-red-500 mb-5">
                {errors.annualSalary?.message}
              </p>

              <label className="block text-gray-700 font-medium mb-1">
                CITIZENSHIP
              </label>

              <input type="file" {...register("citizenshipFront")} className="w-full border border-gray-300 rounded-lg p-2  outline-none"/>
              <p className="text-[12px] text-red-500 mb-5">
                {errors.citizenshipFront?.message}
              </p>
              <input type="file" {...register("citizenshipBack")} className="w-full border border-gray-300 rounded-lg p-2  outline-none "/>
              <p className="text-[12px] text-red-500 mb-5">
                {errors.citizenshipBack?.message}
              </p>
              <button className="bg-[#47446a] text-white px-8 py-3 text-lg transition-all duration-300">
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default DocumentDetails;
