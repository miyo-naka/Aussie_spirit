import { CategoryCards } from "@/components/CategoryCards/page";

export function Main() {
  return (
    <main className="flex-grow flex flex-col items-center mt-4">
      <p className="px-2 mb-8 text-center text-gray-700">
        オーストラリア在住の日本人夫婦による試行錯誤の記録
      </p>

      {/* コンテンツカード表示部分 */}
      <div className="w-11/12 max-w-6xl grid grid-cols-auto-fill-280 gap-10">
        <CategoryCards
          category="Story"
          imgSrc="/beach2.JPG"
          comment="移住までとオーストラリアでの生活を時間に沿って"
        />
        <CategoryCards
          category="Family"
          imgSrc="/tree.JPG"
          comment="育児・学校・学びのある暮らし"
        />
        <CategoryCards
          category="AussieLife"
          imgSrc="/bluemountains.JPG"
          comment="日本人一家のオーストラリアでの日常"
        />
      </div>
    </main>
  );
}
