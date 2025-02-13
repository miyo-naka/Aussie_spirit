import { AboutUs } from "../AboutUs/page";

export function Main() {
  return (
    <main className="flex-grow">
      <h1 className="text-8xl text-center mt-16 font-hurricane font-bold">
        Aussie Spirit
      </h1>

      <div className="m-10  flex justify-center gap-4">
        <div className="w-1/4 h-40 relative">
          <img className="w-full h-full opacity-30" src="/img/beach2.JPG" />
          <div className="absolute top-4 text-center p-4">
            <h2 className="text-2xl font-hurricane font-bold">Aussie Life</h2>
            <p>
              オーストラリアでの日々の暮らしについて、
              ありとあらゆる角度から綴っています
            </p>
          </div>
        </div>
        <div className="w-1/4 h-40 relative">
          <img
            className="w-full h-full opacity-30"
            src="/img/flag-2526539_1280.jpg"
          />
          <div className="absolute top-4 text-center p-4">
            <h2 className="text-2xl font-hurricane font-bold">English</h2>
            <p>ここまでのそしてこれからの英語学習の道のりです</p>
          </div>
        </div>
        <div className="w-1/4 h-40 relative">
          <img className="w-full h-full opacity-30" src="/img/tree.JPG" />
          <div className="absolute top-4 text-center p-4">
            <h2 className="text-2xl font-hurricane font-bold">Parenting</h2>
            <p>
              オーストラリアで子育て真っ最中！出産から学校まで色々なトピックでお届けします
            </p>
          </div>
        </div>
      </div>
      <AboutUs />
    </main>
  );
}
