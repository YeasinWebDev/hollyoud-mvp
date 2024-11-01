import {  SidebarTrigger } from "@/components/ui/sidebar";
import { LuClipboardList } from "react-icons/lu";
import { FaBell } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";

const NavBar = () => {
  return (
    <div className="flex items-center p-4 bg-[#000000] w-full text-white h-[92px]">
      <SidebarTrigger size={20}/>
      <div className="flex items-center justify-between w-full px-10">
        <h1 className="text-xl">Manage Profile</h1>
        <div className="flex gap-10 items-center">
          <LuClipboardList size={20} />
          <FaBell size={20} />
          <LuMessagesSquare size={20} />
          <div className="flex  items-center gap-2">
            <h1 className="bg-[#7C4DD4] w-12 h-12 flex items-center justify-center rounded-full text-[16px]">JD</h1>
            <div>
              <h1 className="">John Doe</h1>
              <p className="text-[12px] text-[#666666]">Professional</p>
            </div>
          </div>
          <MdKeyboardArrowDown size={20}/>
        </div>
      </div>
    </div>
  )
}

export default NavBar