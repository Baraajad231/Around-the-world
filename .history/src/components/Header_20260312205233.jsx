import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwithcer";

const Header = () => {
  return (
    <header className="mb-6 bg-white shadow md:mb-12 dark:bg-gray-800">
      <div className="container mx-auto px-5 md:px-0">
        <div className="flexitems-center h-20 justify-between">
          <Logo />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
