import React, { useContext, useState, useEffect } from "react";

const Context = React.createContext();

export function useContextValues() {
  return useContext(Context);
}

export function ContextProvider({ children }) {
    const [open, setOpen] = useState(false)

    const pieData = [
        {
           name: "Pending Order",
           value: 205
        },
        {
           name: "Processing Order",
           value: 99
        },
        {
           name: "Ready To Deliver",
           value: 263
        },
        {
           name: "Delivered",
           value: 16.14
        },
        
     ];

     const COLORS = ["#81858a", "#ffbf00", "#135735", "#2024f7"];
  

  const value = {
    open,
    setOpen,
    pieData,
    COLORS
  
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}