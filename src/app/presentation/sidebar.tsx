import Imports from "./imports";
import { stylePresentation } from "./style";
import { infoWebSite } from "@/components/projectPortfolio/db/db";


export const SidebarItem = ({ trigger, content, index }: any) => (
  <div className={stylePresentation.sidebarItemWrapper}>
    <Imports.AccordionItem key={index} value={`item-${index}`}>
      <Imports.AccordionTrigger className={stylePresentation.sidebarTrigger}>
        <h3 className={stylePresentation.sidebarTriggerChildren}>
          {trigger}
        </h3>
      </Imports.AccordionTrigger>
      <Imports.AccordionContent className={stylePresentation.sidebarContent}>
        <p className={stylePresentation.sidebarContentChildren}>
          {content}
        </p>
      </Imports.AccordionContent>
    </Imports.AccordionItem>
  </div>
);

export const Sidebar = ({ children }: any) => (
  <div className={stylePresentation.sidebar}>
    <Imports.Accordion type="single" collapsible className="w-full " >
      {children}
    </Imports.Accordion>
  </div>
);

export const Aside = ({ text }: Record<string, string>) => (
  <aside className={stylePresentation.aside}>
    <h1 className={stylePresentation.asideTitle}>{text}</h1>
    <Sidebar>
      {infoWebSite[0].body.map((element, index) => <SidebarItem trigger={element.title} content={element.text} index={index} key={index} />)}
    </Sidebar>
  </aside>
)
