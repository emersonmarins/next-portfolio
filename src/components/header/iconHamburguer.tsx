"use client"
import { useState } from "react";

interface Props {
  menuOpen: boolean
  setMenuOpen: (value: boolean) => void
}

export const Hamburguer = ({menuOpen, setMenuOpen}: Props) => {


  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const transitionStyle = { transition: 'all 1s ease, right 1s ease' };
  return (
    <div
      onClick={handleMenuToggle}
      className="hamburguer h-[1.6rem] flex grow justify-endcursor-pointer ml-7 sm:hidden"
    >
      <div className="flex flex-col justify-between w-6 h-[1.4rem]">
        <div className={`${menuOpen ? 'h-[1px] w-full bg-zinc-200 rotate-45 translate-y-[.65rem]' : 'h-[2px] w-full bg-zinc-200'} `} style={transitionStyle}></div>
        <div className={`${menuOpen ? 'h-[1px] w-full bg-zinc-200 opacity-0' : 'h-[2px] w-full bg-zinc-200'} `} style={transitionStyle}></div>
        <div className={`${menuOpen ? 'h-[1px] w-full bg-zinc-200 -rotate-45 translate-y-[-.65rem]' : 'h-[2px] w-full bg-zinc-200'} `} style={transitionStyle}></div>
      </div>
    </div>
  )
}