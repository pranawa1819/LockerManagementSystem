import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { GiLockedChest } from "react-icons/gi";
import { MdOutlineAssignment } from "react-icons/md";
import { GoReport } from "react-icons/go";
import { IoSettings } from "react-icons/io5";




export const items = [
  {
    icon: MdOutlineDashboardCustomize,
    title: "Dashboard",
    url: "/dashboard"
  },
  {
    title: "Sub Admin",
    icon: RiAdminFill,
    subMenu:{
      firstMenu:{name:"Add", urls:"/add"},
      secondMenu:{name:"Manage", urls:"/manage"}
    }
  },
  {
    title: "Locker Type",
    icon: GiLockedChest,
    subMenu:{
      firstMenu:{name:"Add", urls:"/add-locker"},
      secondMenu:{name:"Manage", urls:"/manage-locker"}
    }
  },
  {
    title: "Assign Locker",
    icon: MdOutlineAssignment,
    url: "/assign-locker",
    subMenu:{
      firstMenu:{name:"Add", urls:"/assign-locker"},
      secondMenu:{name:"Manage", urls:"/manage-assignLocker"}
    }
  },
  {
    title: "Report",
    url: "/report",
    icon: GoReport
  },
  {
    title: "Account Settings",
    icon: IoSettings,
    subMenu:{
      firstMenu:{name:"Change Password", urls:"/change-password"},
      secondMenu:{name:"LogOut", urls:"/login-page"}
    }
  },
];
