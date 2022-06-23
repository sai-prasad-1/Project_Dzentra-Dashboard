import React, { useState } from "react";
import { useContextValues } from "../context/context";
import { BsImageFill,BsTagFill,BsFillPersonFill } from "react-icons/bs";
import { FaShoppingBasket } from "react-icons/fa";
import {AiOutlineUnorderedList,AiOutlineLogout} from "react-icons/ai"
import {MdOutlineLibraryBooks,MdSettingsApplications} from  "react-icons/md"
import {GoGraph} from "react-icons/go"


const navLinks = [
  { title: "Pos", color: "red", icon: BsTagFill },
  { title: "Orders", color: "green", icon: FaShoppingBasket },
  { title: "Order Status Screen", color: "#bfaa1d", icon: AiOutlineUnorderedList },
  { title: "Expense", color: "#a12e08", icon: MdOutlineLibraryBooks },
  { title: "Customers", color: "#b31288", icon: BsFillPersonFill },
  { title: "Services", color: "#0561f5", icon: BsTagFill },
  { title: "Reports", color: "#a89f22", icon: GoGraph },
  { title: "Tools", color: "#ff9d00", icon: MdSettingsApplications },
  { title: "Logout", color: "#878787", icon: AiOutlineLogout },
];

const Sidebar = () => {
  const { open } = useContextValues();
  return (
    <div
      className={`min-w-[50px] h-full max-h-[90vh]  bg-white ${
        open ? "w-[230px] " : ""
      }  shadow-2xl  m-5 rounded-lg md:flex flex-col hidden p-4`}
    >
      <div className="flex items-center justify-center">
        <BsImageFill className="text-2xl" />
        <h1 className={`${open ? "block" : "hidden"} ml-2`}>Laundry</h1>
      </div>

      <div className=" flex flex-col justify-between items-start w-full h-[80%] mt-6">
        {navLinks.map((item)=>{
          const Icon = item.icon;
          return(
          <div className="flex items-center justify-center">
          <Icon className="text-xl" style={{color:item.color}} />
          <h1 className={`${open ? "block" : "hidden"} ml-2 text-sm`}>{item.title}</h1>
        </div>)
          })}
      </div>
    </div>
  );
};

export default Sidebar;
