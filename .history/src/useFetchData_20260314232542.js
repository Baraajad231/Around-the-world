import { useEffect, useRef, useState } from "react";

export const useFetchData = () => {
  const [countriesList, setCountriesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const countriesRef = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true);
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region",
    )
      .then((response) => response.json())
      .then((data) => {
        setCountriesList(data);
        countriesRef.current = data;
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    countriesList,
    setCountriesList,
    isLoading,
    isError,
    countriesRef,
  };
};
