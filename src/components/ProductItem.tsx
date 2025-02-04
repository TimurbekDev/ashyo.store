"use client";
import { IMAGE_API } from "@/hooks/getEnv";
import Image from "next/image";
import React, { FC, useContext } from "react";
import { BasketCartIcon, CompareIcon, LikeFilledIcon, LikeIcon } from "@/icons";

import Button from "./ButtonComponent";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { instance } from "@/hooks";
import { Context } from "@/context";
import { toast } from "react-toastify";
import { getLikes } from "@/services";
import { ProductItemType } from "@/types/ProductType";
import { CartItemType, LikesType } from "@/types";
import { Heart } from "lucide-react";
import { getCart } from "@/services/getAllCart";

const ProductItem: FC<{ item: ProductItemType }> = ({ item }) => {
  const router = useRouter();
  const { token } = useContext(Context);
  const queryClient = useQueryClient();
  const { isLoading, likes } = getLikes();
  const { cartItems } = getCart();
  const cartItemMutation = useMutation({
    mutationFn: (id: string | number) =>
      instance().post(
        "/cart-item/byUser",
        {
          count: 1,
          productItemId: id,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      ),
    onSuccess: () => {
      toast.success("Yangi mahsulot savatga qoshildi.");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: () => {
      toast.error("Xatolik yuz berdi.");
    },
  });
  const likeMutation = useMutation({
    mutationFn: (id: string | number) =>
      instance().post(
        "/like/user",
        { productItemId: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ),
    onSuccess: () => {
      toast.success("Liked");
      queryClient.invalidateQueries({ queryKey: ["likes"] });
    },
    onError: () => {
      toast.error("Xatolik yuz berdi");
    },
  });
  function handleLikeClick(id: string | number) {
    likeMutation.mutate(id);
  }

  function handleAddCartItem(id: number) {
    cartItemMutation.mutate(id);
  }

  return (
    <div className="w-full sm:w-[273px] relative product-item duration-300">
      <div className="bg-[#EBEFF3] relative rounded-[8px] mb-[16px] flex items-center justify-center h-[280px]">
        <Image
          onClick={() => router.push(`/products/${item.id}`)}
          className="product-img duration-300 cursor-pointer"
          style={{ width: "202px", height: "202px" }}
          src={`${IMAGE_API}/${item.image}`}
          width={202}
          height={202}
          alt="Product img"
          priority
        />
      </div>
      <p className="text-[18px] font-normal leading-[19px] text-[#545D6A] line-clamp-1 mb-[28px]">
        {item.name}
      </p>
      <div className="flex justify-between">
        <strong className="text-[20px] leading-[26px] font-bold">
          {item.price} usz
        </strong>
        <div className="flex gap-[10px]">
          <Button
            extrClass="!w-[52px] !h-[44px] !p-0 !bg-transparent border-[2px] border-[#EBEFF3]"
            type="button"
            icon={<CompareIcon />}
            iconPostion="left"
          />
          <Button
            onClick={() => handleAddCartItem(item.id)}
            extrClass="!w-[52px] !h-[44px] !p-0 text-white"
            type="button"
            icon={<BasketCartIcon />}
            iconPostion="left"
            disabled={cartItems.some(
              (cartItem: CartItemType) => cartItem.productItemId === item.id
            )}
          />
        </div>
      </div>
      <button
        onClick={() => handleLikeClick(item.id)}
        className={`absolute top-[20px] right-[20px] disabled:cursor-not-allowed`}
        disabled={likes.some(
          (like: LikesType) => like.productItemId === item.id
        )}
      >
        {likes.some((like: LikesType) => like.productItemId === item.id) ? (
          <Heart color="red" style={{ fill: "red" }} />
        ) : (
          <Heart />
        )}
      </button>
    </div>
  );
};

export default ProductItem;
