import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineUnorderedList, AiOutlineLogout } from "react-icons/ai";
import { MdOutlineLibraryBooks, MdSettingsApplications,MdAdminPanelSettings,MdBookmarkRemove ,MdAdsClick,MdExtension,} from "react-icons/md";



const orders = [
  {
    title: "4545451",
    orderId: "ORD-0254",
    icons: [  AiOutlineUnorderedList, AiOutlineLogout ],
    background:"#b59a14",
  },
  {
    title: "Arif",
    orderId: "ORD-0984",
    icons: [ MdSettingsApplications,MdAdminPanelSettings ,AiOutlineLogout ],
    background:"#b02c12",
  },
  {
    title: "Shiyas",
    orderId: "ORD-0254",
    icons: [ MdBookmarkRemove, MdAdsClick, AiOutlineLogout ],
    background:"#77797a",
  },
  {
    title: "Walk in Customer",
    orderId: "ORD-0254",
    icons: [ MdSettingsApplications, AiOutlineUnorderedList, AiOutlineLogout ],
    background:"#77797a",
  },{
    title: "4545451",
    orderId: "ORD-0254",
    icons: [ MdExtension, AiOutlineUnorderedList, AiOutlineLogout ],
    background:"#3690d9",
  },{
    title: "4545451",
    orderId: "ORD-0254",
    icons: [ MdSettingsApplications, AiOutlineUnorderedList, AiOutlineLogout ],
    background:"#3690d9",
  },
];

const DeliveryBar = () => {
  return (
    <div className="h-auto max-w-[830px] bg-white shadow-lg rounded-lg p-4">
      <div className="flex h-auto w-full justify-between items-center flex-wrap">
        <h1 className="text-xl text-gray-500">Today's Delivery</h1>
        <div className="flex">
          <input
            type="text"
            placeholder="Search Here"
            className="border-gray-400 border-[1px] rounded-lg pl-2 mr-4 md:w-auto w-[200px]"
          />
          <button className="pl-3 pr-3 p-1  text-sm bg-white rounded-md  flex justify-center border-gray-400 border-[1px] items-center">
            All Items
            <IoIosArrowDown className="ml-2" />
          </button>
        </div>
      </div>
    

      <div className="items flex justify-center md:justify-between mt-3 flex-wrap gap-4">
        
      {orders.map((item) => {
      return (
        <div
        className="md:w-[250px] w-[90%] rounded-[15px] h-[100px] p-3 flex flex-col justify-center items-center  border-l-[10px] border-[1px]"
        style={{ borderColor:item.background }}
      >
        <div className="flex justify-between items-center w-full">
          <h1 className="text-sm">{item.title}</h1>
          <h1 className="text-sm">{item.orderId}</h1>
        </div>
        <div className="flex justify-between items-center justify-self-start w-full h-full ">
          <div className="flex  justify-center items-center gap-2 h-full">
            {(item.icons).map((icon) => {
              const Icon = icon;
              return (
                <div className="flex items-center justify-center w-[40px] h-[40px] rounded-[15px] bg-gray-300">
                  <Icon className="text-xl" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      )
    })}
       
      </div>
    </div>
  );
};

export default DeliveryBar;
