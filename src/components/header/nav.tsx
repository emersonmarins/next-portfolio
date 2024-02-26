import { FaChevronDown } from "react-icons/fa";
import "./styles.css"
import { Hamburguer } from "./iconHamburguer";

const styleNav = {
  a: "block leading-normal relative px-0 py-[15px] text-[var(--color-text-01)] capitalize",
  li: "pr-0",
  dropdown: "relative hover flex items-center gap-2 ",
  chevronDown: "-rotate-90 text-[var(--color-text-03)] size-3 ",
  chevronDownPrimary: "absolute top-[calc(50%_-_6px)] -translate-x-1/2 -right-6 text-[var(--color-text-03)] size-3 ",
  subMenu: "opacity-0 invisible flex flex-col justify-center gap-2.5 absolute left-[-30px] w-auto min-w-[200px] bg-[color:var(--color-background3)] shadow-[1px_1px_2px_1px_rgba(0,0,0,0.233)] transition-[0.5s] duration-[ease] delay-[125ms] p-[30px] rounded-sm top-full ",
  subMenuRight: "top-[-100%] ml-[30px] left-full ",
  subMenuLeft: "top-[-100%] left-[-160%] ml-[30px] ",
  upArrow: "after:rotate-45 after:content-['_'] after:border-[color:var(--color-background3)] after:absolute after:top-[-7px] after:rounded-[0_0_100%] after:border-[14px] after:border-solid after:left-1/4 ",
  lineEfectHover: "bg-[linear-gradient(black,black)] bg-[length:0_3px] bg-[0_100%] bg-no-repeat text-[var(--color-text-01)] transition-[background-size] duration-500 ease-linear pb-0.5 capitalize",
};

const menuConfig = [
  {
    type: "default",
    name: "home"
  },
  {
    type: "dropdown",
    name: "portfolio",
    dropdown: [
      {
        type: "dropdown",
        name: "html css js",
        dropdown: [
          { type: "default", name: "louse soft design" },
          { type: "default", name: "marins movies" },
          { type: "default", name: "porcellan" },
          { type: "default", name: "artezanal" },
          { type: "default", name: "hotel" }
        ]
      },
      {
        type: "dropdown",
        name: "next",
        dropdown: [
          { type: "default", name: "louse soft design" },
          { type: "default", name: "marins movies" },
          { type: "default", name: "porcellan" },
          { type: "default", name: "artezanal" },
          { type: "default", name: "hotel" }
        ]
      },
      {
        type: "dropdown",
        name: "reactNative",
        dropdown: [
          { type: "default", name: "louse soft design" },
          { type: "default", name: "marins movies" },
          { type: "default", name: "porcellan" },
          { type: "default", name: "artezanal" },
          { type: "default", name: "hotel" }
        ]
      }
    ]
  },
  {
    type: "default",
    name: "quem sou"
  },
  {
    type: "default",
    name: "contato"
  },
];

interface Props {
  menuOpen: boolean
  setMenuOpen: (value: boolean) => void
}

export const Nav = ({ menuOpen, setMenuOpen }: Props) => {
  return (
    <nav className="relative nav z-[100]">
      <div className={`head max-sm:flex`}>

      </div>
      <ul className="flex gap-7">
        {menuConfig.map((menuItem) => (
          <li key={menuItem.name} className={menuItem.type === 'dropdown' ? styleNav.dropdown : styleNav.li}>
            {menuItem.type === 'default' ? (
              <a className={styleNav.a} href="#">{menuItem.name}</a>
            ) : (
              <>
                <a className={styleNav.a} href="#">{menuItem.name}</a>
                <FaChevronDown className={styleNav.chevronDownPrimary} />
                <ul className={styleNav.subMenu + styleNav.upArrow}>
                  {menuItem.dropdown?.map((subMenuItem) => (
                    <li key={subMenuItem.name} className={subMenuItem.type === 'default' ? 'hoverUnderline' : (styleNav.dropdown + 'hoverUnderline')}>
                      {subMenuItem.type === 'default' ? (
                        <a href="#">
                          <span className={styleNav.lineEfectHover}>{subMenuItem.name}</span>
                        </a>
                      ) : (
                        <>
                          <a href="#">
                            <span className={styleNav.lineEfectHover}>{subMenuItem.name}</span>
                          </a>
                          <FaChevronDown className={styleNav.chevronDown} />
                          <ul className={styleNav.subMenu + styleNav.subMenuRight}>
                            {subMenuItem.dropdown?.map((subMenuItem) => (
                              <li key={subMenuItem.name} className={"hoverUnderline"}>
                                <a href="#">
                                  <span className={styleNav.lineEfectHover}>{subMenuItem.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
};