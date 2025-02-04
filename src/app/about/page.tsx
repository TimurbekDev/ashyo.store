
import { Button, Products } from "@/components"
import { Share2, Printer } from "lucide-react"

export default function AshyoPage() {
  const sideBarList = [
    {
      id: 1,
      title: "Ashyo haqida",
      description: "Ashyo 2022 yilda Toshkent shahrida tashkil etylgan."
    },
    {
      id: 2,
      title: "Muddatli to'lov",
      description: " Ashyoda barcha elektronika maishiy texnikalar uchun qulay onlayn to'lov rejasi"
    },
    {
      id: 3,
      title: "To'lov usullari",
      description: "Siz uchun qulay usulda to'lang do'konda, Cilik, Payme orqali."
    },
    {
      id: 4,
      title: "To'lov usullari",
      description: "Siz uchun qulay usulda to'lang do'konda, Cilik, Payme orqali."
    },
    {
      id: 5,
      title: "To'lov usullari",
      description: "Siz uchun qulay usulda to'lang do'konda, Cilik, Payme orqali."
    },
    {
      id: 6,
      title: "To'lov usullari",
      description: "Siz uchun qulay usulda to'lang do'konda, Cilik, Payme orqali."
    }
  ]
  return (
    <div className="min-h-screen bg-gray-50 pt-5">
      <div className="containers mx-auto py-8 px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-[20px]">
            <div className="rounded-lg sm:w-[40%] bg-gray-100 p-6 flex justify-between flex-wrap gap-[18px] sm:space-y-8">
              {sideBarList.map(item => (
                <div key={item.id}>
                  <div className="hidden sm:block" key={item.id}>
                    <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
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
              <p>
                Ashyo - bozor narhid maishiy texnika va electronics dukonlari qurilmalari. 2 oydan davomid mizhozlarga
                keng assortimentdagi mahsulotlarni, kafolatli va benson hizmatni taklif etib keladi.
              </p>

              <p>
                Ashyo 2022 yilda Toshkent shahrida tashkil etylgan. Bugungi kunga qadar jami poytaxtda va viloyatlarda
                26 that dukon faoliyat ko'rsatmoqda.
              </p>

              <p>
                Siz tovarlarni har kanday kulay usulda sotib olishingiz mumkin: tarmoq dukonlarida yoki website. Maishiy
                uchun texnikasi onlayn b'lib t'lov rezhashi mavjud. Ruyhatdan utish uchun zarur bulgan huzhzhat - bu
                pasport.
              </p>

              <p>
                Yuridik shahslar uchun pul o'tkazish yo'li bilan, eng muximi - qo'shimcha to'lovlarsiz sotib olish
                mumkin.
              </p>
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

