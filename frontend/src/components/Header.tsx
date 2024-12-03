import { useTheme } from "@/components/ThemeProvider.tsx";
import ModeToggle from "@/components/ModeToggle.tsx";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className="flex justify-between items-center p-2">
      <Link to="/">
        {theme === "dark" ? (
          <img src="/logo-dark-mode.png" alt="logo" className="h-10" />
        ) : (
          <img src="/logo-light-mode.png" alt="logo" className="h-10" />
        )}
      </Link>
      <div>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
