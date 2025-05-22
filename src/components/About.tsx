import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="py-16" id="contacto">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-[#3f91ee] font-bold text-lg">03.</span>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-700 dark:text-slate-200">
            {t("about.title")}
          </h2>
          <div className="h-[1px] flex-grow bg-gray-300 dark:bg-slate-800"></div>
        </motion.div>

        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="dark:text-gray-300 text-gray-900"
          >
            <div className="flex flex-col md:flex-row  mb-8  gap-5 md:gap-20">
              <img
                src="https://al3xander-pr.github.io/assets/img/ALP.png"
                alt="Imagen de Alexander Ponte"
                className="h-90 w-90 rounded border-4 border-blue-600 dark:border-slate-800 shadow-lg"
              />

              <div className="flex  flex-col gap-10">
                <div>
                  <h3 className="text-3xl font-bold mb-0 ">
                    Alexander Ponte Reynaldo
                  </h3>
                  <p className=" mb-6 text-blue-500">{t("about.subtitle")}</p>
                  <p className="text-gray-800 dark:text-slate-300 mb-6">
                    {t("about.description")}
                  </p>
                </div>

                <div className="flex flex-row  gap-6  justify-center md:justify-start">
                  <a
                    href="mailto:tu.email@ejemplo.com"
                    className="border border-blue-500 hover:bg-blue-700 dark:text-whit font-medium py-3 px-6 rounded-lg transition-colors text-center"
                  >
                    resumen
                  </a>
                  <a
                    href="https://linkedin.com/in/tu-perfil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-blue-500 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium py-3 px-6 rounded-lg transition-colors text-center"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
