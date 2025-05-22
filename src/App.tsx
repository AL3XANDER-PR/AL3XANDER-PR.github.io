import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import { ThemeProvider } from "./context/ThemeContext";
import { useTheme } from "./context/ThemeContext";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import Services from "./components/Services";
// import Contact from "./components/Contact";
import About from "./components/About";

// Componente para el fondo adaptable
const Background = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`absolute bottom-0 left-0 right-0 top-0 h-screen ${
        theme === "dark"
          ? "bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:8px_14px] sm:bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
          : "bg-[linear-gradient(to_right,#4f4f4f26_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f26_1px,transparent_1px)] bg-[size:8px_14px] sm:bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      }`}
    />
  );
};

// Componente principal de la aplicación
function AppContent() {
  return (
    // <div className="relative w-full min-h-screen bg-neutral-100  dark:bg-[#0c1222] ">
    <div className="relative w-full min-h-screen bg-neutral-100  dark:bg-gray-950">
      <Background />
      <Header />
      <main className="overflow-x-hidden sm:overflow-x-visible max-w-7xl mx-auto px-5 py-3 flex flex-col justify-be gap-10">
        <Hero />
        <Experience />
        <Projects />
        <Skills />

        {/* <Services /> */}
        <About />
        {/* <Contact /> */}
        <Footer />
      </main>
    </div>
  );
}

// Componente principal con el proveedor de tema
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
