import { motion } from "framer-motion";

const Contact = () => {
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
            Contacto
          </h2>
          <div className="h-[1px] flex-grow bg-gray-300 dark:bg-slate-800"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          >
            <p className="text-gray-700 dark:text-slate-300 mb-6 text-center">
              ¿Estás interesado en trabajar juntos? ¡No dudes en contactarme!
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a
                href="mailto:tu.email@ejemplo.com"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center"
              >
                Enviar Email
              </a>
              <a
                href="https://linkedin.com/in/tu-perfil"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium py-3 px-6 rounded-lg transition-colors text-center"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
