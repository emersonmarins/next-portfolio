"use client"
import { useState } from "react";
import { Logo } from "./logo";
import { Nav } from "./nav";
import { NavMobile } from "./navMobile";
import { SocialMedias } from "./socialMedias";
import "./styles.css"
import { Hamburguer } from "./iconHamburguer";


export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-header">
      <header className="flex relative justify-between px-7 w-full z-[300] header">
        <Logo />
        <Nav  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <SocialMedias />
        <Hamburguer menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </header>
      <NavMobile  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    </div>
  )
};