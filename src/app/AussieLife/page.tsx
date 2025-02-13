import { Footer } from "@/components/Footer/page";
import { Header } from "@/components/Header/page";
import { Main } from "@/components/Main/page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <p>Aussie Life</p>
      <Footer />
    </div>
  );
}
