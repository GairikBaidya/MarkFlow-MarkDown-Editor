import { useEffect, useRef } from "react";

const AUTOSAVE_KEY = "markflow_content";
const DEBOUNCE_MS = 1000;

export function useAutosave(content) {
  const timerRef = useRef(null);

  useEffect(() => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      try {
        localStorage.setItem(AUTOSAVE_KEY, content);
      } catch (e) {
        console.warn("Autosave failed — localStorage quota exceeded");
      }
    }, DEBOUNCE_MS);

    return () => clearTimeout(timerRef.current);
  }, [content]);
}

export function loadSaved() {
  try {
    return localStorage.getItem(AUTOSAVE_KEY) || "";
  } catch {
    return "";
  }
}
