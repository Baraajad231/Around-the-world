import { use, useRef, useState } from "react";

export const useFetchData = () => {
  const [countriesList, setCountriesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const countriesRef = useRef(null);

  useEffect(() => {}, []);
};
