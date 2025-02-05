import { Context } from "@/context";
import { IMAGE_API, instance } from "@/hooks";
import { getLikes } from "@/services";
import { CartItemType, LikesType } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Heart, Trash2 } from "lucide-react";

import Image from "next/image";
import React, { FC, useContext } from "react";
import { toast } from "react-toastify";
import Button from "./ButtonComponent";
import { BasketCartIcon } from "@/icons";
import { getCart } from "@/services/getAllCart";

const LikeProduct: FC<{ item: LikesType }> = ({ item }) => {
  const { cartItems } = getCart();
  const { token } = useContext(Context);
  const queryClient = useQueryClient();
  const { likes } = getLikes();

  const deleteLikeMutation = useMutation({
    mutationFn: () => instance().delete(`/like/${item.id}`),
    onSuccess: () => {
      toast.warning(`Maxsulot sevimlilar ro'yxatidan olib tashlandi.`);
      queryClient.invalidateQueries({ queryKey: ["likes"] });
    },
    onError: () => {
      toast.error("Xatolik yuz berdi.");
    },
  });

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
  function handleAddCartItem(id: number) {
    cartItemMutation.mutate(id);
  }

 

  return (
    <div className="flex flex-col md:flex-row w-full justify-between gap-4 md:gap-8 p-4 border rounded-lg shadow-sm bg-white">
      <div className="w-full md:w-[202px] h-[170px] bg-gray-200 rounded-lg flex items-center justify-center">
        <Image
          src={`${IMAGE_API}/${item.productItem.image}`}
          alt="ProductItem img"
          width={115}
          height={115}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col flex-grow py-4">
        <h2 className="text-lg text-gray-700 mb-4">{item.productItem.name}</h2>
        <div className="flex items-center gap-4">
          <button className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-lg hover:bg-gray-300 transition">
            <Trash2 onClick={() => deleteLikeMutation.mutate()} />
          </button>
          <Button
            onClick={() => handleAddCartItem(item.productItem.id)}
            extrClass="!w-[52px] !h-[44px] !p-0 text-white"
            type="button"
            icon={<BasketCartIcon />}
            iconPostion="left"
            disabled={cartItems.find(
              (cartItem: CartItemType) => cartItem.productItemId === item.productItem.id
            )}
          />
        </div>
      </div>
      <div className="py-4 flex flex-col justify-between">
        <div className="flex items-center gap-2 mb-4">
          <strong className="text-xl font-bold">
            {item.productItem.price}
          </strong>{" "}
          <span className="text-sm">USZ</span>
        </div>
      </div>
    </div>
  );
};

export default LikeProduct;
