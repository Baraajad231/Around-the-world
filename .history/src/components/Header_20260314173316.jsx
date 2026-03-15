import { Link } from "react-router-dom";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwithcer";

const Header = () => {
  return (
    <header className="mb-6 bg-white shadow md:mb-12 dark:bg-gray-800">
      <div className="container mx-auto px-5 md:px-0">
        <Link className="flex h-20 items-center justify-between">
          <Logo />
          <ThemeSwitcher />
        </Link>
      </div>
    </header>
  );
};

export default Header;
