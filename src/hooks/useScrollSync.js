import { useRef, useCallback } from "react";

export function useScrollSync() {
  const editorRef = useRef(null);
  const previewRef = useRef(null);
  const isSyncing = useRef(false);

  const syncFromEditor = useCallback(() => {
    if (isSyncing.current || !editorRef.current || !previewRef.current) return;
    isSyncing.current = true;

    const { scrollTop, scrollHeight, clientHeight } = editorRef.current;
    const maxScroll = scrollHeight - clientHeight;
    if (maxScroll <= 0) {
      isSyncing.current = false;
      return;
    }
    const scrollRatio = scrollTop / maxScroll;

    const preview = previewRef.current;
    const previewMax = preview.scrollHeight - preview.clientHeight;
    preview.scrollTop = scrollRatio * previewMax;

    requestAnimationFrame(() => {
      isSyncing.current = false;
    });
  }, []);

  const syncFromPreview = useCallback(() => {
    if (isSyncing.current || !editorRef.current || !previewRef.current) return;
    isSyncing.current = true;

    const { scrollTop, scrollHeight, clientHeight } = previewRef.current;
    const maxScroll = scrollHeight - clientHeight;
    if (maxScroll <= 0) {
      isSyncing.current = false;
      return;
    }
    const scrollRatio = scrollTop / maxScroll;

    const editor = editorRef.current;
    const editorMax = editor.scrollHeight - editor.clientHeight;
    editor.scrollTop = scrollRatio * editorMax;

    requestAnimationFrame(() => {
      isSyncing.current = false;
    });
  }, []);

  return { editorRef, previewRef, syncFromEditor, syncFromPreview };
}
