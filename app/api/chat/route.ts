import { NextResponse } from "next/server";

type ChatRequest = {
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ChatRequest;
  const message = body.message?.trim();

  if (!message) {
    return NextResponse.json(
      { error: "A message is required." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    reply: `The server received: "${message}"`,
  });
}