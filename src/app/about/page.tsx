"use client";
import React, { useState } from "react";

const AboutPage = () => {
  enum AboutState {
    ABOUT = "about",
    CREDIT = "credit",
    PAYMENTS = "payments",
    ORDER = "order",
    GUARANTEE = "guarantee",
    SUPPORT = "support",
  }

  const aboutMenuData = [
    {
        id:1,
        title: "Ashyo haqida",
        description: "Ashyo 2022 yilda Toshkent shahrida tashkil etylgan.",
        state: AboutState.ABOUT
    },
    {
        id:2,
        title: "Muddatli to’lov",
        description: "Ashyoda barcha eliktronika maishiy texnikalar uchun qulay onlayn to’lov rejasi",
        state: AboutState.CREDIT
    },
    {
        id:3,
        title: "To‘lov usullari",
        description: "Siz uchun qulay usulda to’lang do’konda, Cilik, Payme orqali.",
        state: AboutState.PAYMENTS
    },
    {
        id:4,
        title: "Yetkazib berish",
        description: "Ashyoda tovarlarni yetkazib berish shartlari.",
        state: AboutState.ORDER
    },
    {
        id:5,
        title: "Tavorlarga kafolat",
        description: "Ashyo onlayn do’konining kafolati va qaytarilish haqida hamma narsani bilib oling",
        state: AboutState.GUARANTEE
    },
    {
        id:6,
        title: "Yordam",
        description: "Tushumagan narsalaringiz bo’lsa savollaringizni bering",
        state: AboutState.SUPPORT
    }
  ]

  const [currentState, setCurrentState] = useState<AboutState>(
    AboutState.ABOUT
  );

  return (
    <div className="containers grid grid-cols-10 grid-rows-8">
      <div className="grid grid-rows-6 grid-cols-3 p-3 bg-[#EBEFF3] col-span-10  md:col-span-3 ">
        <div className="flex flex-col items-left justify-center space-y-1 p-2 col-span-1 md:col-span-3 md:space-y-10 ">
       {
        aboutMenuData.map(item => (
        <div key={item.id} className="flex flex-col space-y-1">
          <h2
            className="border text-center p-2 border-black cursor-pointer  rounded-md md:text-xl md:font-bold md:text-left  md:border-none md:p-0"
            onClick={() => setCurrentState(item.state)}
          >
            {item.title}
          </h2>
          <p className="text-[#545D6A] hidden md:block">
            {item.description}
          </p>
        </div>
      ))
    }
        </div>
      </div>





      <div className="bg-gray-700 col-span-10 md:col-span-7 p-4 text-white">
        {currentState === AboutState.ABOUT && <p>Bu sahifa Ashyo haqida.</p>}
        {currentState === AboutState.CREDIT && <p>Kredit shartlari.</p>}
        {currentState === AboutState.PAYMENTS && <p>To‘lov usullari.</p>}
        {currentState === AboutState.ORDER && <p>Buyurtma jarayoni.</p>}
        {currentState === AboutState.GUARANTEE && <p>Kafolat shartlari.</p>}
        {currentState === AboutState.SUPPORT && (
          <p>Qo‘llab-quvvatlash bo‘limi.</p>
        )}
      </div>
    </div>
  );
};

export default AboutPage;
