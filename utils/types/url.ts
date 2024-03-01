import { z } from "zod";
import { ZUrlResponseSchema, ZUrlFormSchema } from "../schema";

export type UrlResponse = z.infer<typeof ZUrlResponseSchema>;
export type UrlForm = z.infer<typeof ZUrlFormSchema>;
