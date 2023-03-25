import { useState } from "react";
import { FrameworkType } from "../../interfaces/Frameworks";
import { ListType } from "../../interfaces/ListTypes";
import Filters from "./components/Filters/Filters";
import FaveResults from "./components/Results/FaveResults";
import AllResults from "./components/Results/AllResults";

interface IList {
  listType: ListType;
}

/**
 *
 * Renders the main List of post results.
 */
export default function List({ listType }: IList) {
  const [framework, setFramework] = useState<string>(FrameworkType.ANGULAR);
  return (
    <div>
      {listType === ListType.ALL ? (
        <>
          <Filters framework={framework} setFramework={setFramework} />
          <AllResults framework={framework} />
        </>
      ) : listType === ListType.FAVOURITES ? (
        <FaveResults />
      ) : null}
    </div>
  );
}
