import { AboutUs } from "@/components/AboutUs/page";
import { Footer } from "@/components/Footer/page";
import { Header } from "@/components/Header/page";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
}
