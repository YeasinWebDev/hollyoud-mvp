import { VscDashboard } from "react-icons/vsc";
import { TbCompass } from "react-icons/tb";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { GoFileMedia } from "react-icons/go";
import { GoFileDirectory } from "react-icons/go";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items1 = [
  {
    title: "Explore",
    url: "#",
    icon: VscDashboard,
  },
  {
    title: "Dashboard",
    url: "#",
    icon: TbCompass,
  },
];

const items2 = [
  {
    title: "Manage profile",
    url: "#",
    icon: HiOutlineAdjustmentsHorizontal,
  },

  {
    title: "Media gallery",
    url: "#",
    icon: GoFileMedia,
  },

  {
    title: "Portfolio",
    url: "#",
    icon: GoFileDirectory,
  },
];
const SideBar = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <div className="p-4 border-b border-[#321f55]">
        <img className="w-12" src="https://res.cloudinary.com/dlrktntvb/image/upload/v1730472177/image_1_gkr2vc.png" alt="" />
        </div>
          
        <SidebarGroup>
          <img src="/assets/image-1.png" alt="" />
          <SidebarGroupLabel>general</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items1.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <div className="text-[#DCC9FF] text-[16px]">
                      <item.icon size={20} />
                      <span>{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <img src="/assets/image-1.png" alt="" />
          <SidebarGroupLabel>Professional</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items2.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <div
                      className={`text-[16px] ${
                        item.title === "Manage profile"
                          ? "bg-[#321F55] rounded-lg"
                          : "text-[#DCC9FF]"
                      }`}
                    >
                      <item.icon/>
                      <span>{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default SideBar;
