import { CategoryCards } from "@/components/CategoryCards/page";

export function Main() {
  return (
    <main className="flex-grow flex flex-col items-center mt-4">
      <p className="mb-8">オーストラリア在住の日本人夫婦による試行錯誤の記録</p>

      {/* コンテンツカード表示部分 */}
      <div className="w-11/12 max-w-6xl grid grid-cols-auto-fill-280 gap-10">
        <CategoryCards
          category="AussieLife"
          imgSrc="/beach2.JPG"
          comment="オーストラリアでの日々の暮らしについて、
          思うがままに綴っています"
        />
        <CategoryCards
          category="English"
          imgSrc="/flag-2526539_1280.jpg"
          comment="ここまでのそしてこれからの英語学習の道のりです"
        />
        <CategoryCards
          category="Parenting"
          imgSrc="/tree.JPG"
          comment="オーストラリアで子育て真っ最中！出産から学校まで色々なトピックでお届けします"
        />
      </div>
    </main>
  );
}
