import { useParams } from "react-router-dom";

const Country = () => {
  const params = useParams();
  return params.country;
};
export default Country;
