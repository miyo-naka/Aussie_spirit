import { CategoryCards } from "@/components/CategoryCards/page";

export function Main() {
  return (
    <main className="flex-grow">
      <div className="mt-10 flex justify-center gap-4">
        <CategoryCards
          category="AussieLife"
          imgSrc="/beach2.JPG"
          comment="オーストラリアでの日々の暮らしについて、
          ありとあらゆる角度から綴っています"
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
