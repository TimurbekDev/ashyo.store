"use client";

import LikeProduct from "@/components/LikesProduct";
import { getLikes } from "@/services";
import { LikesType } from "@/types";
import React from "react";
import noDataImage from "../../../public/no-data.png";
import Image from "next/image";

const Favorites = () => {
  const { likes } = getLikes();
  if (!likes.length) {
    return (
      <div className="containers mx-auto h-[60vh]">
        <h2 className="font-bold text-[22px] mb-6">Sevimlilar</h2>
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={noDataImage}
            width={400}
            height={400}
            alt="no data image"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="containers mx-auto p-4">
      <h2 className="font-bold text-[22px] mb-6">Sevimlilar</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-3 space-y-6">
          {likes.map((item: LikesType) => (
            <LikeProduct key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
