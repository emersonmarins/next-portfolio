export const stylePresentation = {
  header: "flex justify-center items-center gap-4 h-auto w-full max-w-[1350px] m-auto shadow-sm overflow-hidden max-md:flex-col-reverse max-md:items-start max-md:pb-20",
  headerContentInfo: `flex flex-col pl-20 gap-7 w-auto relative z-20
  max-lg:pl-4 max-md:pl-10
  before:content-[''] before:absolute before:bg-secondary-dark before:h-[430px] before:w-[620px]
  before:-z-10 before:rounded-2xl before:-rotate-45 before:-left-64 before:-translate-y-28
  `,
  headerTitle: "text-6xl w-80 font-black text-primary-light [font-family:_'kodchasan',sans-serif]",
  headerText01: "text-2xl text-secondary-light w-56 pb-7 [font-family:_'kodchasan',sans-serif] max-md:w-[70%] max-md:pb-0",
  headerText02: "text-lg text-quaternary-light w-52 [font-family:_'kodchasan',sans-serif] max-md:w-[90%]",
  main: "flex gap-14 max-w-[1350px] m-auto px-7 pb-40 pt-32 max-md:pt-20 max-sm:px-5",
  contentVideo: `flex justify-center relative h-auto my-20 mx-auto  pr-10
  max-md:my-0 max-md:pr-0 max-md:w-full max-w-[900px]
  before:content-[''] before:absolute before:bg-secondary-dark before:h-[550px] before:w-[620px]
  before:z-0 before:rounded-2xl before:-rotate-45 before:-right-64 before:-translate-y-28
  `,
  video: `min-w-[300px] w-full h-full overflow-hidden shadow-orange-950 
  rounded-2xl shadow-sm border-spacing-2 border border-neutral-700 relative z-20
  max-md:rounded-none
  `,
  lineVertical: "[background:linear-gradient(transparent,_#FF914D,_transparent)] h-[400px] w-[1px] my-10 mx-10 max-lg:hidden",
  aside: "flex flex-col gap-7 w-1/4 pl-3  min-w-72 max-md:hidden",
  asideTitle: "w-full text-3xl pb-10 font-black",
  sidebar: "w-full pb-10 text-tertiary-dark ",
  sidebarItemWrapper: "w-11/12 grow max-md:hidden",
  sidebarTrigger: "w-full",
  sidebarTriggerChildren: "text-lg",
  sidebarContent: "m-auto",
  sidebarContentChildren: "text-sm text-start text-quaternary-dark",
  card: "flex flex-col w-[calc(100%_/_3_-_20px)] max-2lg:w-[calc(50%_-_27px)] max-2md:w-[calc(100%_-_40px)] max-sm:w-full max-sm:mx-0 max-sm:shadow-xl h-auto bg-primary-light rounded-lg hover:shadow-xl hover:cursor-pointer overflow-hidden",
}