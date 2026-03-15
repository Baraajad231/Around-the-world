import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import RegionMenu from "./components/RegionMenu";
import CountryCard from "./components/CountryCard";

function App() {
  return (
    <div className="font-inter  bg-gray-100 min-h-screen w-screen dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <div className="container mx-auto px-5 md:px-0">
        <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
          <SearchInput />
          <RegionMenu />
        </div>
        <div>
          <CountryCard />
          <CountryCard />
          <CountryCard />
        </div>
      </div>
    </div>
  );
}

export default App;
