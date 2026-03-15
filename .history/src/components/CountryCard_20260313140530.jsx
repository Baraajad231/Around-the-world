const CountryCard = () => {
  return (
    <a>
      <div className="h-full rounded bg-gray-50 p-3 pb-9 shadow-md lg:w-66 dark:bg-gray-800">
        <img
          className="mb-4 h-40 w-full rounded-md"
          src="via.placeholder.com/240"
          alt="placeholder"
          loading="lazy"
        />
        <h2 className="mb-4 ml-3 text-lg font-extrabold">Egypt</h2>
      </div>
    </a>
  );
};
export default CountryCard;
