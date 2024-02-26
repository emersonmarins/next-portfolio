import Image from "next/image"
import ParticleBackground from "../particles/particles"
import Esfera from "/public/assets/app/esfera.webp"
import Planet from "/public/assets/app/planet.png"
import FundosFogo from "/public/assets/app/backgroundArt.webp"
import "./animate.css"
import MyFace from "/public/assets/app/myFace.webp"
import Button from "../button/button"
import { FaIdeal } from "react-icons/fa"
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoNodejs, BiLogoMongodb, BiLogoTailwindCss, BiLogoSass } from "react-icons/bi"
import { SiNextdotjs } from "react-icons/si"
import { TbBrandMysql, TbBrandReactNative } from "react-icons/tb"

const styleSkill = {
  divCircle: "relative h-32 w-32 btnStyleBg ",
  circle: "flex btnStyle items-center justify-center text-neutral-200 font-medium absolute z-50 h-full w-full [background:var(--color-background-gradient-dark-02)] ",
  title: "text-neutral-50 text-2xl text-center",
  text: "text-neutral-400 text-xs font-thin text-center "
}

const styleHero = {
  left: "flex flex-col justify-center gap-[49px] grow ",
  faBrands: "text-neutral-300 font-thin text-5xl border rounded-full border-2 p-1 border-orange-900 bg-black",
  leftTechnologies: "flex gap-4 transition-[0.7s] duration-[both]",

}

export const Hero02 = () => {
  return (
    <div className="flex flex-col gap-24 relative px-10 pb-24 h-auto w-full [background:var(--color-background-gradient-dark)] overflow-hidden
      max-[860px]:[background:#000] max-[860px]:px-0 max-[860px]:gap-0
    "
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
        <div className="relative flex justify-center h-[700px] w-full overflow-hidden
          max-[860px]:h-[500px]
        "
        >
          <Image
            src={FundosFogo}
            alt="esfera"
            height={1500}
            width={2000}
            className="absolute opacity-80 bottom-0 w-auto h-[900px] object-cover fashingEffect
              max-[860px]:h-[750px]
            "
          />
          <Image
            src={MyFace}
            alt="esfera"
            height={700}
            width={700}
            className="absolute bottom-0 h-[670px] w-auto m-auto
          max-[860px]:h-[500px] max-[860px]:w-auto max-[860px]:object-cover
          "
          />
        </div>
      </div>
      {/* Apresentation */}
      <div
        className="relative flex flex-col gap-5 h-full pt-32 text-neutral-50 z-50
        max-[860px]:py-0 max-[860px]:px-4 max-[860px]:-translate-y-24 
      "
      >
        <h1
          className="[font-family:_'Kodchasan',_sans-serif] font-black text-7xl 
            max-[860px]:text-5xl
            "
        >
          Emerson<br />Marins
        </h1>
        <p
          className="flex flex-wrap max-w-96 text-xl italic text-neutral-200
          max-[860px]:text-lg max-[860px]:font-extralight
          "
        >
          Transforme suas ideias em projetos incríveis e funcionais com soluções inovadoras únicas e impactante.
        </p>
        <Button options={"SAIBA MAIS"} />
      </div>
      {/* Icons */}
      <div
        className="absolute top-48 right-0 w-72
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
      <div
        className="flex justify-between w-full h-auto py-0
        max-[860px]:flex-wrap max-[860px]:px-4 max-[860px]:pb-10 max-[860px]:gap-5
        "
      >
        <div className=" flex flex-col items-center h-auto mb-10 w-32 gap-4 mr-4">
          <div className={styleSkill.divCircle}>
            <span
              className={styleSkill.circle}
            >
              <FaIdeal className="text-7xl" />
            </span>
          </div>
          <h3 className={styleSkill.title}>Comunicação</h3>
          <p className={styleSkill.text}>
            Sempre gostei de me comunicar e garantir que o que estou fando seja o mesmo que quero que
            entendam.
          </p>
        </div>
        <div className=" flex flex-col items-center h-auto mb-10 w-32 gap-4 mr-4">
          <div className={styleSkill.divCircle}>
            <span
              className={styleSkill.circle}
            >
              <FaIdeal className="text-7xl" />
            </span>
          </div>
          <h3 className={styleSkill.title}>Comunicação</h3>
          <p className={styleSkill.text}>
            Sempre gostei de me comunicar e garantir que o que estou fando seja o mesmo que quero que
            entendam.
          </p>
        </div>
        <div className=" flex flex-col items-center h-auto mb-10 w-32 gap-4 mr-4">
          <div className={styleSkill.divCircle}>
            <span
              className={styleSkill.circle}
            >
              <FaIdeal className="text-7xl" />
            </span>
          </div>
          <h3 className={styleSkill.title}>Comunicação</h3>
          <p className={styleSkill.text}>
            Sempre gostei de me comunicar e garantir que o que estou fando seja o mesmo que quero que
            entendam.
          </p>
        </div>
        <div className=" flex flex-col items-center h-auto mb-10 w-32 gap-4 mr-4">
          <div className={styleSkill.divCircle}>
            <span
              className={styleSkill.circle}
            >
              <FaIdeal className="text-7xl" />
            </span>
          </div>
          <h3 className={styleSkill.title}>Comunicação</h3>
          <p className={styleSkill.text}>
            Sempre gostei de me comunicar e garantir que o que estou fando seja o mesmo que quero que
            entendam.
          </p>
        </div>

      </div>
    </div>
  )
}