"use client";
import { useEffect, useState } from "react";

export const ScrollToggle = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (isScrolled) {
      document.body.classList.add("body--scrolled");
    } else {
      document.body.classList.remove("body--scrolled");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return null;
};
