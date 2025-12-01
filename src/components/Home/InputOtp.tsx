import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../ui/input-otp";

function OTP() {
  return (
    <>
      <InputOTP maxLength={6} className="">
        <InputOTPGroup className="flex gap-5 mt-10 ">
          <InputOTPSlot
            index={0}
            className="w-14 h-14 border-2 border-gray-400 focus:outline:none focus:outline-[#47446a] text-center"
          />
          <InputOTPSlot
            index={1}
            className="w-14 h-14 border-2 border-gray-400 focus:outline:none focus:outline-[#47446a] text-center"
          />
          <InputOTPSlot
            index={2}
            className="w-14 h-14 border-2 border-gray-400 focus:outline:none focus:outline-[#47446a]  text-center"
          />
        </InputOTPGroup>
        <InputOTPSeparator className="mt-10 " />
        <InputOTPGroup className="flex gap-5 mt-10 ">
          <InputOTPSlot
            index={3}
            className="w-14 h-14 border-2 border-gray-400 focus:outline:none focus:outline-[#47446a]  text-center"
          />
          <InputOTPSlot
            index={4}
            className="w-14 h-14 border-2 border-gray-400 focus:outline:none focus:outline-[#47446a]  text-center"
          />
          <InputOTPSlot
            index={5}
            className="w-14 h-14 border-2 border-gray-400 focus:outline:none focus:outline-[#47446a]  text-center"
          />
        </InputOTPGroup>
      </InputOTP>
    </>
  );
}

export default OTP;
