import { getLocalList, setLocalList } from "@/utils/local";
import { Url } from "@/utils/types/url";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
export type UrlSLice = {
  list: Url[];
  loading: boolean;
  addUrl: (x: Url) => void;
};
export const useUrlStore = create<UrlSLice>()(
  devtools((set) => ({
    list: getLocalList(),
    loading: false,
    addUrl: (x: Url) =>
      set((state) => {
        setLocalList(x);
        return { list: [...state.list, x] };
      }),
  }))
);
