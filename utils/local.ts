import { ZUrl } from "./schema";
import { Url } from "./types";

export const getLocalList = () => {
  if (typeof window == "undefined") return [];
  const localList = localStorage.getItem("urlList");
  if (localList) {
    const data = JSON.parse(localList);
    const parsedData = ZUrl.array().parse(data);
    return parsedData;
  }
  return [];
};
export const setLocalList = (data: Url) => {
  if (typeof window == "undefined") return;
  const localList = localStorage.getItem("urlList");
  if (localList) {
    const list = ZUrl.array().parse(JSON.parse(localList));
    list.push(data);
    localStorage.setItem("urlList", JSON.stringify(list));
  } else {
    localStorage.setItem("urlList", JSON.stringify([data]));
  }
};
