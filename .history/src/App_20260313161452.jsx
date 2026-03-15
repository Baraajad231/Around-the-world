import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import RegionMenu from "./components/RegionMenu";
import CountryList from "./components/CountryList";
import { useEffect, useState } from "react";

function App() {
  const [contriesList, setCountriesList] = useState([]);

  const fetchCountries = () => {
    fetch("https://restcountries.com/v3.1/lang/English")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCountriesList(data);
        console.log(CountryList);
      });
  };
  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="font-inter  bg-gray-100 min-h-screen w-screen dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <div className="container mx-auto px-5 md:px-0">
        <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
          <SearchInput />
          <RegionMenu />
        </div>
        <CountryList data={contriesList} />
      </div>
    </div>
  );
}

export default App;
