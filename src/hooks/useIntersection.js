import { useEffect, useRef, useState } from "react";

export function useIntersection(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing (one-shot)
          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold || 0.2,
        rootMargin: options.rootMargin || "0px",
        ...options,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return { ref, isVisible };
}
