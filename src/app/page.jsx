import About from "@/components/About/About";
import Footer from "@/components/Footer/Index";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Stacks from "@/components/Stacks/Stacks";

export default function Home() {
  return (
    <div className=" overflow-hidden  bg-background">
      <Hero />
      <About />
      <Stacks />
      <Projects />
      <Footer />
    </div>
  );
}
