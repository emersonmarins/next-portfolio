import { AboutMe } from "@/components/aboutMe/aboutMe";
import { Hero02 } from "@/components/hero02/hero02";
import { LouseDesigner } from "@/components/louseDesigner/louseDesigner";
import { ProjectPortfolio } from "@/components/projectPortfolio/projectPortfolio";
import { SoftSkills } from "@/components/softSkills/softSkills";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero02 />
      <SoftSkills />
      <ProjectPortfolio />
      < LouseDesigner />
      <AboutMe />
    </div>
  );
}
