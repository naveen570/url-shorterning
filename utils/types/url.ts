import { z } from "zod";
import { ZUrlSchema } from "../schema";

export type UrlResponse = z.infer<typeof ZUrlSchema>;
