import { LuScan } from "react-icons/lu";
function QRScanning() {
  return (
    <>
      <div className="w-full min-h-screen md:p-8  flex flex-col justify-center items-center">
        <div className=" w-full  md:max-w-2xl flex flex-col gap-12">
          <div className="text-center">
            <div className="text-[24px] mb-4 text-[#262626] font-500 text-center">
              Scan your QR code
            </div>
            <div className="text-[16px] font-500 text-center text-gray-400">
              Please present your QR code to scanner
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[384px] h-96 pt-2 pb-2 pl-3 pr-3 border-2 border-gray-400 rounded-md flex flex-col justify-center items-center gap-6">
              <LuScan className="text-[192px] " />
              <div className="md:text-[16px] font-500 text-center text-gray-400">Scanning</div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="bg-[#47446a]  text-white px-10 py-3 text-lg transition-all duration-300 text-center rounded-md "
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default QRScanning;
