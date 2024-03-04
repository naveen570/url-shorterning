import { z } from "zod";
import { ZUrlResponseSchema, ZUrlFormSchema, ZUrl } from "../schema";

export type UrlResponse = z.infer<typeof ZUrlResponseSchema>;
export type UrlForm = z.infer<typeof ZUrlFormSchema>;
export type Url = z.infer<typeof ZUrl>;
