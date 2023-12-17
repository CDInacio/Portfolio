import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/navigation/Navbar";
import Projects from "../components/projects/Projects";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <main className="bg-bgDark">
        <Navbar />
        <Header id="Inicio" />
        <About id="Sobre" />
        <Projects id="Projetos" />
        <Contact id="Contato" />
        <Footer />
      </main>
    </div>
  );
}
