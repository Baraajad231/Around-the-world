import Select from "react-select";
import classNames from "classnames";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const RegionMenu = () => {
  return (
    <Select
      options={options}
      classNames={{
        input: () => "dark:!text-gray-100",
        singleValue: () => "dark:text-gray-100",
      }}
    />
  );
};
export default RegionMenu;
