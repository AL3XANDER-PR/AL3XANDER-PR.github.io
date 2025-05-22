import { motion } from "framer-motion";
import {
  JavaScriptIcon,
  ReactIcon,
  VueIcon,
  AstroIcon,
  MySQLIcon,
  NodeIcon,
  PHPIcon,
  TailwindIcon,
  GitIcon,
  PostmanIcon,
  NotionIcon,
  DividerIcon,
} from "./icons/TechIcons";

// Assets
import Principal from "@/assets/hero-img.png";
import handShake from "@/assets/hand-shake.webp";
import { useTranslation } from "react-i18next";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeLeftRightBounce = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring", // Efecto de rebote
      stiffness: 300, // Fuerza del rebote
      damping: 20, // Suaviza el rebote
      duration: 0.6, // Duración total de la animación
    },
  },
};

const fadeLeftRightBounce2 = {
  hidden: { opacity: 0, x: -40 }, // Comienza a la izquierda y desvanecido
  show: {
    opacity: 1,
    x: 0, // Llega a su posición original
    transition: {
      type: "spring", // Efecto de rebote
      duration: 0.8,
      ease: "easeOut",
      damping: 20, // Suaviza el rebote

      // delay: index * 0.2, // Aparece en secuencia
    },
  },
};

const fadeRightLeftBounce = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring", // Efecto de rebote
      stiffness: 300, // Fuerza del rebote
      damping: 20, // Suaviza el rebote
      duration: 0.6, // Duración total de la animación
    },
  },
};

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section
      className="pt-28 sm:pt-0 flex flex-col sm:flex-row lg:h-svh items-center gap-2 sm:justify-between text-white relative "
      id="inicio"
    >
      {/* Texto */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="text sm:w-[60%] text-center xl:text-left flex flex-col items-center lg:block relative"
      >
        {/* Saludo */}
        <motion.div
          variants={fadeLeftRightBounce}
          className="flex flex-row  w-full sm:flex gap-2 mb-2 xl:mb-6"
          style={{ opacity: 1 }}
        >
          <p className="text-neutral-500 dark:text-white/60 text-xl sm:text-2xl mb-3 sm:mb-0 lg:text-3xl col-span-6 ">
            {t("hero.greeting")}
          </p>
          <div
            className="col-span-2"
            style={{ transformOrigin: "right bottom", transform: "none" }}
          >
            <img
              alt="hand-waving"
              loading="lazy"
              width={30}
              height={30}
              decoding="async"
              src={handShake}
              style={{ color: "transparent" }}
            />
          </div>
        </motion.div>

        {/* Título */}
        <motion.h1
          variants={fadeLeftRightBounce}
          className="text-[32px] smm:text-[40px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold text-gray-600 dark:text-white/60"
        >
          <span className="">{t("hero.introduction")} </span>
          <span
            className="inline-block text-transparent bg-gradient-to-br from-[#7CC0C4] via-[#427ba3] to-[#2a79c2] dark:from-[#7CC0C4] dark:via-[#427ba3] dark:to-[#2a79c2] bg-cover bg-clip-text drop-shadow-md dark:drop-shadow-lg"
            style={{ WebkitBackgroundClip: "text", backgroundColor: "#427ba3" }}
          >
            Alexander Ponte
          </span>
          <span className="block drop-shadow-md dark:drop-shadow-lg">
            {t("hero.developer")}
          </span>
        </motion.h1>

        {/* Subtexto */}
        <motion.p
          variants={fadeLeftRightBounce}
          className="text-neutral-400 dark:text-white/40 text-md sm:text-xl lg:text-2xl xl:text-2xl mt-3 sm:mt-6"
          style={{
            opacity: 1,
            transform: "translateY(0rem) translateZ(0px)",
          }}
        >
          {/* Who loves to build efficient and scalable systems. */}
          {t("hero.description")}
        </motion.p>

        <motion.div className="mt-5 lg:mt-10" variants={fadeLeftRightBounce2}>
          <div>
            <p
              className="mb-2.5 text-sm text-gray-400 dark:text-white/40"
              style={{ opacity: 1, transform: "none" }}
            >
              {t("hero.stack")}
            </p>
            <ul className="flex items-center gap-3.5 text-gray-500 dark:text-white/40">
              <li style={{ opacity: 1, transform: "none" }}>
                <a
                  href="https://www.javascript.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <JavaScriptIcon className="h-6 w-6 lg:h-8 lg:w-8" />
                </a>
              </li>
              <li style={{ opacity: 1, transform: "none" }}>
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <ReactIcon className="h-6 w-6 lg:h-8 lg:w-8" />
                </a>
              </li>
              <li
                style={{ opacity: 1, transform: "none" }}
                className="hidden lg:block"
              >
                <a
                  href="https://vuejs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <VueIcon className="h-6 w-6 lg:h-8 lg:w-8" />
                </a>
              </li>
              <li style={{ opacity: 1, transform: "none" }}>
                <a
                  href="https://astro.build"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <AstroIcon className="h-6 w-6 lg:h-8 lg:w-8" />
                </a>
              </li>
              <li style={{ opacity: 1, transform: "none" }}>
                <a
                  href="https://www.mysql.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <MySQLIcon className="h-6 w-6 lg:h-8 lg:w-8" />
                </a>
              </li>
              <li style={{ opacity: 1, transform: "none" }}>
                <a
                  href="https://nodejs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <NodeIcon className="h-6 w-6 lg:h-8 lg:w-8" />
                </a>
              </li>
              <li
                style={{ opacity: 1, transform: "none" }}
                className="hidden lg:block"
              >
                <a
                  href="https://www.php.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <PHPIcon className="h-6 w-6 lg:h-8 lg:w-8" />
                </a>
              </li>
              <li style={{ opacity: 1, transform: "none" }}>
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <TailwindIcon className="h-6 w-6 lg:h-8 lg:w-8" />
                </a>
              </li>
              <li style={{ opacity: 1, transform: "none" }}>
                <DividerIcon />
              </li>
              <li style={{ opacity: 1, transform: "none" }}>
                <a
                  href="https://git-scm.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <GitIcon className="h-6 w-6 lg:h-8 lg:w-8" />
                </a>
              </li>
              <li
                style={{ opacity: 1, transform: "none" }}
                className="hidden lg:block"
              >
                <a
                  href="https://www.postman.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <PostmanIcon className="h-6 w-6 lg:h-8 lg:w-8" />
                </a>
              </li>
              <li style={{ opacity: 1, transform: "none" }}>
                <a
                  href="https://www.notion.so"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <NotionIcon className="hover:text-[#494949] dark:hover:text-[#FFFFFF] transition duration-200" />
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>

      {/* Imagen */}
      <motion.div
        variants={fadeRightLeftBounce}
        initial="hidden"
        animate="show"
        className="flex items-center w-[310px] h-[380px] xl:w-[500px] xl:h-[580px] justify-center bg-transparent dark:bg-transparent"
      >
        <img
          alt="Men Programming"
          decoding="async"
          className="bg-image-radial xl:px-0 xl:pt-10 h-full w-full dark:brightness-90"
          src={Principal}
          // src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzZnajZocnVuMTBucGNoaTlwazVrMzdxMXZ6ODlsZXJmZHM3M3dmbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/78XCFBGOlS6keY1Bil/giphy.gif"
          // src="https://al3xander-pr.github.io/assets/img/ALP.png"
          style={{ color: "transparent", objectFit: "cover" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
