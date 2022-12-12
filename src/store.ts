import { atom } from "nanostores";

let val = false;
if (typeof window !== "undefined" && document.documentElement.classList.contains("dark-mode")) {
  val = true;
}
export const isDarkMode = atom(val);
