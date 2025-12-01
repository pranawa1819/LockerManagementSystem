import OTP from "./InputOtp";

function EnterCode() {
  return (
    <>
      <div className="w-full min-h-screen md:p-8  flex flex-col justify-center items-center">
        <div className="max-w-2xl w-full  flex flex-col gap-12">
          <div className="text-center">
            <div className="text-[24px] mb-4 text-[#262626] font-500 text-center">
              Enter Your Code
            </div>
            <div className="text-[16px]text-[#262626] font-500 text-center text-gray-400">
              Please enter the numeric code provided
            </div>
          </div>
          <div className="flex justify-center">
            <OTP />
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="bg-[#47446a]  text-white px-10 py-3 text-lg transition-all duration-300 text-center rounded-md "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EnterCode;
