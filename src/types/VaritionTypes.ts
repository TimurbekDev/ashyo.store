import { Dispatch, SetStateAction } from "react"

export interface ProductFilterType {
    setMinPrice:Dispatch<SetStateAction<number>>,
    setMaxPrice:Dispatch<SetStateAction<number>>,
    setBrandId:Dispatch<SetStateAction<number | null>>
}



export interface VarationType {
    id:number,
    value:string,
    varationId:number
}