import { Hero } from "@/components/hero/hero";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Hero02 } from "@/components/hero02/hero02";
import { ProjectPortfolio } from "@/components/projectPortfolio/projectPortfolio";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header/>
      <Hero02/>
      <ProjectPortfolio/>
      {/* <Hero/> */}
      <Footer/>
    </div>
  );
}
