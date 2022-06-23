import { data } from "autoprefixer";
import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import {GiAtom} from 'react-icons/gi'
import {IoMdThumbsUp} from 'react-icons/io'
import {AiOutlineCheck} from "react-icons/ai"

data = { pendingOrder: 205,processingOrder:99,readyToDeliver:263,delivered:567 };

const StatusBar = () => {
  return (
    <div className="flex w-full justify-center items-center">
    <div className="flex flex-wrap md:justify-between justify-center items-center gap-5 w-[95%] ">
      <div className="md:w-[250px] w-[90%] rounded-xl h-[100px] bg-white flex  items-center p-4">
        <div className="h-full flex flex-col justify-center items-start p-2 w-[50%]">
          <h1 className="text-gray-500 mb-3 text-sm font-semibold">
            Pending Order
          </h1>
          <h2 className="text-base font-bold">{data.pendingOrder}</h2>
        </div>
        <div className="h-full w-[50%] flex items-center justify-center ">
          <div
            className={`w-[50px] h-[50px] rounded-full bg-[#666a70]  flex justify-center items-center `}
          >
            <FaShoppingBasket className="text-white text-2xl" />
          </div>
        </div>
      </div>


      <div className="md:w-[250px] w-[90%] rounded-xl h-[100px] bg-white flex  items-center p-4">
        <div className="h-full flex flex-col justify-center items-start p-2 w-[50%]">
          <h1 className="text-gray-500 mb-3 text-sm font-semibold">Processing Order</h1>
          <h2 className="text-base font-bold">{data.processingOrder}</h2>
        </div>
        <div className="h-full w-[50%] flex items-center justify-center ">
          <div
            className={`w-[50px] h-[50px] rounded-full  bg-[#dba800] flex justify-center items-center `}
          >
            <GiAtom className="text-white text-2xl" />
          </div>
        </div>
      </div>


      <div className="md:w-[250px] w-[90%] rounded-xl h-[100px] bg-white flex  items-center p-4">
        <div className="h-full flex flex-col justify-center items-start p-2 w-[50%]">
          <h1 className="text-gray-500 mb-3 text-sm font-semibold">Ready To Deliver</h1>
          <h2 className="text-base font-bold">{data.readyToDeliver}</h2>
        </div>
        <div className="h-full w-[50%] flex items-center justify-center ">
          <div
            className={`w-[50px] h-[50px] rounded-full bg-[#0a6e21]  flex justify-center items-center `}
          >
            <IoMdThumbsUp className="text-white text-2xl" />
          </div>
        </div>
      </div>


      <div className="md:w-[250px] w-[90%] rounded-xl h-[100px] bg-white flex  items-center p-4">
        <div className="h-full flex flex-col justify-center items-start p-2 w-[50%]">
          <h1 className="text-gray-500 mb-3 text-sm font-semibold">Delivered</h1>
          <h2 className="text-base font-bold">{data.delivered}</h2>
        </div>
        <div className="h-full w-[50%] flex items-center justify-center ">
          <div
            className={`w-[50px] h-[50px] rounded-full bg-[#0a38ab]  flex justify-center items-center `}
          >
            <AiOutlineCheck className="text-white text-2xl" />
          </div>
        </div>
      </div>


    </div>
    </div>
  );
};

export default StatusBar;
