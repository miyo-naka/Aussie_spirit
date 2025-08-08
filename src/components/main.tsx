import Link from "next/link";

export function Main() {
  return (
    <main className="h-full flex flex-col md:flex-row mx-[-10%] items-stretch ">
      <Link
        href="/story"
        className="relative w-full h-full overflow-hidden transform group opacity-60 -skew-x-6 hover:opacity-80 transition-transform duration-700"
      >
        <img
          src="/img/beach2.JPG"
          className="absolute top-0 left-0 w-full h-full object-cover transform scale-[1.2] skew-x-6"
          alt="Story"
        />
        <div className="absolute md:left-[10%] inset-0 flex flex-col items-center justify-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold transform skew-x-6">
            Story
          </h2>
          <p className="mt-4 text-white text-sm md:text-base transform skew-x-6">
            オーストラリア移住を決意してから今日に至るまでの軌跡
          </p>
        </div>
      </Link>

      <Link
        href="/blog"
        className="relative w-full h-full overflow-hidden opacity-60 -skew-x-6 transform group hover:opacity-80 transition-transform duration-700"
      >
        <img
          src="/img/tree.JPG"
          className="absolute top-0 left-0 w-full h-full object-cover transform scale-[1.2] skew-x-6"
          alt="Blog"
        />
        <div className="absolute md:left-[-10%] inset-0 flex flex-col items-center justify-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold transform skew-x-6">
            Blog
          </h2>
          <p className="mt-4 text-white text-sm md:text-base transform skew-x-6">
            日本人一家のオーストラリアでの日常を綴ったブログ
          </p>
        </div>
      </Link>

      {/* <p className="px-2 mb-8 text-center text-gray-700">
        オーストラリア在住の日本人夫婦による試行錯誤の記録
      </p> */}

      {/* コンテンツカード表示部分 */}
      {/* <div className="w-11/12 max-w-6xl grid grid-cols-auto-fill-280 gap-10">
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
      </div> */}
    </main>
  );
}
