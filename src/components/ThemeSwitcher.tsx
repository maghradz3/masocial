"use client";

import { Button, Tooltip } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themeChangeHandler = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <Tooltip content="Change Theme" closeDelay={100}>
        <Button onClick={themeChangeHandler} isIconOnly variant="light">
          {theme === "dark" ? (
            <BsSunFill className="text-yellow-200 w-6 h-6 " />
          ) : (
            <BsMoonFill className="text-blue-400" />
          )}
        </Button>
      </Tooltip>
    </div>
  );
}
