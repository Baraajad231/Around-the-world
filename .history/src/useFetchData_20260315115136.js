import { useEffect, useRef, useState } from "react";

export const useFetchData = (country) => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const countriesRef = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true);

    let url =
      "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region";

    if (country) {
      url = `https://restcountries.com/v3.1/name/${country}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (country) {
          setResult(data[0]);
        } else {
          setResult(data);
          countriesRef.current = data;
        }
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  const fetchDataFromLocalStorage = () => {
    const data = localStorage.getItem("countries");
  };

  return {
    result,
    setResult,
    isLoading,
    isError,
    countriesRef,
  };
};
