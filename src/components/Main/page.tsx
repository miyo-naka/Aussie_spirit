import Link from "next/link";
import { AboutUs } from "../AboutUs/page";

export function Main() {
  return (
    <main className="flex-grow">
      <div className="mt-10 flex justify-center gap-4">
        <div className="w-1/4 relative">
          <Link href="/AussieLife">
            <img className="w-full h-full opacity-30" src="/img/beach2.JPG" />
            <h2 className="absolute top-4 w-full text-center text-3xl font-hurricane font-bold">
              Aussie Life
            </h2>
            <p>
              オーストラリアでの日々の暮らしについて、
              ありとあらゆる角度から綴っています
            </p>
          </Link>
        </div>

        <div className="w-1/4 relative">
          <Link href="/English">
            <img
              className="w-full h-full opacity-30"
              src="/img/flag-2526539_1280.jpg"
            />
            <h2 className="absolute top-4 w-full text-center text-3xl font-hurricane font-bold">
              English
            </h2>
            <p>ここまでのそしてこれからの英語学習の道のりです</p>
          </Link>
        </div>

        <div className="w-1/4 relative">
          <Link href="/Parenting">
            <img className="w-full h-full opacity-30" src="/img/tree.JPG" />
            <h2 className="absolute top-4 w-full text-center text-3xl font-hurricane font-bold">
              Parenting
            </h2>
            <p>
              オーストラリアで子育て真っ最中！出産から学校まで色々なトピックでお届けします
            </p>
          </Link>
        </div>
      </div>

      <div className="h-20"></div>
    </main>
  );
}
