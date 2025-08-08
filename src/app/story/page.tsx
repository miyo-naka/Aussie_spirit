"use client";

import BackgroundPath from "@/components/BackgroundPath/page";
import { Footer } from "@/components/Footer/page";
import { Header } from "@/components/Header/page";
import { TimelineCard } from "@/components/TimelineCards/page";
import { timeline } from "@/const/timelineCards";

export default function TimelinePage() {
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
