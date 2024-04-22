'use client'
import Image from "next/image";
import EmersonMarins from "/public/assets/emerson-marins-03.webp";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { stylePortfolio } from "../projectPortfolio/styelObject";
import { marked } from "marked";

import { Element } from 'react-scroll';


interface IAboutMeItem {
  mainTitle?: string
  title?: string
  text?: string | TrustedHTML
}

const aboutMeText: IAboutMeItem[] = [
  {
    mainTitle: "Do zero a um programador full stack",
  },
  {
    title: "Despertar de um desenvolvedor",
    text: "Em 2020 comecei a criar lojas na Shopify e WordPress. Foi aí que me deparei com todos aqueles códigos que despertaram em mim um interesse profundo de como tudo funcionava. Era algo que eu definitivamente queria aprender. Então, mergulhei de cabeça no mundo da programação.",
  },
  {
    title: "Primeiros Passos (HTML, CSS, JavaScript)",
    text: "Meus primeiros contatos foram com Lógica de programação, HTML, CSS e JavaScript, que aprendi no Curso em Vídeo do professor Guanabara.",
  },
  {
    title: "Git, GitHub, GitFlow",
    text: "No início dos meus estudos, aprendi a usar o Git e o GitHub, através de um curso da plataforma Curso em Vídeo do professor Guanabara. O Git Flow aprendi posteriormente, pois também se tornou uma necessidade ter um fluxo de trabalho padronizado, organizado e que me desse experiência para o mercado.",
  },
  {
    title: "Imerção e projetos",
    text: "Em seguida, aprofundei meus conhecimentos com documentações e outros cursos online que me ajudaram a construir uma base sólida no desenvolvimento web. Enfim, eu poderia tirar minhas ideias do papel e colocá-las em prática. Comecei criando projetos acadêmicos e sites estáticos, mas a cada novo projeto, minha sede de conhecimento aumentava.",
  },
  {
    title: "Imerção e projetos",
    text: "Em seguida, aprofundei meus conhecimentos com documentações e outros cursos online que me ajudaram a construir uma base sólida no desenvolvimento web. Enfim, eu poderia tirar minhas ideias do papel e colocá-las em prática. Comecei criando projetos acadêmicos e sites estáticos, mas a cada novo projeto, minha sede de conhecimento aumentava.",
  },
  {
    title: "ITCSS, BEM, SASS e Tailwind",
    text: "Com o tempo, aprendi a matemática do CSS. (20K linhas de HTML) + (nomes genéricos para as classes) + (ausência de arquitetura de CSS) === (NEM O CRIADOR ENTENDE ESSE ISSO). Foi então que dominei a arte do SASS, implementei arquiteturas como ITCSS e melhorei a nomeação das minhas classes com o 'BEM' (BLOCK ELEMENT MODIFIED). Isso foi um salto quântico na organização e evolução do meu código. Afinal, fazia todo sentido do mundo usar nomes descritivos, mesmo sendo um pouco verboso! <br />Decepção e Auto afirmação<br /> Conheci o 'Tailwind'... <br />(((Porém, nem tudo estava perdido)))<br />Resolvi olhar pelo lado positivo. Mesmo aparentemente sendo controverso ao paradigma de separação de competências, percebi que se tratando de um código 'construído a partir de componentes desfragmentados em elementos', ficou simples organizar. A quem acredite que não, né! Mas no meu caso foi.",
  },
  {
    title: "Node.js, Express, Sequelize, Mongoose, Mongo Drive, MySQL, MongoDB",
    text: "Depois veio a grande necessidade de guardar as informações em algum lugar. Afinal de contas, 'nem só de front-end viverá uma boa aplicação'. Então estudei Node.js, Express e outras tecnologias para construir APIs, sem contar com a segurança que em fim pude ter paz! (Deixar informações sensíveis no front-end realmente é uma grande furada e nada profissional!). Foi algo incrível ver meus projetos evoluírem, saindo do amadorismo para o mundo real. Nessa parte é que agente bate no peito e acha que pode tudo! (Mal sabia o que vinha pela frente!). Optei por aprender o MySQL e MongoDB. No MySQL comecei com o professor 'Gustavo Guanabara', depois fui para documentações. Já com o MongoDB, fui direto na fonte e fiz os cursos gratuitos que eles oferecem. Também estudei o ORM Sequelize e a Lib Mongoose, apesar de usar o Mongo Drives, pois me conecto com o MongoDB Atlas.",
  },
  {
    title: "EC2, S3, Elastic Beanstalk",
    text: "Uma coisa sempre me tirou o sono: onde hospedar minhas fotos e APIs. Daí tive um encontro único com o EC2, S3 e Elastic Beanstalk da AWS.",
  },
  {
    title: "POO - Programação Orientada a Objeto",
    text: "O POO me guiou nesse caminho da organização e do código reutilizável. Realmente foi um divisor de águas permitir que meus códigos feitos com JavaScript puro produzissem componentes reutilizáveis.",
  },
  {
    title: "React, React Native, Next.js",
    text: "Meu processo de aprendizagem nessa etapa foi através das documentações, pois me permitiam aprender com mais detalhes, profundidade e rapidez. Aqui foi a parte que me fez avançar muito na construção dos meus projetos. Trabalhar com componentes melhorou deveras a organização, estruturação e o reaproveitamento do meu código. Após aprender essas tecnologias, pude dar vida a apps mobile e web, já pensando em entregar soluções completas para clientes freelance dês de uma aplicação Web à Mobile. Porém como sabemos do problema que o React tem com o SEO, realmente fez toda a diferença trabalhar com o Next.js fora vários outros benefícios que o NEXT nos dá.",
  },
]

const AboutMe = () => (
  <Element name='about-me' id="about-me">
  
  <div className="flex justify-center w-full overflow-hidden m-auto relative max-sm:px-2 [background:_var(--background-softSkills)]"
    
  >
    <div className="flex-wrap-reverse gap-y-14 w-full max-w-[1350px] relative h-auto p-10 justify-center items-center m-auto inline-flex">
      <Circule />
      <Info />
      <SelfImage />
    </div>
  </div>
  </Element>

)

const SelfImage = () => (
  <div className="relative m-auto">
    <div className="sm:w-[450px] w-[350px] h-auto m-auto relative z-20 rounded-br-[150px]">
      {/* Rectangle */}
      <div className="sm:h-[500px] w-full h-[400px] m-auto bottom-0 absolute -z-10 bg-gradient-to-b from-zinc-950 via-neutral-800 to-zinc-950 rounded-tl-[550px] rounded-tr-[250px] rounded-bl-[5px] rounded-br-[150px]" />
      <Image
        className="sm:w-[400px] w-[300px] h-auto m-auto"
        src={EmersonMarins}
        alt="Imagem de Emerson Marins"
        height={1200}
        width={700}
        priority={true}
      />
    </div>
  </div>
)

const Circule = () => (
  <div className="w-[100%] h-[100vw] -right-[30vw] top-[256.20px] absolute z-10 origin-top-left rotate-[-31.85deg] bg-tertiary-light rounded-t-[600px] rounded-b-[400px] shadow" />
)

const Info = () => (
  <div className="relative 2md:grow z-20 shrink basis-0 flex-col items-start justify-center gap-[50px] flex ">
    <Title />
    <Text />
    <SocialMedia />
  </div>
)

const Title = () => (
  <div>
    <span className="text-white [font-size:var(--step-6)] font-medium font-['Philosopher']  tracking-[4.20px]">
      Minha&nbsp;
    </span>
    <span className="text-orange-500 [font-size:var(--step-6)] font-medium font-['Philosopher']  tracking-[4.20px]">
      Trajetória
    </span>
  </div>
)

const Text = () => (
  <ul className="flex flex-col gap-10 max-w-[500px] h-80 overflow-y-auto text-[21px] font-light font-['Kodchasan'] pr-5">
    <h3 className={stylePortfolio.portfolioTextTitle} >{aboutMeText[0].mainTitle}</h3>
    {aboutMeText.map((element, index) => (
      index !== 0 && (
        <li className="flex flex-col gap-2" key={index}>
          <span className={stylePortfolio.portfolioTextSubTitle + " text-neutral-400"}>{element.title}</span>
          {typeof element.text === 'string' && ( // Type guard
            <p className={stylePortfolio.portfolioText + " text-neutral-600"} dangerouslySetInnerHTML={{ __html: element.text }} />
          )}
        </li>
      )
    ))}
  </ul>
)

const SocialMedia = () => (
  <div className="py-2.5 justify-start items-center gap-[53px] inline-flex" >
    <a
      className="Btn py-1 px-4 bg-white bg-opacity-0 rounded-[25px] shadow border-opacity-50 border border-orange-900 justify-center items-center gap-2.5 flex"
      href="https://github.com/emersonmarins"
      target="_blank"
    >
      <GitHubLogoIcon className="text-neutral-50 w-7 h-7 " />
      <div className="Github text-center text-zinc-100 text-[21px] font-bold font-['Kodchasan'] ">GitHub</div>
    </a>
    <a
      className={" py-1 px-4 bg-white bg-opacity-0 rounded-[25px] shadow border-opacity-50 border border-orange-900 justify-center items-center gap-2.5 flex "}
      href="https://www.linkedin.com/in/emerson-coutinho"
      target="_blank"
    >
      <LinkedInLogoIcon className="text-neutral-50 w-7 h-7 " />
      <div className="Linkedin text-center text-white text-[21px] font-bold font-['Kodchasan'] ">Linkedin</div>
    </a>
  </div>
)

export { AboutMe }