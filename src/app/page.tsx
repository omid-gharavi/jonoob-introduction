import Header from "@/components/shared/header/header";
import HeroImage from "@/components/shared/header/hero-image";
import HeroSection from "@/components/shared/hero-section/hero-section";

export default function Home() {
  return (
    <div>
      <HeroImage />
      <Header />
      <HeroSection />
    </div>
  );
}
