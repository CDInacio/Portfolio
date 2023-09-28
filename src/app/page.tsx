"use client";

import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";

export default function Home() {
  // const [isLoading, setIsLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <>
      <main className="z-10  overflow-x-hidden">
        <Hero />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
