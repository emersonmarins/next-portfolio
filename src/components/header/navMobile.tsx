import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import homeicon from "/public/assets/app/homeicon04.png"
import portfolio  from "/public/assets/app/portfolio.png"
import portfolioIcon  from "/public/assets/app/portfolio.jpeg"
import myFaceIcon  from "/public/assets/app/myfaceicon.png"
import contatoIcon  from "/public/assets/app/contatoIcon.jpeg"
import { useState } from "react"

interface Props {
  menuOpen: boolean
  setMenuOpen: (value: boolean) => void
}

const styles = {
  text: "absolute top-[70%] left-0 right-0 text-center font-black text-neutral-50 uppercase text-sm",
  items: "relative rounded-2xl border-orange-400 border-2 h-24 m-1  bg-neutral-950 basis-[96px] p-0 overflow-hidden"
}

export const NavMobile = ({menuOpen, setMenuOpen}: Props) => {
  const [itemSelected, setItemSelected] = useState(0);
  const itemImage: Record<number, any> = {
    0: portfolio,
    1: myFaceIcon,
    2: homeicon,
    3: contatoIcon,
  }

  return (

    <div className={`absolute h-auto w-full bg-neutral-900 opacity-1 z-[100] ${!menuOpen && 'opacity-0 translate-y-full'}
      translate-y-0 transition-all duration-1000
    `}>
      {/* Carousel */}
      <div className="flex flex-col py-4 gap-4">
      {/* // 50% on small screens and 33% on larger screens. */}
        <Carousel className="">
          <CarouselContent className="ml-1">
            <CarouselItem className={styles.items} onClick={() => {setItemSelected(0)}}>
              <Image 
                src={homeicon} height={300} width={300} alt="page home icon"
                className=" object-cover w-24 h-24 m-0 p-0 opacity-50" 
              />
              <p className={styles.text}>home</p>
            </CarouselItem>
            <CarouselItem className={styles.items} onClick={() => {setItemSelected(1)}}>
            <Image 
                src={portfolioIcon} height={300} width={300} alt="page home icon"
                className=" object-cover w-24 h-24 m-0 p-0 opacity-50" 
              />
              <p className={styles.text}>portifolio</p>
            </CarouselItem>
            <CarouselItem className={styles.items} onClick={() => {setItemSelected(2)}}>
            <Image 
                src={myFaceIcon} height={300} width={300} alt="page home icon"
                className=" object-cover w-24 h-24 m-0 p-0 opacity-50" 
              />
              <p className={styles.text}>Sobre Mim</p>
            </CarouselItem>
            <CarouselItem className={styles.items} onClick={() => {setItemSelected(3)}}>
            <Image 
                src={contatoIcon} height={300} width={300} alt="page home icon"
                className=" object-cover w-24 h-24 m-0 p-0 opacity-50" 
              />
              <p className={styles.text}>contato</p>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        {/* line */}
        <div className="w-full border-b-[1px] border-[#fefefe70] h-1"></div>
        <div className="m-auto w-[90%]">
          <Image src={itemImage[itemSelected]} alt="imagem" height={370} width={300}
            className="rounded-2xl w-full h-[calc(60vw)] m-auto object-cover"
          />
        </div>
      </div>
    </div>

  )
}