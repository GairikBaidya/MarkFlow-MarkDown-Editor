import { useState, useCallback, useMemo } from "react";
import { processMarkdown } from "../lib/markdownProcessor";

export function useMarkdown(initialValue = "") {
  const [raw, setRaw] = useState(initialValue);

  const html = useMemo(() => processMarkdown(raw), [raw]);

  const handleChange = useCallback((value) => {
    setRaw(value);
  }, []);

  return { raw, html, handleChange, setRaw };
}
