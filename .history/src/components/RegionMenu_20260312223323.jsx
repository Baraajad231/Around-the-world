import Select from "react-select";
npm install classnames

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const RegionMenu = () => {
  return <Select options={options} classNames={{}} class />;
};
export default RegionMenu;
