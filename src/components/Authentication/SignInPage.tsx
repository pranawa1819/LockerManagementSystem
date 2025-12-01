import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SignInFormSchema } from "../../constants/SiginUpFormValidation.zod";
import { branchList } from "../../constants/BranchList-data";
import { useState } from "react";

type FormValues = z.infer<typeof SignInFormSchema>;
function SignInPage() {
  const [ branch, setBranch] = useState('');
  const form = useForm<FormValues>({ resolver: zodResolver(SignInFormSchema) });
  const navigate = useNavigate();
  const { register, formState, handleSubmit, reset } = form;

  const onsubmit = (data: FormValues) => {
    console.log(data);
    reset();
  };
  const { errors } = formState;
  const navigateToSignInPage = () => {
    navigate("/login-Page");
  };

  const handleBranchSelector =(e: React.ChangeEvent<HTMLSelectElement>)=>{
    const branchName = e.target.value;
    setBranch(branchName);

  }
  return (
    <>
      <div className="w-full min-h-screen md:pt-15 md:pb-15 md:pl-12 md:pr-12 flex justify-center items-center">
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="max-w-md shadow-lg p-7  rounded-lg">
            <div className="text-[20px] text-center mb-1 font-bold">
              Registration Form
            </div>
            <div className="text-[14px] text-center mb-5 text-gray-400">
              Enter your details to get started
            </div>
            <div className="flex flex-col justify-center  w-full  rounded">
              <div className="flex gap-32">
                <label className="block text-gray-700 font-medium mb-1">
                  First Name
                </label>
                <label className="block text-gray-700 font-medium mb-1">
                  Last Name
                </label>
              </div>
              <div className="flex gap-5">
                <input
                  type="text"
                  placeholder="Enter first name"
                  maxLength={10}
                  {...register("firstName")}
                  className="w-full border border-gray-300 rounded-lg p-2  outline-none "
                />

                <input
                  type="password"
                  placeholder="Enter last name"
                  {...register("lastName")}
                  className="w-full border border-gray-300 rounded-lg p-2  outline-none "
                />
              </div>
              <div className="flex gap-12">
                <p className="text-[12px] text-red-500 mb-5">{errors.firstName?.message}</p>
                <p className="text-[12px] text-red-500 mb-5">{errors.lastName?.message}</p>
              </div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="password"
                placeholder="Enter your email"
                {...register("email")}
                className="w-full border border-gray-300 rounded-lg p-2  outline-none "
              />
              <p className="text-[12px] text-red-500 mb-5">{errors.password?.message}</p>
              <label className="block text-gray-700 font-medium mb-1">Branch Name</label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2 outline-none text-gray-500 "
                value={branch}
                onChange={handleBranchSelector}
              >
                <option value="" >Select Branch</option>
                {branchList.map((b, index) => (
                  <option key={index} value={b}>
                    {b}
                  </option>
                ))}
              </select>
              <p className="text-[12px] text-red-500 mb-5">{errors.branch?.message}</p>
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                {...register("password")}
                className="w-full border border-gray-300 rounded-lg p-2  outline-none "
              />
              <p className="text-[12px] text-red-500 mb-5">{errors.password?.message}</p>
              <label className="block text-gray-700 font-medium mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Enter confirm password"
                {...register("confirmPassword")}
                className="w-full border border-gray-300 rounded-lg p-2  outline-none "
              />
              <p className="text-[12px] text-red-500 mb-5">
                {errors.confirmPassword?.message}
              </p>

              <div className="flex justify-between ">
                <div className="flex gap-2">
                  <input type="checkbox" {...register("checkbox")}/>
                  <div className="text-[14px] flex gap-0.5">
                    I agree to the 
                     <span className="text-blue-700 cursor-pointer">
                       Terms and Conditions
                     </span>
                    and
                    <span className="text-blue-700 cursor-pointer">
                      Privacy Policy
                    </span>
                  </div>
                </div>

              </div>
               <p className="text-[12px] text-red-500 mb-5">
                {errors.checkbox?.message}
              </p>

              <button className="bg-[#47446a] text-white px-8 py-3 text-lg transition-all duration-300">
                Sign In
              </button>

              <div className="text-[13px] text-center mt-5 ">
                Already have an account?
                <span
                  className="font-bold cursor-pointer ml-4"
                  onClick={navigateToSignInPage}
                >
                  LogIn
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignInPage;
