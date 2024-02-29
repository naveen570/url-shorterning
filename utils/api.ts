import { ZUrlSchema } from "./schema";
import { UrlResponse } from "./types";

export const getShoternUrl = async (url: string): Promise<UrlResponse> => {
  const formData = new FormData();
  formData.append("url", url);
  const response = await fetch("https://cleanuri.com/api/v1/shorten", {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  const parsedData = ZUrlSchema.parse(data);
  return parsedData;
};
