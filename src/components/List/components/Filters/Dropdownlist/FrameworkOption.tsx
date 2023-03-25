import optionsStyles from "./FrameworkOption.module.css";
interface IFrameworkOption {
  value: string;
  imgSrc: string;
  title: string;
  handleSelection: (selection: string) => void;
}
export default function FrameworkOption({
  value,
  imgSrc,
  title,
  handleSelection,
}: IFrameworkOption) {
  return (
    <button
      className={optionsStyles["option"]}
      onClick={handleSelection.bind(null, value)}
    >
      <img src={imgSrc} />
      <span>{title}</span>
    </button>
  );
}
