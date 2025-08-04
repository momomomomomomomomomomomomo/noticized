"use client";

import { useLayoutEffect } from "react";

// A more robust and reusable hook for locking body scroll
function useLockBodyScroll(isLocked = false) {
  useLayoutEffect(() => {
    if (!isLocked) {
      return;
    }

    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;

    // Get scrollbar width
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    // Prevent scrolling on mount
    document.body.style.overflow = "hidden";

    // Add padding to prevent layout shift
    document.body.style.paddingRight = `${scrollBarWidth}px`;

    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
      document.body.style.paddingRight = "0px";
    };
  }, [isLocked]); // Only re-run effect if isLocked changes
}

export default useLockBodyScroll;
