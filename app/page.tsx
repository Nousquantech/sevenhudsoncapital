import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Menu from "./sections/Menu";
import SectionFive from "./sections/SectionFive";
import SectionFour from "./sections/SectionFour";
import SectionSix from "./sections/SectionSix";
import SectionThree from "./sections/SectionThree";
import SectionTwo from "./sections/SectionTwo";

export default function Home() {
  return (
    <div>
      <Menu />
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
    </div>
  );
}
