import Header from "@/components/shared/header/header";
import HeroImage from "@/components/shared/header/hero-image";

export default function Home() {
  return (
    <div className="relative mx-auto max-w-desktop w-full pt-8 px-16">
      <HeroImage />
      <Header />
    </div>
  );
}
