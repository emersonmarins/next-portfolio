export default function Button(options: any) {
  console.log(options.options)
  return (
    <span className="
      w-64 my-5 py-2 text-2xl [font-family:'Kodchasan',_sans-serif] text-white bg-neutral-900 border border-orange-700 rounded-[2rem]
      uppercase cursor-pointer relative text-center hover:bg-gradient-linear 
      transition-colors hover:transition-colors
      "
    >{options.options}</span>
  )
}