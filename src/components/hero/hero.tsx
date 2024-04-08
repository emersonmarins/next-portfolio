import Image from "next/image";
import HeroImage from "/public/assets/app/imgperfil02.webp";
import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoReact, BiLogoSass, BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandMysql, TbBrandReactNative } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";

const styleHero = {

  introducing: "flex justify-between items-center flex-row gap-10 h-[837px] max-w-[var(--max-width)] mt-[60px] mb-0 mx-auto",

  left: "flex flex-col justify-center gap-[49px] grow ",

  leftTitleSpan: "text-[rgb(240,240,240)] text-[length:var(--step--1)] relative uppercase",
  titleBemVindo: "text-[rgb(248,248,248)] [background:var(--color-background-orangeDarkRight)] text-[length:var(--step--1)] relative pl-[21px] pr-1 py-1.5 rounded-[14px_0_0_14px]",
  leftTitle: "flex flex-col gap-[35px]",
  leftTitleH1: "text-white font-semibold after:block after:content-['_'] after:[background:linear-gradient(to_left,hsla(0,0%,100%,0.034),hsla(0,0%,100%,0.226),#ffffffe5)] after:w-[140px] after:h-1 after:[animation-name:none] after:mt-[3px]",
  leftTitleH1Span: "text-[color:var(--color-text-08)] [font-family:_'Philosopher',_sans-serif;]",
  leftText: "flex flex-wrap text-[rgb(168,168,168)]",
  leftTechnologies: "flex gap-4 transition-[0.7s] [animation-fill-mode:_both]",


  introducingLeftIconsT: "cursor-pointer hover: animate-[rotate_1.4s_ease]",

  introducingLeftIconsTI: "text-[40px]",

  introducingLeftIconsTHoverI: "animate-[rotate_1.4s_ease]",


  faBrands: "text-white text-4xl",

  svg2: "w-[140px] h-auto",

  mongod: "fill-neutral-100 text-[#003D45] transition-[1.4s] ease-in-out",


  introducingRight: "flex grow"

}
export const Hero = () => {
  return (
    <div className="bg-neutral-950 w-full m-auto">
      <section className={styleHero.introducing + " bg-neutral-950"}>
        <div className={styleHero.left + " max-w-[450px] min-w-72 w-full flex-wrap "}>
          <div className={styleHero.leftTitle}>
            <span className={styleHero.leftTitleSpan}>
              <span className={styleHero.titleBemVindo}>Bem Vindo</span>
              &nbsp;ao meu Portifólio
            </span>
            <h1 className={styleHero.leftTitleH1 + ' text-[length:var(--step-6)] leading-[4rem]'}>Olá eu sou <span className={styleHero.leftTitleH1Span}>Emerson Marins</span></h1>
          </div>
          <div className={styleHero.leftText}>
            Posso transformar suas ideias em projetos incríveis e funcionais.
            Minha paixão pela tecnologia e minha habilidade em desenvolver 
            soluções inovadoras garantem que cada projeto seja único e impactante.
          </div>

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
        <div className={styleHero.introducingRight + " bg-yellow-500 justify-end"}>
          <div className="max-w-[450px] min-w-80 h-auto">
            <Image className="w-full h-auto" src={HeroImage} alt="emerson marins" height={1244} width={1244} />
          </div>
        </div>
      </section>
    </div>
  )
}