import ModeToggle from "@/components/ModeToggle.tsx";
import { Link } from "react-router-dom";
import React from "react";

type HeaderProps = {
  children: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="max-w-[1200px] mx-auto flex justify-between items-center p-2 tracking-wider uppercase">
      <Link to="/">
        <h1 className="font-bold">
          Who's <span className="text-primary">There?</span>
        </h1>
      </Link>
      <div className="flex gap-4 items-center">
        {children}
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
