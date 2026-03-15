import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import RegionMenu from "./components/RegionMenu";

function App() {
  return (
    <div className="font-inter  dark:text-gray-100 ">
      <Header />
      <div className="flex flex-col justify-between gap-10 md:h-14 md:">
        <SearchInput />
        <RegionMenu />
      </div>
    </div>
  );
}

export default App;
