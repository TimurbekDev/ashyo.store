import React, { SetStateAction } from "react";

export interface ContextType {
    showCategory:boolean,
    setShowCategory:React.Dispatch<SetStateAction<boolean>>,
    token:string | null,
    setToken:React.Dispatch<SetStateAction<string | null>>
}