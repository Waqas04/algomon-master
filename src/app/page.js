import Hero from "@/app/components/landingPage/Hero";
import Footer from "./components/common/Footer";
import OrganicDistribution from "./components/landingPage/OrganicDistribution";
import HowDoesItWork from "@/app/components/landingPage/HowDoesItWork";

export default function Home() {
  return (
    <div className="max-w-[1980px] w-full mx-auto overflow-hidden h-screen">
      <Hero />
      <HowDoesItWork />
      <OrganicDistribution />
    </div>
  );
}
