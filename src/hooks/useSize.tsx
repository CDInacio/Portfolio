import { useEffect, useState } from "react";

interface WindowInfo {
  width: number | undefined;
  height: number | undefined;
}
const useSize = () => {
  const [windowInfo, setWindowInfo] = useState<WindowInfo>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Ensure window object is available
    if (typeof window !== "undefined") {
      const updateWindowInfo = () => {
        setWindowInfo({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", updateWindowInfo);
      window.addEventListener("scroll", updateWindowInfo);

      updateWindowInfo();

      return () => {
        window.removeEventListener("resize", updateWindowInfo);
        window.removeEventListener("scroll", updateWindowInfo);
      };
    }
  }, []);

  return windowInfo;
};

export default useSize;
