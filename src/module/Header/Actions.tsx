"use client";
import { Button, Input, Modal } from "@/components";
import { Context } from "@/context";
import { BasketCartIcon, CompareIcon, LikeIcon, ProfileIcon } from "@/icons";
import { auth, getLikes } from "@/services";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useContext, useRef, useState } from "react";
import { SignIn, SignUp } from "./auth";
import { IMAGE_API, instance } from "@/hooks";
import { toast } from "react-toastify";
import { UserTypes } from "@/types";
import { Input as NextUIInput } from "@heroui/input";
import { FaCamera, FaEye } from "react-icons/fa";
import { getCart } from "@/services/getAllCart";
import { useRouter } from "next/navigation";
import { getMe } from "@/services/getMe";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Actions = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { token, setToken } = useContext(Context);
  const [authStatus, setAuthStatus] = useState<"sign_in" | "sign_up">(
    "sign_in"
  );
  const [profileModal, setProfileModal] = useState<boolean>(false);
  const [meModal, setMeModal] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [image, setImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [isVerified, setIsVerified] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const queryClient = useQueryClient()
  const { likes } = getLikes();
  const { cartItems } = getCart();
  const {userData} = getMe()
  const router = useRouter();
  const actionList = [
    {
      id: 1,
      bageCount: 2,
      icon: <CompareIcon />,
    },
    {
      id: 2,
      bageCount: likes.length ? likes.length : "",
      icon: <LikeIcon />,
    },
    {
      id: 3,
      bageCount: cartItems.length ? cartItems.length : "",
      icon: <BasketCartIcon />,
    },
    {
      id: 4,
      bageCount: null,
      icon: <ProfileIcon />,
    },
  ];



  function handleLogOut(){
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    router.push("/")
  }

  const updateUserMutation = useMutation({
    mutationFn: (formData: any) =>instance().patch("/me", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    onSuccess: () => {
      toast.success("Ma'lumotlar yangilandi!");
      queryClient.invalidateQueries({ queryKey: ["user"] });
      setPassword("")
      setMeModal(false)
    },
    onError: () => {
      toast.error("Xatolik yuz berdi, qaytadan urinib ko'ring!");
    },
  });
  
  const handleUpdateUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  

  
    const formData = new FormData();
    formData.append("fullName", userName);
    formData.append("email", email);
    formData.append("password", password);
  
    if (imageFile) {
      formData.append("image", imageFile);
    }
  
    updateUserMutation.mutate(formData)
  };
  

  async function handleVerifyUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await instance().post(
        "/auth/verify-send",
        { email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Verification sended check email");
      await userProfileModalSettings();
      if (isVerified) {
        setIsVerified(true);
        toast.success("Verfication successfully");
      }
    } catch (error) {
      toast.error("Verification failed");
    }
  }

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    const objectUrl = URL.createObjectURL(file);
    setImage(objectUrl);
  };
  

  async function userProfileModalSettings() {
    setMeModal(true);
      setUserName(userData.fullName);
      setImage(userData.image);
      setIsVerified(userData.isVerified);
    
  }

  async function handleActionClick(id: number) {
    if (id === 4) {
      try {
        const response = await instance().get("/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          userProfileModalSettings();
        } else {
          toast.warning("Authentication failed");
        }
      } catch (error) {
        setProfileModal(true);
        toast.warning("Please sign in");
      }
    } else if (id == 3) {
      router.push(`/cart`);
    } else if (id == 2) {
      router.push("/favorites");
    }
  }

  async function handleAuthSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (authStatus == "sign_in") {
      setIsLoading(true);
      const data = {
        email: (e.target as HTMLFormElement).email.value,
        password: (e.target as HTMLFormElement).password.value,
      };
      const result = await auth("sign_in", data, setToken);
      if (result?.status == 201 || result?.status == 200) {
        setProfileModal(false);
        (e.target as HTMLFormElement).reset();
        setIsLoading(false);
        window.location.reload()
      }
    } else if (authStatus == "sign_up") {
      const data = {
        fullName: (e.target as HTMLFormElement).fullName.value,
        email: (e.target as HTMLFormElement).email.value,
        password: (e.target as HTMLFormElement).password.value,
      };
      const result = await auth("sign_up", data);
      if (result?.status == 201 || result?.status == 200) {
        setAuthStatus("sign_in");
        (e.target as HTMLFormElement).reset();
      }
    }
  }
  return (
    <>
      <div className="hidden sm:flex gap-[15px]">
        {actionList.map((item) => (
          <div
            onClick={() => handleActionClick(item.id)}
            key={item.id}
            className="w-[50px] h-[48px] relative cursor-pointer bg-[#EBEFF3] rounded-[6px] flex items-center justify-center"
          >
            {item.icon}
            {item.bageCount && (
              <div className="absolute w-[20px] h-[20px] bg-[#E81504] text-white font-bold text-[10px] flex items-center justify-center rounded-full -top-[10px] -right-[10px]">
                {item.bageCount}
              </div>
            )}
          </div>
        ))}
      </div>
      <Modal
        modalClass={`!h-[420px]`}
        open={profileModal}
        setOpen={setProfileModal}
      >
        <div className="flex items-center mt-[20px] justify-center">
          <Image
            style={{ width: "50px", height: "80px" }}
            className="scale-[1.6]"
            src={"/logo.svg"}
            alt="Site Logo"
            width={50}
            height={80}
            priority
          />
          <span className="text-[#0F4A97] font-bold text-[29px]">Ashyo</span>
        </div>
        <ul className="flex mt-2 items-center justify-center gap-5">
          <li
            onClick={() => setAuthStatus("sign_in")}
            className={`cursor-pointer text-[20px] text-[#0F4A97] font-semibold border-b-[2px] ${
              authStatus == "sign_in"
                ? "border-[#0F4A97]"
                : "border-transparent"
            }`}
          >
            Sign In
          </li>
          <li
            onClick={() => setAuthStatus("sign_up")}
            className={`cursor-pointer text-[20px] text-[#0F4A97] font-semibold border-b-[2px] ${
              authStatus == "sign_up"
                ? "border-[#0F4A97]"
                : "border-transparent"
            }`}
          >
            Sign Up
          </li>
        </ul>
        <form onSubmit={handleAuthSubmit} className="px-5 mt-5 space-y-2">
          {authStatus == "sign_in" && <SignIn isLoading={isLoading} />}
          {authStatus == "sign_up" && <SignUp isLoading={isLoading} />}
        </form>
      </Modal>

      <Modal modalClass="!h-[320px]" open={meModal} setOpen={setMeModal}>
        <div className="flex items-center justify-center flex-col border w-full max-w-sm md:max-w-md lg:max-w-lg">
          <div className="relative w-[100px] h-[100px] group">
          
            <Image
              src={image ? image.startsWith("blob:") ? image : `${IMAGE_API}/${image}` : "/music-img.png"}
              alt="user image"
              width={100}
              height={100}
              className="rounded-full"
            />
            <div className="absolute inset-0 flex">
              <div className="w-1/2 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-full">
                {!image?.startsWith("blob:")?<FaEye
                  className="text-white w-6 h-6 cursor-pointer"
                  onClick={() => {
                    if (image) {
                      window.location.href = `${IMAGE_API}/${image}`;
                    } else {
                      const randomImage =
                        "https://source.unsplash.com/random/100x100";
                      window.location.href = randomImage;
                    }
                  }}
                />: ""}
              </div>
              <div className="w-1/2 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r-full">
              <input
                  type="file"
                  accept="image/*"
                  hidden
                  ref={fileInputRef}
                  onChange={(e) => handleFileSelect(e)
                  }
                />
                <FaCamera 
                  className="text-white w-6 h-6 cursor-pointer" 
                  onClick={() => fileInputRef.current?.click()}
                  />
              </div>
            </div>
          </div>

          <div className="w-full px-5 flex flex-col space-y-3">
            <NextUIInput
              label="Full Name"
              value={userName}
              className="w-full"
              name="updateFullName"
              onChange={(e)=>setUserName(e.target.value)}
            />
            <NextUIInput
              label="Password"
              placeholder="Your new password"
              name="updatePassword"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <div className="w-full px-5 flex items-center justify-around mt-3">
            <form onSubmit={handleUpdateUser}>
              <Button type="submit" title="Save"></Button>
            </form>
            <Button title="Log Out" type="button" onClick={()=>handleLogOut()}/>
            <form onSubmit={handleVerifyUser}>
              {isVerified ? (
                <p>Verfied</p>
              ) : (
                <Button type="submit" title="Verify"></Button>
              )}
            </form>
           
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Actions;
