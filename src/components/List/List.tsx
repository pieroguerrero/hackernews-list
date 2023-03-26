import { useState } from "react";
import { ListType } from "../../interfaces/ListTypes";
import Filters from "./components/Filters/Filters";
import FaveResults from "./components/Results/FaveResults";
import AllResults from "./components/Results/AllResults";
import {
  getDropdownSelection,
  saveDropdownSelection,
} from "../../services/local-storage-service/dropdownlist-local-storage-service";
import listStyles from "./List.module.css";

interface IList {
  listType: ListType;
}

/**
 *
 * Renders the main List of post results.
 */
export default function List({ listType }: IList) {
  const [framework, setFramework] = useState<string>(
    getDropdownSelection().framework
  );

  const handleFrameworkChange = (value: string) => {
    saveDropdownSelection(value);
    setFramework(value);
  };

  return (
    <div className={listStyles["list"]}>
      {listType === ListType.ALL ? (
        <>
          <Filters framework={framework} setFramework={handleFrameworkChange} />
          <AllResults framework={framework} />
        </>
      ) : listType === ListType.FAVOURITES ? (
        <FaveResults />
      ) : null}
    </div>
  );
}
