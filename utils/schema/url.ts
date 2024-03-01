import { z } from "zod";

export const ZUrlResponseSchema = z.object({
  result_url: z.string(),
});
export const ZUrlFormSchema = z.object({
  url: z.string().min(1, "Please add a link").url("Enter a valid link"),
});
