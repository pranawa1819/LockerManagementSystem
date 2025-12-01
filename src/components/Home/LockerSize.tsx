import { useNavigate } from "react-router-dom";
import { lockerSize } from "../../constants/LockerSize-data";

function LockerSize() {
    const navigate = useNavigate();
    const handleSizePath=(path:string)=>{
        navigate(path);
    }
  return (
    <>
      <div className="w-full min-h-screen md:p-8  flex flex-col justify-center items-center">
        <div className="max-w-3xl w-full  flex flex-col  gap-12">
          <div className="text-center">
            <div className="text-[24px] mb-4 text-[#262626] font-500 text-center">
              Select Locker Size
            </div>
            <div className="text-[16px] font-500 text-center text-gray-400">
              Choose the size that best fits your needs
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {lockerSize.map((lockerSizes, index) => (
              <div onClick={()=>handleSizePath(lockerSizes.path)} key={index} className="md:max-w-[254px] h-96 pt-2 pb-2 pl-3 pr-3 border-2 border-gray-400 rounded-md flex flex-col justify-center items-center gap-6">
                <div className="flex justify-center"><lockerSizes.icons className="text-[20px]"/></div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="text-[30px] cursor-pointer">{lockerSizes.size}</div>
                    <div className="text-[14px] cursor-pointer">{lockerSizes.dimension}</div>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </>
  );
}

export default LockerSize;
