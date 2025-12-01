import { Outlet } from "react-router-dom";
import KycForm from "../KycForm/KycForm";

function Layout(){
    return(
        <>
        <div className="md:pt-10 md:pb-15 md:pl-12 md:pr-12 flex flex-col justify-center items-center gap-8">
        <KycForm />
        <Outlet />
        </div>
        
        </>
    );
};

export default Layout;