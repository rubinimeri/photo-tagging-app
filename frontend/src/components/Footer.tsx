import { useTheme } from "@/components/ThemeProvider.js";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="max-w-[1200px] mx-auto flex justify-between items-center p-2">
      <Link to="/">
        {theme === "dark" ? (
          <img src="/logo-dark-mode.png" alt="logo" className="h-10" />
        ) : (
          <img src="/logo-light-mode.png" alt="logo" className="h-10" />
        )}
      </Link>
      <div className="flex items-center gap-2">
        <a href="https://github.com/rubinimeri" target="_blank">
          <Github width={16} height={16} />
        </a>
        <p className="font-light text-gray-500">© 2024 Rubin Imeri</p>
      </div>
    </footer>
  );
};

export default Footer;
