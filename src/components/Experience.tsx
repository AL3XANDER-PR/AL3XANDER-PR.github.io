import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const experiences = [
  {
    company: "ONE CLICK ENTERPRISE S.A.C",
    title: "Fullstack Developer",
    duration: "Sep 2024 – Mar 2024",
    description:
      "Como desarrollador freelance, me encargué del desarrollo de nuevos módulos y la mejora de funcionalidades existentes, aplicando buenas prácticas de programación. Mantuve comunicación constante con el equipo para proponer soluciones efectivas y colaborativas. Además, gestioné y resolví incidencias técnicas, asegurando la continuidad y estabilidad del sistema",
    technologies: [
      "React",
      "Redux",
      "NodeJS",
      "Git",
      "Bootstrap",
      "Tailwind CSS",
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
    ],
  },
  {
    company: "CONEXA FINANCIAL GROUP",
    title: "Fullstack Developer",
    duration: "Feb 2024 – Jul 2024",
    description:
      "Me encargué del desarrollo de módulos para el BPM de la empresa, trabajando en estrecha colaboración con distintas áreas para identificar necesidades, proponer mejoras y optimizar procesos internos. Aplicando buenas prácticas de desarrollo, contribuí a que los flujos operativos fueran más eficientes y con menor tiempo de respuesta",
    technologies: [
      "ReactJS",
      "Redux",
      "NodeJS",
      "Typescript",
      "Aws",
      "Amplify",
      "MySQL",
      "Git",
      "Angular",
      "Tailwind CSS",
    ],
  },
  {
    company: "SMART HIRING PERU EIRL.",
    title: "Desarrollador Full Stack",
    duration: "Jun 2023 – Ene 2024",
    description:
      "Desarrollé sitios web para clientes internacionales, principalmente de Puerto Rico, ajustándose a sus requerimientos específicos, plazos exigentes y altos estándares de calidad. Apliqué buenas prácticas de programación y pruebas, proponiendo soluciones innovadoras con nuevas herramientas para mejorar el rendimiento y la experiencia del usuario.",
    technologies: [
      "ReactJS",
      "VueJS",
      "Typescript",
      "JavaScript",
      "Node.JS",
      "Next.JS",
      "HTML",
      "CSS",
      "Mysql",
      "PHP",
      "Tailwind CSS",
      "Bootstrap",
      "Github",
    ],
  },
  {
    company: "CONASTEC S.R.L",
    title: "Analista Programador",
    duration: "Jul 2022 – Ene 2023",
    description:
      "Me encargué del mantenimiento y mejora de sistemas web, asegurando el cumplimiento de los requerimientos del cliente mediante pruebas, corrección de errores y documentación de nuevas funcionalidades. Además, brindé soporte técnico y capacitaciones a los usuarios finales, facilitando el uso y la gestión eficiente de las plataformas desarrolladas.",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Git",
      "SVN",
      "JavaScript",
      "PHP",
      "jQuery",
      "SQL Server",
    ],
  },
  {
    company: "DJ DISEÑOS Y SOLUCIONES S.A.C",
    title: "Programador Fullstack",
    duration: "Jul 2021 – Jun 2022",
    description:
      "Desarrollé nuevos módulos para la gestión interna de la empresa, aplicando buenas prácticas de programación y utilizando las tecnologías definidas. Además, revisaba y validaba los cambios realizados por otros desarrolladores, asegurando el cumplimiento de los estándares del proyecto antes de su paso a producción.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "Laravel",
      "Vue.js",
      "Git",
      "Node.js",
      "CodeIgniter",
      "Bootstrap",
    ],
  },
];

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section className="w-full flex flex-col py-16" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-12"
      >
        <span className="text-[#3f91ee] font-bold text-lg">01.</span>
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-700 dark:text-slate-200">
          {t("experience.title")}
        </h2>
        <div className="h-[1px] flex-grow bg-gray-300 dark:bg-slate-800"></div>
      </motion.div>

      {/* <p className="text-gray-400 text-sm sm:text-md lg:text-lg xl:text-xl mt-4 sm:mt-6 mb-15">
        I started my professional career as a back end developer around 2021. I have worked on multiple projects since then, and I have learned a lot from them.
      </p> */}

      <div className="relative ">
        {/* Línea de tiempo vertical - solo visible en desktop */}
        <div className="absolute left-[25%] h-[calc(100%-4rem)] w-0.5 bg-gradient-to-b from-[#3f91ee] to-gray-300 dark:to-gray-700 hidden md:block top-[2.5rem]"></div>

        {/* Experiencias */}

        <div className="flex flex-col gap-2">
          {experiences.map((exp, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-2"
              key={index}
            >
              <div className="relative">
                {/* Contenedor principal - flex en desktop, columna en móvil */}
                <div className="flex flex-col md:flex-row group  dark:hover:bg-gray-800/50 p-4 rounded-lg transition-all duration-300 ">
                  {/* Punto en la línea de tiempo - solo visible en desktop */}
                  <div className="absolute left-[25%] w-4 h-4 bg-[#3f91ee] rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden md:block group-hover:scale-125 transition-transform duration-300 top-1/2"></div>

                  {/* Información de la empresa */}
                  <div className="w-full md:w-[30%] md:pr-8 mb-6 md:mb-0 flex flex-col">
                    <div className="flex flex-col ">
                      <h3 className="text-gray-600 dark:text-white text-xl font-semibold group-hover:text-[#3f91ee] transition-colors duration-300">
                        {t(`experience.${index}.title`)}
                      </h3>
                      <p className="text-gray-400 text-sm font-medium group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                        {exp.duration}
                      </p>
                    </div>
                    <p className="text-[#3f91ee] text-sm mt-2 font-medium group-hover:text-[#2d7be0] transition-colors duration-300">
                      {exp.company}
                    </p>
                  </div>

                  {/* Descripción de funciones y tecnologías */}
                  <div className="w-full md:w-[65%] md:pl-8">
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                      {/* {exp.description} */}
                      {t(`experience.${index}.description`)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs bg-blue-500/10 dark:bg-gray-800 text-[#3f91ee] dark:text-[#3f91ee] rounded-full border border-[#3f91ee]/20 hover:bg-[#3f91ee] hover:text-white transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Línea divisoria - solo visible en móvil */}
                {index < experiences.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-gray-300 to-gray-300 dark:from-gray-700 dark:to-gray-700 mt-6 md:hidden"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
