import { cn } from "@/lib/utils"


export default function Button({options, className}: any) {
  return (
    <span 
    className={cn( "w-56 my-5 py-2 text-xl [font-family:'Kodchasan',_sans-serif] text-secondary-light bg-transparent-dark border border-primary-bord rounded-[2rem] uppercase cursor-pointer relative text-center hover:bg-primary-linear hover:animate-pulse-button transition-colors hover:transition-colors", className)}
    >{options}</span>
  )
}