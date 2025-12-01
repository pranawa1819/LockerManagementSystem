import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LoginFormSchema } from "../../constants/LoginFormValidation.zod";

type FormValues = z.infer<typeof LoginFormSchema>;
function LoginPage() {
  const form = useForm<FormValues>({ resolver: zodResolver(LoginFormSchema) });
  const navigate = useNavigate();
  const { register, formState, handleSubmit, reset } = form;

  const onsubmit = (data: FormValues) => {
    console.log(data);
    reset();
  };
  const { errors } = formState;
  const navigateToSignInPage = () => {
    navigate("/signin-Page");
  };
  return (
    <>
      <div className="w-full min-h-screen md:pt-25 md:pb-50 md:pl-12 md:pr-12 flex justify-center items-center">
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="w-md shadow-lg p-7  rounded-lg">
            <div className="text-[20px] text-center mb-5 font-bold">Login Page</div>
            <div className="flex flex-col justify-center  w-full  rounded">
              
              <label className="block text-gray-700 font-medium mb-1">
                PhoneNumber
              </label>
              <input
                type="text"
                placeholder="Enter phone number"
                maxLength={10}
                {...register("phoneNumber")}
                className="w-full border border-gray-300 rounded-lg p-2  outline-none "
              />
              <p className="text-red-500 mb-5">{errors.phoneNumber?.message}</p>

              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                {...register("password")}
                className="w-full border border-gray-300 rounded-lg p-2  outline-none "
              />
              <p className="text-red-500 mb-5">{errors.password?.message}</p>
              
              <div className="flex justify-between ">
                <div className="flex gap-2">
                    <input type="checkbox" {...register("checkbox")}/>
                    <div>Remember Me</div>
                </div>
                <div className="text-blue-700 cursor-pointer">Forget Password?</div>
              </div>
              <p className="text-red-500 mb-5">
                {errors.checkbox?.message}
              </p>
              
              <button className="bg-[#47446a] text-white px-8 py-3 text-lg transition-all duration-300">
                Logged In
              </button>

              <div className="text-[13px] text-center mt-5">
                Don't have an account?
                <span
                  className="font-bold cursor-pointer ml-4"
                  onClick={navigateToSignInPage}
                >
                  Sign Up
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
