import { useEffect, useState } from "react";

const useSize = () => {
  const [windowInfo, setWindowInfo] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const updateWindowInfo = () => {
      setWindowInfo({
        width: window.innerWidth,
        height: window.scrollY,
      });
    };

    window.addEventListener("resize", updateWindowInfo);
    window.addEventListener("scroll", updateWindowInfo);

    return () => {
      window.removeEventListener("resize", updateWindowInfo);
      window.removeEventListener("scroll", updateWindowInfo);
    };
  }, []);

  return windowInfo;
};

export default useSize;
