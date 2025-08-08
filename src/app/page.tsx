import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Main } from "@/components/main";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-x-hidden">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
