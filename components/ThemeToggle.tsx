"use client";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800">
      {theme === "dark" ? 
      <IconSun className="w-4 h-4" />
      :
      <IconMoon className="w-4 h-4" />
      }
    </button>
  );
}
