"use client";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-emerald-500 text-emerald-700 rounded-full  w-9 h-9 flex items-center justify-center text-2xl md:w-12 md:h-12 md:text-4xl hover:text-emerald-200 transition-all duration-500"
        >
          <FaArrowAltCircleUp />
        </button>
      )}
    </div>
  );
}
