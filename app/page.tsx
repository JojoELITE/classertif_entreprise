import EntrepriseCard from "@/components/listEntreprise/EntrepriseCard";
import SectionHero from "@/components/listEntreprise/SectionHero";

export default function Home() {
  return (
    <div className="">

      <SectionHero />


      <div className="w-full py-52 ">
          <EntrepriseCard />
        </div>
    </div>
  );
}
