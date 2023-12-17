import { useEffect } from "react";

const useObserver = (
  ref: React.MutableRefObject<HTMLElement | null>,
  setId: React.Dispatch<React.SetStateAction<string>>,
  id: string
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setId(id);
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, id, setId]);
};

export default useObserver;
