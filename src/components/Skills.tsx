import { useState, useEffect, useRef, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AstroIcon,
  AwsIcon,
  BootstrapIcon,
  CssIcon,
  GitHubIcon,
  GitIcon,
  HtmlIcon,
  JavaScriptIcon,
  LaravelIcon,
  MongoIcon,
  MySQLIcon,
  NextIcon,
  NodeIcon,
  PhpIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
  VueIcon,
} from "./icons/TechIcons";
import { useTranslation } from "react-i18next";

type SkillCategory = "Frontend" | "Backend" | "Database" | "Tools";

interface Skill {
  name: string;
  icon: string | ReactNode;
  url: string;
  category: SkillCategory;
  color?: string;
}

const categoryOrder: Record<SkillCategory, number> = {
  Frontend: 1,
  Backend: 2,
  Database: 3,
  Tools: 4,
};

const defaultClass = "h-10 w-10 lg:h-14 lg:h-14 xl:h-16 xl:w-16 ";

const skillsData: Skill[] = [
  // Frontend
  {
    name: "JavaScript",
    icon: <JavaScriptIcon className={defaultClass} />,
    url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    category: "Frontend",
  },
  {
    name: "React",
    icon: <ReactIcon className={defaultClass} />,
    url: "https://reactjs.org/",
    category: "Frontend",
  },
  {
    name: "HTML5",
    icon: <HtmlIcon className={defaultClass} />,
    url: "https://developer.mozilla.org/es/docs/Web/HTML",
    category: "Frontend",
  },
  {
    name: "CSS3",
    icon: <CssIcon className={defaultClass} />,
    url: "https://developer.mozilla.org/es/docs/Web/CSS",
    category: "Frontend",
  },

  {
    name: "TypeScript",
    icon: <TypeScriptIcon className={defaultClass} />,
    url: "https://www.typescriptlang.org/",
    category: "Frontend",
  },

  {
    name: "Vue",
    icon: <VueIcon className={defaultClass} />,
    url: "https://vuejs.org/",
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: (
      <NextIcon
        className={`${defaultClass} hover:text-[#00000] dark:hover:text-[#FFFFFF] transition duration-200`}
      />
    ),
    url: "https://nextjs.org/",
    category: "Frontend",
  },
  {
    name: "Astro",
    icon: <AstroIcon className={defaultClass} />,
    url: "https://astro.build/",
    category: "Frontend",
  },
  {
    name: "TailwindCSS",
    icon: <TailwindIcon className={defaultClass} />,
    url: "https://tailwindcss.com/",
    category: "Frontend",
  },
  {
    name: "Bootstrap",
    icon: <BootstrapIcon className={defaultClass} />,
    url: "https://getbootstrap.com/",
    category: "Frontend",
  },
  // Backend
  {
    name: "Node.js",
    icon: <NodeIcon className={defaultClass} />,
    url: "https://nodejs.org/",
    category: "Backend",
  },
  {
    name: "PHP",
    icon: <PhpIcon className={defaultClass} />,
    url: "https://www.php.net/",
    category: "Backend",
  },
  {
    name: "Laravel",
    icon: <LaravelIcon className={defaultClass} />,
    url: "https://laravel.com/",
    category: "Backend",
  },
  // Databases
  {
    name: "MySQL",
    icon: <MySQLIcon className={defaultClass} />,
    url: "https://www.mysql.com/",
    category: "Database",
  },
  {
    name: "MongoDB",
    icon: <MongoIcon className={defaultClass} />,
    url: "https://www.mongodb.com/",
    category: "Database",
  },
  // Tools
  {
    name: "Git",
    icon: <GitIcon className={defaultClass} />,
    url: "https://git-scm.com/",
    category: "Tools",
  },
  {
    name: "GitHub",
    icon: (
      <GitHubIcon
        className={`${defaultClass}  hover:text-[#00000] dark:hover:text-[#FFFFFF] transition duration-200`}
      />
    ),

    url: "https://github.com/",
    category: "Tools",
  },
  {
    name: "AWS",
    icon: <AwsIcon className={defaultClass} />,

    url: "https://aws.amazon.com/",
    category: "Tools",
  },
];

const skills = [...skillsData].sort(
  (a, b) => categoryOrder[a.category] - categoryOrder[b.category]
);

const Skills = () => {
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const { t } = useTranslation();

  const totalSkills = skills.length;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoScrolling) {
      interval = setInterval(() => {
        setPosition((prev) => {
          const newPosition = prev - 1;
          // Si llegamos al final del primer conjunto, volvemos al inicio
          if (newPosition <= -totalSkills * 100) {
            return 0;
          }
          return newPosition;
        });
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isAutoScrolling, totalSkills]);

  const handleMouseEnter = (skill: Skill) => {
    setHoveredSkill(skill);
    setIsAutoScrolling(false);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
    setIsAutoScrolling(true);
  };

  return (
    <section className="lg:py-16" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-12"
      >
        <span className="text-[#3f91ee] font-bold text-lg">03.</span>
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-700 dark:text-slate-200">
          {t("skills.title")}
        </h2>
        <div className="h-[1px] flex-grow bg-gray-300 dark:bg-slate-800"></div>
      </motion.div>

      <div className="relative overflow-hidden">
        <motion.div
          ref={carouselRef}
          className="flex gap-8"
          style={{
            x: position,
            width: "fit-content",
          }}
          transition={{
            x: {
              type: "spring",
              stiffness: 100,
              damping: 30,
            },
          }}
        >
          {Array.from({ length: 3 }).flatMap((_, repeatIndex) =>
            skills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}-${repeatIndex}`}
                className="flex-shrink-0 relative pb-12 "
                onMouseEnter={() => handleMouseEnter(skill)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.div
                    className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center text-sm text-gray-400 dark:text-white/40"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {skill.icon}
                  </motion.div>
                </a>

                {/* Tooltip con el nombre de la tecnología */}
                <div className="md:hidden">
                  {
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs py-1 px-2 rounded shadow-lg z-10"
                    >
                      {skill.name}
                    </motion.div>
                  }
                </div>

                <AnimatePresence>
                  {hoveredSkill?.name === skill.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs py-1 px-2 rounded shadow-lg z-10"
                    >
                      {skill.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
