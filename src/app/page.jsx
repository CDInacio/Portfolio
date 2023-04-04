import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Stacks from "../components/Stacks/Stacks";
import Projects from "../components/Projects/Projects";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Stacks />
      <Projects />
    </div>
  );
}
