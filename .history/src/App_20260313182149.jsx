import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import RegionMenu from "./components/RegionMenu";
import CountryList from "./components/CountryList";
import { useEffect, useState } from "react";
import ShowMessage from "./components/ShowMessage";

function App() {
  const [contriesList, setCountriesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchCountries = () => {
    setIsLoading("true");
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region",
    )
      .then((response) => response.json())
      .then((data) => {
        setCountriesList(data);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchCountries();
  }, []);

  return (
    <div className="font-inter min-h-screen w-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <div className="container mx-auto px-5 md:px-0">
        {isError && <ShowMessage message={"Something went wrong!"} />}
        {isLoading && <ShowMessage message={"Loading countries data...!"} />}
        {!isError && !isLoading && (
          <>
            <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
              <SearchInput />
              <RegionMenu />
            </div>
            <CountryList data={contriesList} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
