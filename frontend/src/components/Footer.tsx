import { Link } from "react-router-dom";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="max-w-[1200px] mx-auto flex justify-between items-center p-2">
      <Link to="/">
        <h1 className="font-bold tracking-wider uppercase">
          Who's <span className="text-primary">There?</span>
        </h1>
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
