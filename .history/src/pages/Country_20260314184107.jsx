import { Link, useParams } from "react-router-dom";

const Country = () => {
  const params = useParams();
  return (
    <div>
      <Link
        className="mb-16 inline-block rounded-md bg-white p-3 md:mb-20"
        to="/"
      ></Link>
    </div>
  );
};
export default Country;
