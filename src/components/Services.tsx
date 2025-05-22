import { motion } from "framer-motion";
import { FaCode, FaMobile, FaServer, FaDatabase } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-4xl text-blue-500" />,
    title: "Desarrollo Frontend",
    description:
      "Creación de interfaces de usuario modernas y responsivas utilizando las últimas tecnologías como React, Vue o Angular.",
  },
  {
    icon: <FaServer className="text-4xl text-blue-500" />,
    title: "Desarrollo Backend",
    description:
      "Implementación de APIs robustas y escalables con Node.js, Express, Django o Laravel para potenciar tus aplicaciones.",
  },
  {
    icon: <FaMobile className="text-4xl text-blue-500" />,
    title: "Desarrollo Móvil",
    description:
      "Desarrollo de aplicaciones móviles multiplataforma utilizando React Native, Flutter o tecnologías nativas.",
  },
  {
    icon: <FaDatabase className="text-4xl text-blue-500" />,
    title: "Bases de Datos",
    description:
      "Diseño e implementación de bases de datos eficientes con MySQL, PostgreSQL, MongoDB o Firebase.",
  },
];

const Services = () => {
  return (
    <section className="py-16" id="servicios">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-[#3f91ee] font-bold text-lg">04.</span>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-700 dark:text-slate-200">
            Servicios
          </h2>
          <div className="h-[1px] flex-grow bg-gray-300 dark:bg-slate-800"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
