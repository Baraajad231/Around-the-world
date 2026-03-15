import { parse } from "postcss";
import { useEffect, useRef, useState } from "react";

export const useFetchData = (country) => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const countriesRef = useRef(null);

  const fetchDataFromAPI = () => {
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
          localStorage.setItem("countries", JSON.stringify(data));
        }
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  const fetchDataFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("countries"));
    if (data) {
      setResult(data);
      countriesRef.current = data;
    } else {
      fetchDataFromAPI();
    }
  };
  useEffect(() => {
    if (country) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      fetchDataFromAPI();
    } else {
      fetchDataFromLocalStorage();
    }
  }, []);
  return {
    result,
    setResult,
    isLoading,
    isError,
    countriesRef,
  };
};
