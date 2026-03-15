import { useEffect, useRef, useState } from "react";
import SearchInput from "./components/SearchInput";
import RegionMenu from "./components/RegionMenu";
import CountryList from "./components/CountryList";
import ShowMessage from "./components/ShowMessage";
const Home = () => {
  const [countriesList, setCountriesList] = useState([]);
  // const [filteredCountries, setFilteredCountries] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const countriesRef = useRef(null);

  const fetchCountries = () => {
    setIsLoading("true");
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region",
    )
      .then((response) => response.json())
      .then((data) => {
        setCountriesList(data);
        // setFilteredCountries(data);
        countriesRef.current = data;
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchCountries();
  }, []);
  return (
    <>
      {isError && <ShowMessage message={"Something went wrong!"} />}
      {isLoading && <ShowMessage message={"Loading countries data...!"} />}
      {!isError && !isLoading && (
        <>
          <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
            <SearchInput
              // countriesList={countriesList}
              filteredCountriesList={setCountriesList}
              dataRef={countriesRef}
            />
            <RegionMenu
              // countriesList={countriesList}
              filteredCountriesList={setCountriesList}
              dataRef={countriesRef}
            />
          </div>
          <CountryList data={countriesList} />
        </>
      )}
    </>
  );
};
export default Home;
