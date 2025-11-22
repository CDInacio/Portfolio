"use client";

import React, { useEffect, useState } from "react";

import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Stack } from "../components/Stack";
import { Works } from "../components/Works";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Check system preference or local storage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white font-sans selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-900 transition-colors duration-300">
      <div className="max-w-screen-3xl mx-auto border-x border-neutral-200 dark:border-neutral-800 shadow-[0_0_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-none">
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Works />
          <Stack />
        </main>
        <Contact />
      </div>
    </div>
  );
}
