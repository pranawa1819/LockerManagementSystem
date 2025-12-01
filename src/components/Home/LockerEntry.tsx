import { LuScan } from "react-icons/lu";
import { FaHashtag } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function LockerEntry() {
    const navigate = useNavigate();
    const handleEnterCode =()=>{
        navigate("/enterCode");
    }
    const handleQRCode =()=>{
        navigate("/QRCode");
    }
    const handleLockerSelection =()=>{
        navigate("/locker-size")
    }
  return (
    <>
      <div className="w-full min-h-screen md:p-8  flex flex-col justify-center items-center">
        <div className="max-w-2xl w-full  flex flex-col  gap-12">
          <div className="text-center">
            <div className="text-[24px] mb-4 text-[#262626] font-500 text-center">
              Welcome to Smart Locker
            </div>
            <div className="text-[16px]text-[#262626] font-500 text-center text-gray-400">
              Please select and option to continue
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="md:max-w-[324px] h-64 pt-2 pb-2 pl-3 pr-3 border-2 border-gray-400 rounded-md flex flex-col justify-center items-center gap-6" onClick={handleQRCode}>
              <LuScan className="text-[24px]" />
              <div className="md:text-[24px] cursor-pointer">Scan QR Code</div>
            </div>

            <div className="md:max-w-[324px] h-64 pt-2 pb-2 pl-3 pr-3 border-2 border-gray-400 rounded-md flex flex-col justify-center items-center gap-6" onClick={handleEnterCode}>
              <FaHashtag className="text-[24px]" />
              <div className="md:text-[24px] cursor-pointer">Code</div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="bg-[#47446a] text-white px-10 py-3 text-lg transition-all duration-300 text-center rounded-md flex justify-center items-center gap-2"
            onClick={handleLockerSelection}
            >
              <FaPlus /> New
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LockerEntry;
