import { Outlet } from "react-router-dom";
import { AppSidebar } from "../Admin/SideBar";
import { SidebarProvider} from "../ui/sidebar";

function Layout() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />

        <Outlet/>
      </SidebarProvider>
    </>
  );
}

export default Layout;
