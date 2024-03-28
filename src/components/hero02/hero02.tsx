import Image from "next/image"
import ParticleBackground from "../particles/particles"
import Esfera from "/public/assets/app/esfera.webp"
import Planet from "/public/assets/app/planet.png"
import FundosFogo from "/public/assets/app/backgroundArt.webp"
import "./animate.css"
import MyFace from "/public/assets/app/myFace.webp"
import Button from "../button/button"
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoNodejs, BiLogoMongodb, BiLogoTailwindCss, BiLogoSass } from "react-icons/bi"
import { SiNextdotjs } from "react-icons/si"
import { TbBrandMysql, TbBrandReactNative } from "react-icons/tb"
import { Skill } from "./skill"





const styleHero = {
  left: "flex flex-col justify-center gap-[49px] grow ",
  faBrands: "text-secondary-light font-thin text-5xl border rounded-full border-3 p-2 border-primary-bord",
  leftTechnologies: "flex gap-4 transition-[0.7s] duration-[both]",

}

export const Hero02 = () => {
  return (
    <div className="bg-primary-linear">
      <div className="flex flex-col gap-14 relative px-10 pb-24 h-auto w-full container overflow-hidden
      max-[860px]:bg-primary-linear max-[860px]:px-0 max-[860px]:gap-0"
      >
        {/* Particles */}
        <div className="absolute top-0 h-full  w-full overflow-hidden">
          <ParticleBackground />
        </div>
        {/* Image Background */}
        <div className="absolute top-0 h-auto z-0 w-full
        max-[860px]:[position:inherit]
      "
        >
          <div className="relative flex justify-center h-[600px] w-full overflow-hidden
          max-[860px]:h-[500px]
        "
          >
            <Image
              src={FundosFogo}
              alt="esfera"
              height={1500}
              width={2000}
              className="absolute opacity-80 bottom-0 w-auto h-[800px] object-cover fashingEffect
              max-[860px]:h-[750px]
            "
            />
            <Image
              src={MyFace}
              alt="esfera"
              height={700}
              width={700}
              className="absolute bottom-0 h-[570px] w-auto m-auto
          max-[860px]:h-[500px] max-[860px]:w-auto max-[860px]:object-cover
          "
            />
          </div>
        </div>
        {/* Apresentation */}
        <div
          className="relative flex flex-col gap-5 h-full pl-16 max-lg:pl-2 pt-28 text-primary-light z-50
        max-[860px]:py-0 max-[860px]:px-4 max-[860px]:-translate-y-24 
      "
        >
          <h1
            className="[font-family:_'Kodchasan',_sans-serif] font-black text-6xl 
            max-[860px]:text-5xl
            "
          >
            Emerson<br />Marins
          </h1>
          <p
            className="flex flex-wrap max-w-96 text-base italic text-tertiary-light
          max-[860px]:text-lg max-[860px]:font-extralight
          "
          >
            Transforme suas ideias em projetos incríveis e funcionais com soluções inovadoras únicas e impactante.
          </p>
          <Button options={"SAIBA MAIS"} />
        </div>
        {/* Icons */}
        <div
          className="absolute top-40 right-20 w-72 max-lg:right-0
        max-[860px]:[position:inherit] max-[860px]:top-0 max-[860px]:w-auto max-[860px]:px-4 max-[860px]:pb-10 max-[860px]:-translate-y-12 
        "
        >
          <div className={styleHero.leftTechnologies + ' flex flex-wrap'}>
            <BiLogoHtml5 className={styleHero.faBrands} />
            <BiLogoCss3 className={styleHero.faBrands} />
            <BiLogoJavascript className={styleHero.faBrands} />
            <BiLogoReact className={styleHero.faBrands} />
            <SiNextdotjs className={styleHero.faBrands} />
            <BiLogoNodejs className={styleHero.faBrands} />
            <BiLogoMongodb className={styleHero.faBrands} />
            <TbBrandMysql className={styleHero.faBrands} />
            <TbBrandReactNative className={styleHero.faBrands} />
            <BiLogoTailwindCss className={styleHero.faBrands} />
            <BiLogoSass className={styleHero.faBrands} />
          </div>
        </div>
        {/* Buttons Circle */}
        <Skill />
      </div>
    </div>
  )
}