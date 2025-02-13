import { Footer } from "@/components/Footer/page";
import { Header } from "@/components/Header/page";
import { Main } from "@/components/Main/page";

export default function Parenting() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <p>Parenting</p>
      </div>
      <Footer />
    </div>
  );
}
