import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { stylePresentation } from "./style";
import Image from "next/image";

export const Card = ({ title, text, index, url }: any) => (
  <div className={stylePresentation.card}>

    <div className="h-auto max-sm:w-full mb-7 border-b-2">
      <Image src={url} height={800} width={1000} alt={`img ${title}`} 
        className="h-auto w-full"
      />
    </div>

    <div className="w-full pb-7 max-md:hidden ">
      <Accordion type="single" collapsible >
        <AccordionItem value={`item-${index}`}>
          <AccordionTrigger className="w-full hover:scale-110 transition-all duration-700 px-4">
            <h3 className="m-auto text-lg">
              {title}
            </h3>
          </AccordionTrigger>
          <AccordionContent className="p-4 m-auto">
            <p className="text-sm text-start text-quaternary-dark">
              {text}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
    <div className="w-full hidden pb-7 px-4 max-md:flex max-md:flex-col">
      <h3 className="m-auto text-lg py-4">
        {title}
      </h3>
      <p className="text-sm text-start text-primary-dark pr-4">
        {text}
      </p>
    </div>

  </div>
)