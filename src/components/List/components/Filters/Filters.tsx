import Dropdownlist from "./Dropdownlist/Dropdownlist";

interface IFilters {
  framework: string;
  setFramework: (framework: string) => void;
}
/**
 *
 * Renders all the filters that control the Results
 */
export default function Filters({ framework, setFramework }: IFilters) {
  return <Dropdownlist framework={framework} setFramework={setFramework} />;
}
