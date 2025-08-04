"use client";

import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const RichTextEditor = forwardRef(({ currentColor }, ref) => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  // This useEffect hook is now corrected
  useEffect(() => {
    // Exit early if the editor ref is not available
    if (editorRef.current === null) return;

    // --- FIX STARTS HERE ---
    // Prevent re-initializing Quill on the same element
    // This is the core of the fix for the double toolbar issue
    if (quillRef.current) {
      return;
    }
    // --- FIX ENDS HERE ---

    // Initialize Quill
    quillRef.current = new Quill(editorRef.current, {
      theme: "snow",
      modules: {
        toolbar: [
          [
            {
              header: [1, 2, 3, false],
            },
          ],
          ["bold", "italic", "underline", "strike"],
          [
            {
              list: "ordered",
            },
            {
              list: "bullet",
            },
          ],
          ["link", "image"],
          ["clean"],
        ],
      },
      placeholder: "Write something...",
    });
  }, []); // The empty dependency array is correct

  // Expose the getContent function to the parent component
  useImperativeHandle(ref, () => ({
    getContent: () => {
      if (quillRef.current) {
        return quillRef.current.root.innerHTML;
      }
      return "";
    },
    setContent: (content) => {
      quillRef.current.root.innerHTML = content;

      return quillRef.current.root.innerHTML;
    },
  }));
  console.log(currentColor.bgColor);
  return (
    <div
      ref={editorRef}
      className={` ${currentColor.bgColor} ${currentColor.text} grow  `}
    >
      {undefined}
    </div>
  );
});

RichTextEditor.displayName = "RichTextEditor";
export default RichTextEditor;
