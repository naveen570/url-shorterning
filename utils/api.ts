import axios from "axios";
import { ZUrlResponseSchema } from "./schema";
import { UrlResponse } from "./types";

export const getShoternUrl = async (url: string): Promise<UrlResponse> => {
  const formData = new FormData();
  formData.append("url", url);
  const { data } = await axios.post<UrlResponse>(
    "https://cleanuri.com/api/v1/shorten",
    formData
  );
  const parsedData = ZUrlResponseSchema.parse(data);
  return parsedData;
};
