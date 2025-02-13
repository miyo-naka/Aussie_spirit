import { Footer } from "@/components/Footer/page";
import { Header } from "@/components/Header/page";
import { Main } from "@/components/Main/page";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <p>About Us</p>
      </div>
      <Footer />
    </div>
  );
}
