import { useTheme } from "@/components/ThemeProvider.tsx";
import ModeToggle from "@/components/ModeToggle.tsx";
import { Link } from "react-router-dom";
import React from "react";

type HeaderProps = {
  children: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <header className="max-w-[1200px] mx-auto flex justify-between items-center p-2 tracking-wider uppercase">
      <Link to="/">
        {theme === "dark" ? (
          <img src="/logo-dark-mode.png" alt="logo" className="h-10" />
        ) : (
          <img src="/logo-light-mode.png" alt="logo" className="h-10" />
        )}
      </Link>
      <div className="flex gap-4 items-center">
        {children}
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
