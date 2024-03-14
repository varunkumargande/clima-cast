"use client";
import Image from "next/image";
import Button from "../button";
import { useTheme } from "@/app/context/ThemeContext";
import Light from "@/svgs/Light";
import Dark from "@/svgs/Dark";

const Header = () => {
  // const [isDarkMode, setDarkMode] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const Company = "Clima Cast";

  const ToggleButton = () => {
    return (
      <Button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleTheme();
        }}
        theme={theme === "dark"}
        aria-hidden="true"
      >
        {theme === "dark" ? (
          <Light className="h-6 w-6 text-sky-50" aria-hidden="true" />
        ) : (
          <Dark className="h-6 w-6" aria-hidden="true" />
        )}
      </Button>
    );
  };

  return (
    <>
      <header>
        <nav
          className="fixed top-0 left-0 right-0 mx-auto flex max-w-screen-2xl items-center justify-between py-6 lg:px-4 z-50 light-nav dark:dark-nav"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 px-3">
            <span className="sr-only">{Company}</span>
            <Image
              width={120}
              height={120}
              src="/logo-with-text.png"
              alt={Company}
              className="filter dark:invert"
            />
          </div>
          <div className="flex">{ToggleButton()}</div>
        </nav>
      </header>
    </>
  );
};

export default Header;
