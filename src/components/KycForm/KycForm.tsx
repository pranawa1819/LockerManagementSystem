import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import SmallLockerDetails from "./SmallLocker";
import PersonalDetails from "./PersonalDetails";
import AddressDetails from "./AddressDetails";
import DocumentDetails from "./DocumentDetails";
import { zodResolver } from "@hookform/resolvers/zod";
import { KycDetailsSchema, type FormValues } from "../../constants/KycDetails.zod";

function KycForm() {
  const methods = useForm({
    resolver: zodResolver(KycDetailsSchema),
  }); 
  const { handleSubmit } = methods;

  const [step, setStep] = useState(1);
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const onsubmit = (data: FormValues) => {
    console.log(data)
    localStorage.setItem("kycFormData", JSON.stringify(data));
  };
  
  
  return (
    <FormProvider {...methods}>
      <div className="min-h-screen md:pt-10 md:pb-15 md:pl-12 md:pr-12 flex flex-col justify-center items-center gap-8">
        <div className="text-[24px] font-bold ">KYC Form</div>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="flex gap-2 mb-5 justify-center items-center">
            {[1, 2, 3, 4, 5].map((s) => (
              <div
                key={s}
                className={`w-8 h-8 rounded-full ${
                  step === s ? "bg-blue-600 text-center p-1" : "bg-gray-400 text-center p-1"
                }`}
              >{s}</div>
            ))}
          </div>

          {step === 1 && <SmallLockerDetails />}
          {step === 2 && <PersonalDetails />}
          {step === 3 && <AddressDetails />}
          {step === 4 && <DocumentDetails />}
          

          <div className=" flex gap-4 mt-4 justify-center items-center">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className=" bg-[#47446a] text-white px-15 py-3 text-lg transition-all duration-300"
              >
                Previous
              </button>
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className=" bg-[#47446a] text-white px-20 py-3 text-lg transition-all duration-300"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className=" bg-[#47446a] text-white px-15 py-3 text-lg transition-all duration-300"
              >
                Submit
              </button>
            )}
          </div>

          
        </form>
      </div>
    </FormProvider>
  );
}
export default KycForm;
