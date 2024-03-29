import Image from "next/image";
import Comunicacao02 from "/public/assets/app/skills/comunicacao02.png"
import TraEquip04 from "/public/assets/app/skills/trabalhoemequipe04.png"
import Resolution01 from "/public/assets/app/skills/resolution03.png"
import Bussola from "/public/assets/app/skills/bussola.webp"



const styleSkill = {
  skillContainer: "flex justify-between w-full h-auto py-0 max-[860px]:flex-wrap max-[860px]:px-4 max-[860px]:pb-10 max-[860px]:gap-5 overflow-hidden",
  skillWrapper: " flex justify-center max-md:flex-col items-center h-auto py-16 max-md:pb-10 max-sm:px-4 px-20 w-full gap-20 max-md:gap-5 relative z-20",
  title: "text-primary-dark capitalize text-4xl mb-5 [font-family:_kodchasan,_sans-serif]",
  titleDarck: "text-primary-light capitalize text-4xl mb-5 [font-family:_kodchasan,_sans-serif]",
  mainSubtitle: "text-secondary-dark text-xl mb-3 [font-family:_Kodchasan,_sans-serif]",
  mainSubtitleDarck: "text-secondary-dark text-xl mb-3 [font-family:_Kodchasan,_sans-serif]",
  text: "text-tertiary-dark text-base font-thin mb-5",
  textDarck: "text-tertiary-light text-base font-thin mb-5",
}


const softSkill = [
  {
    title: "Comunicação",
    mainSubtitle: "Experiência como líder & professor",
    text: "Ao longo de mais de 7 anos, trabalhei como líder e professor em pequenos grupos, desenvolvendo a habilidade de comunicar ideias com clareza, objetividade e empatia, Aprimorei minha comunicação para me adaptar a diferentes públicos, desde alunos até colegas de trabalho e clientes, garantindo clareza e assertividade em cada interação",
    icon: Comunicacao02,
  },
  {
    title: "Trabalho em equipe",
    mainSubtitle: "Experiência na empresa NET desde 2012",
    text: "A partir da minha experiência na empresa NET em 2012 onde fiz um treinamento interno específico para trabalhar em equipe, desenvolvi essa habilidade, priorizando a colaboração entre os membros e o apoio mútuo para alcançar objetivos em conjunto. Através da comunicação clara e do respeito mútuo, contribuí para um ambiente de trabalho positivo e colaborativo, promovendo a resolução construtiva de conflitos",
    icon: TraEquip04,
  },
  {
    title: "Resolução de problemas",
    mainSubtitle: "Experiência na área técnica desde 2012",
    text: "Trabalhando na área técnica, desenvolvi a habilidade de analisar problemas de forma crítica e encontrar soluções eficazes, mesmo sob pressão, prazos apertados e recursos limitados. Utilizo meu pensamento criativo para encontrar soluções inovadoras e adaptáveis a diferentes situações, sempre buscando a otimização dos processos e a entrega de resultados de qualidade",
    icon: Resolution01,
  },
  {
    title: "Adaptabilidade",
    mainSubtitle: "Experiência em diversas áreas:",
    text: "Ao longo da minha carreira, trabalhei em diversas áreas, aprendendo a ser flexível em diferentes situações e cenários. Aprimorei minha resiliência para superar desafios e manter o foco nos objetivos, mesmo em momentos adversos. Agindo com proatividade na identificação de necessidades e na busca por soluções, sempre busquei contribuir para um fluxo de trabalho mais eficiente e eficaz",
    icon: Bussola,
  },
]

export const SoftSkills = (): any => (
  <SkillsContainer>

    <h2 className=" relative z-20 text-6xl font-medium text-center [font-family:_philosopher,_'sans-serif']
        mt-20 max-md:mt-0 max-md:translate-y-10
        before:content-[''] before:h-[100vw] before:w-[100vw] before:bg-tertiary-radial
        before:rounded-[50%] before:top-[-70vw] before:[box-shadow:_0_0_41px_2px_#17171750]
        before:absolute before:-z-10 before:left-[50%] max-md:before:h-[150vw] max-md:before:w-[200vw] 
      ">
      Soft&nbsp;
      <span className="[font-family:_philosopher,_'sans-serif'] text-primary">
        Skills
      </span>
      <p className="relative z-50 translate-y-2 flex justify-center [font-size:var(--step-0)] text-quaternary-dark"
      >Como desenvolvi minhas habilidade</p>
    </h2>
    {softSkill.map((element, index) => (
      <div className={index % 2 === 0 ? (styleSkill.skillWrapper) : (styleSkill.skillWrapper + ' bg-secondary-dark-linear')} key={index}>
        <div className="">
          <Image src={element.icon} height={800} width={800} alt="imagem de um globo"
            className=" w-[600px] h-auto max-md:w-3/4 rounded-xl m-auto overflow-hidden"
          />
        </div>

        <div className="flex flex-col w-2/3 max-w-[600px] max-md:w-11/12">
          <h3 className={index % 2 === 0 ? styleSkill.title : styleSkill.titleDarck}>
            <span className="text-primary font-black [font-family:_Philosopher,_sans-serif]">{element.title} </span>
            <span className="font-black [font-family:_Philosopher,_sans-serif]">{element.mainSubtitle}</span>
          </h3>
          <p className={index % 2 === 0 ? styleSkill.text : styleSkill.textDarck}>{element.text}</p>
        </div>
      </div>
    ))}

  </SkillsContainer>
);

const SkillsContainer = ({ children }: any) => (
  <div className=" w-full bg-secondary-radial overflow-hidden" id="soft-skills">
    {children}
  </div>
)