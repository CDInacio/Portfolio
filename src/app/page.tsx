"use client";

import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Devider from "../components/ui/Devider";

export default function Home() {
  // const [isLoading, setIsLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <>
      <main className="z-10 mb-[50px]">
        <div className="container  px-[20px] mx-auto overflow-x-hidden mb-[100px] sm:mb-0">
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
