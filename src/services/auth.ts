"use client"
import { instance } from "@/hooks/instance";
import { SignInType, SignUpType } from "@/types/AuthType";
import { Dispatch, SetStateAction, useContext } from "react";
import { toast } from "react-toastify";


export const auth = (status: "sign_in" | "sign_up" | "forgot_password" | "reset_password" | "otp", data: SignInType | SignUpType | {email: string},
setToken?: Dispatch<SetStateAction<string | null>>) => {

    if (status == "sign_in" && setToken) {
        return instance().post(`/auth/sign-in`, data).then(res => {
            setToken(res.data.access_token);
            toast.success(`Welcome ${res.data.user.fullName}` )
            localStorage.setItem("refreshToken",res.data.refresh_token)
            localStorage.setItem("accessToken",res.data.access_token)
            return res
        }).catch(() => {
            toast.error("User not found!")
        })
    }
    else if(status == "sign_up") {
        return instance().post(`/auth/sign-up`, data).then(res => {
            toast.success(`Welcome ${res.data.user.fullName}` )
            return res
        }).catch(() => {
            toast.error("Something is wrong!")
        })
    }
    else if(status == "forgot_password"){
        return instance().post("/auth/forgot-password", data).then(res=>{
            toast.success(res.data.message)
            return res
        }).catch((err)=>{
            toast.error(err.response.data.message)
        })
    }
    else if(status == "reset_password"){
        return instance().post("/auth/reset-password",data).then(res=>{
            toast.success("Passoword updated")
            return res
        }).catch((err)=>{
            toast.error(err.response.data.message)
        })
    }
   
}
