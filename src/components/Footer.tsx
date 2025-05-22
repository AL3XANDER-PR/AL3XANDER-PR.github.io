// import Logo from "@/assets/logoCorporativo.png";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => (
  <footer className="text-gray-400 bg-night body-font">
    <div className="container px-6 py-8 mx-auto flex flex-col items-center ">
      {/* <div className="mb-5">
        <img src={Logo} className="h-8 w-8" alt="" />
      </div> */}

      {/* <div className="mb-6 flex flex-col sm:flex-row items-center">
        <a className="focus:outline-none hover:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          Inicio
        </a>
        <a
          className="  hover:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          href="#sobreMi"
        >
          Sobre Mi
        </a>
        <a
          className="  hover:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          href="#portafolio"
        >
          Portafolio
        </a>
        <a
          className="  hover:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          href="#trabajaConmigo"
        >
          Trabaja conmigo
        </a>
      </div> */}
      <span
        style={{ borderBottom: "1px solid rgba(31, 41, 55, 0.72)" }}
        className="w-full mb-6"
      ></span>
      <div className="flex w-full justify-between">
        <div className="text-xs ">© 2021 - Alexander Ponte Reynaldo</div>

        <div className="flex justify-around w-auto text-center">
          <a
            target="_blank"
            href="https://github.com/AL3XANDER-PR"
            className="text-base "
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/alexander-ponte-9713b31a9/"
            className="text-base ml-3"
          >
            <IoLogoLinkedin className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
