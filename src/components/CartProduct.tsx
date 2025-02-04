import { Context } from "@/context";
import { IMAGE_API, instance } from "@/hooks";
import { getLikes } from "@/services";
import { CartItemType, LikesType } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Heart, Trash2 } from "lucide-react";

import Image from "next/image";
import React, { FC, useContext, useState } from "react";
import { toast } from "react-toastify";

const CartProduct: FC<{ item: CartItemType }> = ({ item }) => {
  const [count, setCount] = useState<number>(item.count);
  const { token } = useContext(Context);
  const queryClient = useQueryClient();
  const { likes } = getLikes();
  const countMutation = useMutation({
    mutationFn: (newCount: number) =>
      instance().patch(
        `/cart-item/${item.id}`,
        { count: newCount },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message || "Failed to update cart item");
    },
  });

  function handleChangeCount(newCount: number) {
    if (newCount < 1) return;
    setCount(newCount);
    countMutation.mutate(newCount);
  }

  const deleteMutation = useMutation({
    mutationFn: () =>
      instance().delete(`/cart-item/${item.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      }),
    onSuccess: () => {
      toast.success("Maxsulot savatdan o'chirildi.");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message || "Failed to update cart item");
    },
  });

  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 p-4 border rounded-lg shadow-sm bg-white">
      <div className="w-full md:w-[202px] h-[170px] bg-gray-200 rounded-lg flex items-center justify-center">
        <Image
          src={`${IMAGE_API}/${item.productItem.image}`}
          alt="Cart img"
          width={115}
          height={115}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col flex-grow py-4">
        <h2 className="text-lg text-gray-700 mb-4">{item.productItem.name}</h2>
        <div className="flex items-center gap-4">
          <button
            className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-lg hover:bg-gray-300 transition"
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
          <button
            className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-lg hover:bg-gray-300 transition"
            onClick={() => deleteMutation.mutate()}
          >
            <Trash2 />
          </button>
        </div>
      </div>
      <div className="py-4 flex flex-col justify-between">
        <div className="flex items-center gap-2 mb-4">
          <strong className="text-xl font-bold">
            {item.productItem.price}
          </strong>{" "}
          <span className="text-sm">USZ</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="w-12 h-10 text-xl bg-gray-200 flex items-center justify-center rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition"
            onClick={() => handleChangeCount(count - 1)}
            disabled={count <= 1}
          >
            -
          </button>
          <span className="w-12 h-10 text-xl bg-gray-200 flex items-center justify-center rounded-lg">
            {count}
          </span>
          <button
            className="w-12 h-10 text-xl bg-gray-200 flex items-center justify-center rounded-lg hover:bg-gray-300 transition"
            onClick={() => handleChangeCount(count + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
