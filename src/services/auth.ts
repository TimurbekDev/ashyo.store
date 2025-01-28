"use client"
import { instance } from "@/hooks/instance";
import { SignInType, SignUpType } from "@/types/AuthType";
import { Dispatch, SetStateAction, useContext } from "react";
import { toast } from "react-toastify";


export const auth = (status: "sign_in" | "sign_up", data: SignInType | SignUpType,
setToken?: Dispatch<SetStateAction<string | null>>) => {

    if (status == "sign_in" && setToken) {
        return instance().post(`/auth/sign-in`, data).then(res => {
            setToken(res.data.access_token);
            toast.success(`Welcome ${res.data.user.fullName}` )
            return res
        }).catch(() => {
            toast.error("User not found!")
        })
    }
    else{
        return instance().post(`/auth/sign-up`, data).then(res => {
            toast.success(`Welcome ${res.data.user.fullName}` )
            return res
        }).catch(() => {
            toast.error("Something is wrong!")
        })
    }
}
