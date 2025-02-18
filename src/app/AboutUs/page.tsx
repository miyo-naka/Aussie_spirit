import { Footer } from "@/components/Footer/page";
import { Header } from "@/components/Header/page";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="m-10 text-center flex-grow">
        <div className="flex justify-center">
          <div className="p-5 text-center max-w-[40%]">
            <img
              src="./img/sydney.JPG"
              alt=""
              className="inline w-[150px] h-[150px] object-cover rounded-[50%]"
            />
            <h2 className="font-semibold my-4">Roger</h2>
            <p className="text-sm">
              コメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメント
            </p>
          </div>
          <div className="p-5 text-center max-w-[40%]">
            <img
              src="./img/stone.JPG"
              alt=""
              className="inline w-[150px] h-[150px] object-cover rounded-[50%]"
            />
            <h2 className="font-semibold my-4">Marumi</h2>
            <p className="text-sm text-left">
              オーストラリア９年目に突入。2児の母。英語はなんとなくでここまで来ました。それでも試行錯誤しながら何とか生きています。温泉大好き日本食大好き、でもオーストラリアの自然も大好きです。絶賛プログラミングを学習中！
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
