import ConfigValues from "../../configs/ConfigValues";
import { FrameworkType } from "../../interfaces/Frameworks";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "./local-storage-generic";

interface IFrameworkValue {
  framework: string;
}

export function saveDropdownSelection(framework: string) {
  saveToLocalStorage<IFrameworkValue>(ConfigValues.LocalStorageFrameworkId, {
    framework,
  });
  return true;
}

export function getDropdownSelection() {
  const result = getFromLocalStorage<IFrameworkValue>(
    ConfigValues.LocalStorageFrameworkId
  );

  if ("framework" in result) return result;

  return { framework: "" };
}
