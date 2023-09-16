"use client";

import Contact from "../components/Contact";
import Devider from "../components/Devider";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function Home() {
  // const [isLoading, setIsLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <>
      <main className="z-10">
        <div className="container  px-[20px] mx-auto overflow-x-hidden">
          <Hero />
          <Devider />
          <Projects />
          <Devider />
          <Contact />
        </div>
      </main>
    </>
  );
}
