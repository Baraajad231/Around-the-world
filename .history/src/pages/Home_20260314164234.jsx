const Home = () => {
  return (
    <>
      {" "}
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
