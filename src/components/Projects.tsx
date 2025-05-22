import { motion } from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import HS from "@/assets/img/HS.png";
import HS1 from "@/assets/img/HS1.png";
import HS2 from "@/assets/img/HS2.png";

import I1 from "@/assets/img/I1.png";
import I2 from "@/assets/img/I2.jpg";
import I3 from "@/assets/img/I3.png";

interface Project {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  size?: "normal" | "wide" | "tall";
}

const projects: Project[] = [
  {
    title: "Landing Page Epixelab",
    description:
      "Landing page para una empresa de Marketing Digital. Incluye una sección de testimonios, newsletter entre otros.",
    images: [
      "https://raw.githubusercontent.com/AL3XANDER-PR/Epixelab/refs/heads/main/public/image.png",
    ],
    technologies: ["Astro", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/AL3XANDER-PR/Epixelab",
    demoUrl: "https://epixelab.vercel.app/",
    size: "wide",
  },
  {
    title: "Landing Page Fylo",
    description:
      "Landing page para una aplicacion de almacenamiento en la nube. Incluye una sección de testimonios, newsletter entre otros.",
    images: [
      "https://raw.githubusercontent.com/AL3XANDER-PR/Fylo/main/public/image.png",
    ],
    technologies: ["Astro", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/AL3XANDER-PR/Fylo",
    demoUrl: "https://fylo-va.vercel.app/",
    size: "normal",
  },
  {
    title: "Hispania Screening Solutions",
    description:
      "Página web enfocada en apoyar procesos de contratación inclusivos, brindando información clave para tomar decisiones justas y promover la igualdad de oportunidades.",
    images: [HS1, HS, HS2],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap"],
    githubUrl: "https://github.com/AL3XANDER-PR/Hispania",
    demoUrl: "https://hispaniascreening.com/",
    size: "normal",
  },
  {
    title: "IslandmedPR",
    description:
      "Plataforma web para gestionar licencias de cannabis medicinal en Puerto Rico, con funciones e-commerce. Me encargué del rediseño completo del frontend, mejorando la interfaz y la experiencia de usuario.",
    images: [I2, I1, I3],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "MySQL"],
    githubUrl: "",
    demoUrl: "https://islandmedpr.com/",
    size: "wide",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    // Reproducir automáticamente en móvil o cuando hay hover en desktop
    if (isMobile || isHovered) {
      interval = setInterval(
        () => {
          setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
        },
        isMobile ? 3000 : 2000
      ); // Más lento en móvil para mejor visualización
    }

    return () => clearInterval(interval);
  }, [isHovered, isMobile, project.images.length]);

  return (
    <>
      <div
        className={`group relative overflow-hidden rounded-t-3xl  md:rounded-3xl  bg-[#111111] hover:bg-[#161616] transition-all duration-500 flex
        ${project.size === "wide" ? "md:col-span-2" : ""} 
        ${project.size === "tall" ? "row-span-2" : ""}`}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
      >
        {project.images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out
      ${
        currentImageIndex === index
          ? "opacity-90 dark:opacity-60 scale-100"
          : "opacity-0  scale-100"
      } 
      ${isHovered || isMobile ? "group-hover:scale-105" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div
          className={`absolute top-4 right-4 flex gap-3 z-10 transition-all duration-300
        ${
          isMobile
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
        }`}
        >
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-[#64ffda] transition-colors  bg-black/30 p-2 rounded-full backdrop-blur-sm hover:bg-black/50"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-[#64ffda] transition-colors bg-black/30 p-2 rounded-full backdrop-blur-sm hover:bg-black/50"
            aria-label="Demo"
          >
            <FaLink className="text-xl" />
          </a>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-blue-950/80 dark:from-blue-950/80 via-black/40 dark:via-black/50 to-transparent h-4/4 flex flex-col justify-end">
          <div
            className={`transform transition-transform duration-300
          ${
            isMobile
              ? "translate-y-0"
              : "translate-y-4 group-hover:translate-y-0"
          }`}
          >
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">
              {project.title}
            </h3>
            <p
              className={`text-gray-100 text-sm mb-4 transition-all duration-300
            ${
              isMobile
                ? "opacity-100 h-auto"
                : "opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto "
            }`}
            >
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 text-xs  bg-blue-500/10  text-[#3f91ee] dark:text-[#3f91ee] border border-[#3f91ee]/20  transition-all duration-300  rounded-full cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-500  mb-6 rounded-b-3xl p-4 text-white/80 transition-all duration-300 md:hidden ">
        {/* Overlay para el efecto de hover */}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
        consectetur iste ipsam nemo facilis id, aliquid doloribus accusamus
        temporibus reiciendis?
      </div>
    </>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16" id="proyects">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-[#3f91ee] font-bold text-lg">02.</span>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-700 dark:text-slate-200">
            {t("projects.title")}
            {/* Some Things I've Built */}
          </h2>
          <div className="h-[1px] flex-grow bg-gray-300 dark:bg-slate-800"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }} // Añadimos un efecto de escala inicial
          whileInView={{ opacity: 1, y: 0, scale: 1 }} // Escala a su tamaño original
          transition={{ duration: 0.6, ease: "easeOut" }} // Ajustamos la duración y el easing
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 auto-rows-[300px]"
        >
          {projects.map(
            (project, index) => (
              (project.title = t(`projects.${index}.title`)),
              (project.description = t(`projects.${index}.description`)),
              (<ProjectCard key={index} project={project} />)
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
