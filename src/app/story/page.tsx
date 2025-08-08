"use client";

import BackgroundPath from "@/components/BackgroundPath/page";
import { Footer } from "@/components/Footer/page";
import { Header } from "@/components/Header/page";
import { TimelineCard } from "@/components/TimelineCards/page";

export default function TimelinePage() {
  const timeline = [
    {
      year: "2011",
      title: "渡豪準備中",
      image: "/img/flag.JPG",
      link: "/posts/2016",
    },
    {
      year: "2017",
      title: "オーストラリア移住",
      image: "/img/dairy.JPG",
      link: "/posts/2018",
    },
    {
      year: "2019 2022",
      title: "子供たち誕生",
      image: "/img/stone.JPG",
      link: "/posts/2022",
    },
    {
      year: "2025",
      title: "現在の暮らし",
      image: "/img/beach3.jpg",
      link: "/posts/2025",
    },
  ];

  return (
    <main className="flex flex-col w-full h-full">
      <Header />

      <div className="flex flex-col items-center justify-center w-full h-full">
        <BackgroundPath />
        <div className="relative w-[60%] flex flex-col gap-12 py-12">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className={`w-full flex justify-${
                idx % 2 === 0 ? "start" : "end"
              }`}
            >
              <TimelineCard {...item} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
