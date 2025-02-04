"use client" 
import { Button, Products } from "@/components"
import { Share2, Printer } from "lucide-react"
import { useState } from "react"

export default function AshyoPage() {

  const [state,setState] = useState<number>(1)

  const sideBarList = [
    {
      id: 1,
      title: "Ashyo haqida",
      description: "Ashyo 2022 yilda Toshkent shahrida tashkil etilgan.",
      extraData : [
        "Ashyo - sifatli elektronika va maishiy texnika mahsulotlarini taklif qiluvchi yetakchi savdo tarmog‘i.",
        "2022-yilda Toshkentda tashkil topgan bo‘lib, bugungi kunda 26 ta do‘koni bilan mijozlarga xizmat ko‘rsatmoqda.",
        "Haridorlar mahsulotlarni do‘konlarda yoki rasmiy veb-sayt orqali xarid qilishlari mumkin. Onlayn xarid qilish imkoniyati mavjud.",
        "Ashyo yuridik shaxslar uchun ham maxsus xizmatlarni taklif etadi, jumladan, bank o‘tkazmalari orqali xarid qilish imkoniyati."
      ]
    },
    {
      id: 2,
      title: "Muddatli to'lov",
      description: "Ashyoda barcha elektronika va maishiy texnika uchun qulay onlayn to'lov rejasi",
      extraData: [
        "Ashyo mijozlarga bo‘lib-bo‘lib to‘lash orqali xarid qilish imkoniyatini taqdim etadi.",
        "Kompaniya barcha mahsulotlarga rasmiy kafolat va sifatli xizmat ko‘rsatishni ta’minlaydi.",
        "Muddatli to‘lov uchun zarur bo‘lgan hujjat faqat pasport bo‘lib, jarayon juda oddiy va tez amalga oshiriladi.",
        "To‘lovlarni qulay qilish uchun bir nechta variantlar mavjud: naqd, plastik karta yoki onlayn to‘lov tizimlari orqali."
      ]
    },
    {
      id: 3,
      title: "To'lov usullari",
      description: "Siz uchun qulay usulda to'lang do'konda, Click, Payme orqali.",
      extraData : [
        "Ashyo xaridorlarga har qanday qulay usulda to‘lov qilish imkoniyatini yaratgan.",
        "Do‘konlarimizda naqd yoki plastik karta orqali to‘lash mumkin, shuningdek, Payme va Click orqali ham amalga oshirish mumkin.",
        "Rasmiy veb-saytda onlayn buyurtma berib, to‘lovni shaxsiy hisobingiz orqali boshqarishingiz mumkin.",
        "Muddatli to‘lov xizmati mavjud bo‘lib, oson rasmiylashtirish jarayoni bilan xarid qilish imkoniyati beriladi."
      ]
    },
    {
      id: 4,
      title: "Yetkazib berish xizmati",
      description: "Tez va ishonchli yetkazib berish xizmati bilan mahsulotlaringiz manzilingizga yetib boradi.",
      extraData : [
        "Ashyo yetkazib berish xizmatini yo‘lga qo‘ygan bo‘lib, Toshkent va viloyatlarga yetkazib berish amalga oshiriladi.",
        "Mahsulotlar harid qilingan kundan boshlab 24-48 soat ichida mijozlarga yetkaziladi.",
        "Yetkazib berish narxi mahsulot turiga va manzilga qarab belgilanadi, ayrim shartlar asosida bepul yetkazib berish imkoniyati mavjud.",
        "Buyurtma qilingan mahsulotlar yetkazib berishdan oldin tekshiriladi va to‘liq sifat kafolati bilan yetkaziladi."
      ]
    },
    {
      id: 5,
      title: "Mahsulot kafolati",
      description: "Barcha mahsulotlarimiz rasmiy kafolat bilan ta’minlangan.",
      extraData : [
        "Ashyo xaridorlarga faqat original va sifatli mahsulotlarni taqdim etadi.",
        "Barcha texnik mahsulotlarimiz kafolat bilan ta’minlangan bo‘lib, kafolat muddati har bir mahsulot turiga qarab belgilanadi.",
        "Agar mahsulotda nosozlik yuzaga kelsa, uni rasmiy xizmat ko‘rsatish markazlarimiz orqali bepul ta’mirlash yoki almashtirish mumkin.",
        "Biz mijozlarimizning ishonchini qadrlaymiz va eng yaxshi xizmatni taqdim etishga harakat qilamiz."
      ]
    },
    {
      id: 6,
      title: "Mijozlar uchun xizmatlar",
      description: "Mijozlarimiz uchun qulay xizmat turlari va qo‘llab-quvvatlash markazi mavjud.",
      extraData : [
        "Mijozlarga 24/7 qo‘llab-quvvatlash xizmati mavjud bo‘lib, istalgan vaqtda yordam olishlari mumkin.",
        "Onlayn chat, telefon yoki elektron pochta orqali savollaringizga javob olishingiz mumkin.",
        "Ashyo do‘konlarida mahsulot bo‘yicha mutaxassislar maslahat berishadi va sizga eng mos mahsulotni tanlashda yordam berishadi.",
        "Sotib olingan mahsulotlar bo‘yicha qo‘shimcha xizmatlar, jumladan, o‘rnatish va texnik qo‘llab-quvvatlash xizmatlari ham taqdim etiladi."
      ]
    }
];


  return (
    <div className="min-h-screen bg-gray-50 pt-5 pb-10">
      <div className="containers mx-auto py-8 px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-[20px]">
            <div className="rounded-lg sm:w-[40%] bg-gray-100 p-6 flex justify-between flex-wrap gap-[18px] sm:space-y-8">
              {sideBarList.map(item => (
                <div key={item.id}>
                  <div className="hidden sm:block" key={item.id}>
                    <h2 className="text-lg font-semibold text-gray-900 hover:cursor-pointer" onClick={()=>setState(item.id)}>{item.title}</h2>
                    <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                  </div>
                  <Button extrClass="sm:!hidden !py-[16px] !px-[12px]" type="button" title={item.title}/>
                </div>
              ))}
            </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Ashyo haqida</h1>

            <div className="aspect-[2/1] overflow-hidden rounded-lg bg-[#6366f1]">
              <div className="flex h-full items-center justify-center">
                <h1 className="text-6xl font-bold text-white">Ashyo</h1>
              </div>
            </div>

            <div className="space-y-4 text-gray-600">
              { sideBarList[state-1].extraData.map((data:any,index:number)=><p key={index} className="">{data}</p>)}
            </div>

            <div className="flex gap-4">
              <button className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <Printer className="h-5 w-5" />
              </button>
              <button className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Products title="Last seen Products" API="/product-items" />
    </div>

  )
}

