import { z } from "zod";

export const ZUrlSchema = z.object({
  result_url: z.string(),
});
