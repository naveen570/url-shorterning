import { getShoternUrl } from "@/utils/api";
import { ZUrlFormSchema } from "@/utils/schema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const parsedBody = ZUrlFormSchema.parse(await request.json());
    const result = await getShoternUrl(parsedBody.url);
    return new NextResponse(JSON.stringify(result), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error }), {
      status: 400,
    });
  }
}
