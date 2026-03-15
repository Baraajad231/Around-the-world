import { Link, useParams } from "react-router-dom";

const Country = () => {
  const params = useParams();
  return (
    <div>
      <Link
        className="mb-16 inline-block rounded-md bg-white p-3 md:mb-20"
        to="/"
      >
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="callMade">
            <path
              id="Shape"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.89267 3.53553L7.07118 4.71405L3.18209 8.60313L18.0313 8.60313L18.0313 10.253L3.18209 10.253L7.07118 14.1421L5.89267 15.3206L0.000111646 9.42809L5.89267 3.53553Z"
              fill="#111827"
            />
          </g>
        </svg>
      </Link>
      <div className="grid gap-11 lg:grid-cols-2 lg:gap-36">
        <img className="w-full" src="https://via.placeholder.com/240x240" />
        <div>
          <h1 className="mb-4 text-3xl font-extrabold lg:mb-7">Egypt</h1>
        </div>
      </div>
    </div>
  );
};
export default Country;
