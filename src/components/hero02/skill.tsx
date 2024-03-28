import Image from "next/image"
import { FaIdeal } from "react-icons/fa"
import { FaComments, FaPeopleArrows, FaWrench, FaCompass } from "react-icons/fa";
import "./animate.css";

const styleSkill = {
  skillContainer: " flex justify-around w-full h-auto py-0 max-[860px]:flex-wrap max-[860px]:px-4 max-[860px]:pb-10 max-[860px]:gap-5",
  skillWrapper: "flex flex-col items-center h-auto mb-10 w-50 gap-4 mr-4",
  divCircle: " relative h-32 w-32 btnStyleBg ",
  circle: "flex btnStyle items-center justify-center text-primary-light font-medium absolute z-50 h-full w-full bg-secondary-dark-linear ",
  title: "text-primary-light text-xl text-center",
  text: "w-56 text-tertiary-light text-xs text-center",
}

const softSkill = [
  {
    title: "Comunicação",
    mainSubtitle: "Na frente de lideranças e ensinando desenvolvi uma liderança clara e transparente com uma comunicação eficaz em diferentes contextos",
    icon: FaComments,
  },
  {
    title: "Trabalho em equipe",
    mainSubtitle: "Dês do meu ingresso na NET em 2012 aperfeiçõei minhaa habilidades em colaboração, ajuda mútua, comunicação eficaz e resolução de conflitos",
    icon: FaPeopleArrows,
  },
  {
    title: "Resolução de problemas",
    mainSubtitle: "Com experiência em várias áreas técnicas desenvolvi análise crítica, soluções eficazes, criatividade e adaptabilidade",
    icon: FaWrench,
  },
  {
    title: "Adaptabilidade",
    mainSubtitle: "Experiência em diversas áreas adquirindo flexibilidade, resiliência, proatividade e iniciativa",
    icon: FaCompass,
  },
]

export const Skill = () => (
  <SkillContainer>
    {softSkill.map((element, index) => (
      <div className={styleSkill.skillWrapper} key={index}>
        <div className={styleSkill.divCircle}>
          <span
            className={styleSkill.circle}
          >
            <element.icon className="text-7xl " />
          </span>
        </div>
        <h3 className={styleSkill.title}>{element.title}</h3>
        <p className={styleSkill.text}>{element.mainSubtitle}</p>
      </div>
    ))}
  </SkillContainer>
);

export const SkillContainer = ({ children }: any) => (
  <div className={styleSkill.skillContainer}>{children}</div>
);