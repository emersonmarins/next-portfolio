import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./styles.css"


export const SocialMedias = () => (
  <div className="flex items-center gap-5 area socialmedia max-[420px]:hidden">
    <a href="#">
      <FaGithub className="text-white text-3xl"/>
    </a>
    <a href="#">
      <FaLinkedin className="text-white text-3xl"/>
    </a>
  </div>
)
