import { useParams } from "react-router-dom";

const Country = () => {
  const params = useParams();
  return <p>{params.country}</p>;
};
export default Country;
