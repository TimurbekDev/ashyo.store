import React, { SetStateAction } from "react";

export interface ContextType {
    showCategory:boolean,
    setShowCategory:React.Dispatch<SetStateAction<boolean>>
}