import { items } from "../../constants/SideBar-data";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "../ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[24px] font-medium mt-8 mb-8">
            Locker Management
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="gap-6">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  
                  {item.subMenu ? (
                    <Collapsible className="group/collapsible">
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="hover:bg-gray-300">
                          <item.icon className="text-[20px]" />
                          <span className="text-[18px]">{item.title}</span>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>

                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>
                            <div className="flex flex-col gap-2">
                              <a href={item.subMenu?.firstMenu.urls}>
                                <span className="text-[16px]">
                                  {item.subMenu?.firstMenu.name}
                                </span>
                              </a>
                              <a href={item.subMenu?.secondMenu.urls}>
                                <span className="text-[16px]">
                                  {item.subMenu?.secondMenu.name}
                                </span>
                              </a>
                            </div>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    
                    <SidebarMenuButton asChild className="hover:bg-gray-300">
                      <a href={item.url}>
                        <item.icon className="text-[20px]" />
                        <span className="text-[18px]">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  )}

                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
