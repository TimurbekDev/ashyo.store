"use client"
import { ContextType } from "@/types/ContextType";
import React, { createContext, useState } from "react";

export const Context = createContext<ContextType>({
    showCategory: false,
    setShowCategory: ()=>null,
})

export const GlobalContext:React.FC<{children:React.ReactNode}>=({children})=>{
    const [showCategory, setShowCategory] = useState<boolean>(false)

    return <Context.Provider value={{showCategory,setShowCategory}}>{children}</Context.Provider>
}