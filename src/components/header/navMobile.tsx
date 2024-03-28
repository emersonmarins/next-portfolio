'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import homeicon from "/public/assets/app/homeicon.jpg"
import Home from "/public/assets/app/home.png"
import Portfolio from "/public/assets/app/portfolio.png"
import SoftSkills from "/public/assets/app/soft-skills.png"
import SoftSkillsIcon from "/public/assets/app/soft-skills-icon.jpg"
import portfolioIcon from "/public/assets/app/portfolio.jpeg"
import contatoIcon from "/public/assets/app/contatoIcon.jpeg"
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react"
import Button from "../button/button"
import { useRouter } from "next/navigation"

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense } from "react"


interface Props {
  menuOpen: boolean
  setMenuOpen: (value: boolean) => void
}

const styles = {
  text: "absolute bottom-[14px] left-0 right-0 text-center font-black text-primary-light uppercase text-sm",
  items: "relative rounded-2xl border-orange-400 border-2 h-24 m-1  bg-primary-dark basis-[96px] p-0 overflow-hidden"
}

export const Search = ({ menuOpen, setMenuOpen }: Props) => {

  const router = useRouter();
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // STATES
  const [url, setUrl] = useState('/');
  const [goToSkills, setGoToSkills] = useState(false);
  const [itemSelected, setItemSelected] = useState(0);

  const scrollTo = () => {
    let toY = Number(document.getElementById('soft-skills')?.offsetHeight);
    toY === null && (toY = 0);
    url === '/' ? (
      scroll.scrollTo(toY, {
        to: "soft-skills",
        duration: 800,
        offset: 0,
        spy: true,
        smooth: true,
      }),
      setMenuOpen(false),
      setGoToSkills(false)
    ) : (
      setGoToSkills(true),
      router.push('/')
    )
  };

  useEffect(() => {
    setUrl(`${pathname}`)

  }, [pathname, searchParams]);

  (goToSkills && url === '/') && setTimeout(() => { scrollTo() }, 500);

  const itemImage: Record<number, any> = {
    0: Home,
    1: Portfolio,
    2: SoftSkills,
    3: contatoIcon,
  }

  return (

    <div className={`absolute h-auto w-full bg-primary-linear z-[100] top-[3.6rem] ${menuOpen ? 'animate-show-menu' : 'animate-hidden-menu hidden '}
      translate-y-0 transition-all duration-1000
    `}>
      {/* Carousel */}
      <div className=" bg-primary-linear flex flex-col pt-4 pb-7 gap-4">
        {/* // 50% on small screens and 33% on larger screens. */}
        <Carousel className="">
          <CarouselContent className="ml-1">
            <CarouselItem className={styles.items} onClick={() => { setItemSelected(0) }}>
              <Image
                src={homeicon} height={300} width={300} alt="page home icon"
                className=" object-cover w-24 h-24 m-0 p-0 opacity-50"
              />
              <p className={styles.text}>home</p>
            </CarouselItem>
            <CarouselItem className={styles.items} onClick={() => { setItemSelected(1) }}>
              <Image
                src={portfolioIcon} height={300} width={300} alt="page home icon"
                className=" object-cover w-24 h-24 m-0 p-0 opacity-50"
              />
              <p className={styles.text}>portifolio</p>
            </CarouselItem>
            <CarouselItem className={styles.items} onClick={() => { setItemSelected(2) }}>
              <Image
                src={SoftSkillsIcon} height={300} width={300} alt="page home icon"
                className=" object-cover w-24 h-24 m-0 p-0 opacity-50"
              />
              <p className={styles.text}>Soft Skills</p>
            </CarouselItem>
            <CarouselItem className={styles.items} onClick={() => {
              setMenuOpen(false),
                scroll.scrollToBottom({
                  duration: 800,
                  smooth: "easeInOutCubic",
                })
            }}>
              <Image
                src={contatoIcon} height={300} width={300} alt="page home icon"
                className=" object-cover w-24 h-24 m-0 p-0 opacity-50"
              />
              <p className={styles.text + "top-2"}>contato</p>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        {/* line */}
        <div className="w-full border-b-[1px] border-[#fefefe70] h-1"></div>
        <div className="flex flex-col gap-5 m-auto w-[90%]">
          <Image src={itemImage[itemSelected]} alt="imagem" height={800} width={1200}
            className="rounded-2xl w-full h-[calc(60vw)] m-auto object-cover"
          />
          {itemSelected === 0 && (
            <a href="/" onClick={() => { setMenuOpen(false) }}>
              <Button options={"Ir Para Home"} className={"px-4 text-xs"} />
            </a>
          )}
          {itemSelected === 1 && (
            <Link
              to="portfolio"
              duration={800}
              offset={0}
              spy={true}
              smooth={true}
              onClick={() => { setMenuOpen(false) }}
            >
              <Button options={"Ver Portfólio"} className={"px-4 text-xs"} />
            </Link>
          )}
          {itemSelected === 2 && (
            <a href="#" onClick={scrollTo}>
              <Button options={"Ver Soft Skills"} className={"px-4 text-xs"} />
            </a>
          )}
        </div>
      </div>
      <div className=" absolute -z-10 w-screen min-h-[100vh] top-0 bottom-0 left-0 right-0 backdrop-blur-sm"></div>
    </div >


  )
}
export const NavMobile = ({ menuOpen, setMenuOpen }: Props) => (
  <Suspense>
    <Search menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
  </Suspense>
);