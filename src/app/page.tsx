import Contents from "@/components/shared/contents/contents";
import Header from "@/components/shared/header/header";
import HeroImage from "@/components/shared/header/hero-image";
import HeroSection from "@/components/shared/hero-section/hero-section";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="min-h-dvh">
      <div className="h-dvh px-48 max-lg:px-6">
        <Header />
        <HeroImage />
        <HeroSection />
      </div>
      <Suspense>
        <Contents />
      </Suspense>
    </div>
  );
}
