import React, { ReactNode, SetStateAction } from "react";


export interface ModalType{
    children:ReactNode,
    modalClass?:string,
    open:boolean,
    setOpen:React.Dispatch<SetStateAction<boolean>>
}