"use client"; // Required for client-side features like dynamic imports and hooks

import Colors from "@/app/_components/Colors";
import Loading from "@/app/loading";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";

// 1. Dynamically import the RichTextEditor with SSR turned off
const RichTextEditor = dynamic(
  () => import("@/app/_components/RichTextEditor"),
  {
    ssr: false,
    loading: () => <Loading />, // Optional: Show a loading state
  }
);

function Page() {
  // 2. Create a ref to access the editor's methods
  const editorRef = useRef(null);

  const [color, setColor] = useState("emerald");

  const colorVariants = {
    cyan: {
      bgColor: "bg-cyan-700",
      text: "text-cyan-50",
      parentBgColor: "bg-cyan-100",
    },
    emerald: {
      bgColor: "bg-emerald-700",
      text: "text-emerald-50",
      parentBgColor: "bg-emerald-100",
    },
    indigo: {
      bgColor: "bg-indigo-700",
      text: "text-indigo-50",
      parentBgColor: "bg-indigo-100",
    },
  };
  const currentColor = colorVariants[color];

  const handleShowContent = () => {
    // Check if the editor's ref is available
    if (editorRef.current) {
      editorRef.current.setContent();
      const content = editorRef.current.getContent();
      console.log("Editor Content:", content);
      alert("Check the console for the editor content!");
    }
  };

  return (
    <div
      className={`${currentColor.parentBgColor}   grow flex flex-col relative`}
    >
      {/* 3. Render the dynamically imported editor and pass the ref */}
      <Colors setColor={setColor} />
      <RichTextEditor currentColor={currentColor} ref={editorRef} />
      {/* <button onClick={handleShowContent}>sad</button> */}
    </div>
  );
}

export default Page;
