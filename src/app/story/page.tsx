"use client";

import BackgroundPath from "@/components/backgroundPath";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TimelineCard } from "@/components/timelineCards";
import { timeline } from "@/const/timelineCards";

export default function TimelinePage() {
  return (
    <main className="flex flex-col w-full h-full">
      <Header />

      <div className="flex flex-col items-center justify-center w-full h-full">
        <BackgroundPath />
        <div className="relative w-full md:w-[60%] flex flex-col gap-12 py-12 px-4">
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
