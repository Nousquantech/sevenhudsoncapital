import {
  Hero,
  SectionFive,
  SectionFour,
  SectionSix,
  SectionThree,
  SectionTwo,
  Menu,
} from "./sections";

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
    </div>
  );
}
