import { useEffect, useState } from "react";

export default function useHeight() {
  const [pageHeight, setPageHeight] = useState<number>(0);

  useEffect(() => {
    const updatePageHeight = () => {
      setPageHeight(window.scrollY);
    };
    window.addEventListener("scroll", updatePageHeight);
    return () => {
      window.removeEventListener("scroll", updatePageHeight);
    };
  }, [pageHeight]);

  return { pageHeight };
}
