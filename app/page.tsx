import Header from "@/components/Header";
import SectionHero from "@/components/SectionHero";
import SectionInformation from "@/components/SectionInformation";
import SectionPlans from "@/components/SectionPlans";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <SectionHero />
      <SectionInformation />
      <SectionPlans />
    </main>
  );
}
