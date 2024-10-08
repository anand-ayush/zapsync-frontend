import { Appbar } from "@/components/Appbar";
import { Benefits } from "@/components/Benefits";
import { Branding } from "@/components/Branding";
import { Cards } from "@/components/Cards";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HeroVideo } from "@/components/HeroVideo";
import { Infscroll } from "@/components/Infscroll";
import { Logo } from "@/components/Logo";
import { Reviews } from "@/components/Reviews";
import { Typewriter } from "@/components/Typewriter";

export default function Home() {
  return (
    <main className="pb-48">
      <Appbar />
      <Hero />

      <div className="pt-8">
        <HeroVideo />
      </div>
      <br />
      <Branding/>
      <Benefits/>
      <Cards/>
      <Typewriter/>
      {/* <Reviews/> */}
      <Infscroll/>
      <Logo/>
      <Footer/>
     

    </main>
  );
}
