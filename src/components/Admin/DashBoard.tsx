import { MdOutlineDashboardCustomize } from "react-icons/md";
import { dashboardData } from "../../constants/Dashboard-data";
function DashBoard(){
    return(
        <>
        <div className="w-full  flex flex-col md:p-8 gap-8">
            <div className="flex gap-3 items-center">
              <MdOutlineDashboardCustomize className="md:text-[24px]"/>
              <div className="md:text-[24px]">DashBoard</div>
                
            </div>
            
            <div className=" flex md:gap-10 items-center justify-center">
                {dashboardData.map((dashboardDatas, index)=>
                 <div key={index} className="w-full flex md:gap-6 md:px-7 md:py-5 xl:px-9 xl:py-10 items-center " style={{ backgroundColor: dashboardDatas.color }}>
                    <dashboardDatas.icon className="md:text-[30px] text-white"/>
                    <div className="flex flex-col md:gap-2 justify-center">
                        <span className="md:text-[24px] text-white font-bold ">{dashboardDatas.count}</span>
                        <span className="md:text-[12px] xl:text-[16px] text-white ">{dashboardDatas.names}</span>
                    </div>
                 </div>
                )}
            </div>
        </div>
        </>
    );
};

export default DashBoard;