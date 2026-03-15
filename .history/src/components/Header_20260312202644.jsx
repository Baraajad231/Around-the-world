import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwithcer";

const Header = () => {
  return (
    <header className=" mb-6 bg-white shadow dark:bg-gray-800">
      <div className="container mx-auto px-5 md:px-0">
        <div className="felx h-20 items-center justify-between">
          <Logo />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};
