import RevealInit from "@/components/RevealInit";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Cookies from "@/components/Cookies";
import FoodGallery from "@/components/FoodGallery";
import LifestyleGallery from "@/components/LifestyleGallery";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <RevealInit />
      <Nav />
      <main>
        <Hero />
        <About />
        <Menu />
        <Cookies />
        <FoodGallery />
        <LifestyleGallery />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </>
  );
}
