import SearchInput from "../components/SearchInput";
import RegionMenu from "../components/RegionMenu";
import CountryList from "../components/CountryList";
import ShowMessage from "../components/ShowMessage";
import { useFetchData } from "../useFetchData";
const Home = () => {
  const { result, setResult, isLoading, isError, countriesRef } =
    useFetchData();
  return (
    <>
      {isError && <ShowMessage message={"Something went wrong!"} />}
      {isLoading && <ShowMessage message={"Loading countries data...!"} />}
      {!isError && !isLoading && (
        <>
          <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
            <SearchInput
              // countriesList={countriesList}
              filteredCountriesList={setResult}
              dataRef={countriesRef}
            />
            <RegionMenu
              // countriesList={countriesList}
              filteredCountriesList={setResult}
              dataRef={countriesRef}
            />
          </div>
          <CountryList data={result} />
        </>
      )}
    </>
  );
};
export default Home;
