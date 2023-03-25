import { useState } from "react";
import pngAngular from "../../../../../assets/list/filters/image-138.png";
import pngReact from "../../../../../assets/list/filters/image-140.png";
import pngVue from "../../../../../assets/list/filters/image-141.png";
import { FrameworkType } from "../../../../../interfaces/Frameworks";
import dropdlStyles from "./Dropdownlist.module.css";
import FrameworkOption from "./FrameworkOption";

interface IDropdownlist {
  framework: string;
  setFramework: (framework: string) => void;
}

const valuesList: { [key: string]: { img: string; name: string } } = {
  [FrameworkType.ANGULAR]: { img: pngAngular, name: "Angular.js" },
  [FrameworkType.REACTJS]: { img: pngReact, name: "Reac.js" },
  [FrameworkType.VUE]: { img: pngVue, name: "Vue.js" },
};
export default function Dropdownlist({
  framework,
  setFramework,
}: IDropdownlist) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelection = (selection: string) => {
    setFramework(selection);
    setIsOpen(false);
  };

  return (
    <span className={dropdlStyles["div-dropdownlist"]}>
      <button
        onClick={handleClickOpen}
        className={dropdlStyles["button-select"]}
      >
        <img src={valuesList[framework].img} />
        <span>{valuesList[framework].name}</span>
      </button>
      {isOpen ? (
        <div className={dropdlStyles["div-options"]}>
          <FrameworkOption
            value={FrameworkType.ANGULAR}
            handleSelection={handleSelection.bind(null, FrameworkType.ANGULAR)}
            imgSrc={valuesList[FrameworkType.ANGULAR].img}
            title={valuesList[FrameworkType.ANGULAR].name}
          />
          <FrameworkOption
            value={FrameworkType.REACTJS}
            handleSelection={handleSelection.bind(null, FrameworkType.REACTJS)}
            imgSrc={valuesList[FrameworkType.REACTJS].img}
            title={valuesList[FrameworkType.REACTJS].name}
          />
          <FrameworkOption
            value={FrameworkType.VUE}
            handleSelection={handleSelection.bind(null, FrameworkType.VUE)}
            imgSrc={valuesList[FrameworkType.VUE].img}
            title={valuesList[FrameworkType.VUE].name}
          />
        </div>
      ) : null}
    </span>
  );
}
