import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./styles.css"


export const SocialMedias = () => (
  <div className="flex items-center gap-5 area socialmedia max-[420px]:hidden">
    <a href="https://github.com/emersonmarins" target="__blank">
      <FaGithub className="text-primary-light text-3xl cursor-pointer"/>
    </a>
    <a href="https://www.linkedin.com/in/emerson-coutinho/" target="__blank">
      <FaLinkedin className="text-primary-light text-3xl cursor-pointer"/>
    </a>
  </div>
)
