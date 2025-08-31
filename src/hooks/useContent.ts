import content from "../data/content.json";
import { Content } from "../data/types";

export const useContent = () => {
  return content;
};

export const useSection = (section: keyof typeof content) => {
  return content[section] as Content[typeof section];
};
