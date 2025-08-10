import ContactForm from "@/components/contactForm";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="m-10 text-center flex-grow">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="p-5 text-center w-full md:max-w-[40%]">
            <img
              src="./img/sydney.JPG"
              alt=""
              className="inline w-[150px] h-[150px] object-cover rounded-[50%]"
            />
            <h2 className="font-semibold my-4">Shari</h2>
            <p className="text-sm">
              オーストラリア大好きお父さん。機械系エンジニアやってます。オーストラリア移住を夢見て足掛け１０年。念願のオーストラリアで子育て満喫中！
            </p>
          </div>
          <div className="p-5 text-center w-full md:max-w-[40%]">
            <img
              src="./img/stone.JPG"
              alt=""
              className="inline w-[150px] h-[150px] object-cover rounded-[50%]"
            />
            <h2 className="font-semibold my-4">Pikkoro</h2>
            <p className="text-sm text-left">
              オーストラリア９年目に突入。2児の母。英語はなんとなくでここまで来ました。それでも試行錯誤しながら何とか生きています。温泉大好き日本食大好き、でもオーストラリアの自然も大好きです。絶賛プログラミングを学習中！
            </p>
          </div>
        </div>

        <div className="bg-white p-6 my-4 rounded-lg shadow-md max-w-xl mx-auto text-gray-800 text-left text-sm">
          <Link href="/blog/20250526_atfirst">
            <div className="w-full flex flex-col md:flex-row">
              <img
                src="blog/20250526_atfirst/beach.JPG"
                alt="Atfirst"
                className="rounded-lg w-full md:w-1/2  aspect-[4/3] object-cover"
              />
              <div className="md:ml-4 mt-4 md:mt-0 flex flex-col gap-2">
                <h3 className="mb-2">➡ Aussie Spiritの紹介はこちらから</h3>
                <p className="font-bold">はじめに</p>
                <p>
                  オーストラリア生活ブログ「Aussie Spirit」へようこそ。
                  <br />
                  私たち自身の自己紹介と、ブログサイト開設に至った思い。
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Contact form */}
        <div className="mt-8 md:mt-16">
          <section>
            <ContactForm />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
