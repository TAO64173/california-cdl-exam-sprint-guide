import { NextResponse } from "next/server";
import { grantAccess } from "@/lib/access";
import { isRateLimited } from "@/lib/rateLimit";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Resolves a customer's active entitlement and mints a short-lived signed URL.
// The client only ever sees the signed URL — never the PDF's storage path.
export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many attempts. Try again shortly." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const raw =
    typeof body === "object" && body !== null
      ? ((body as Record<string, unknown>).email as string | undefined)
      : undefined;
  const email = raw?.trim().toLowerCase() ?? "";

  const rawClientId =
    typeof body === "object" && body !== null
      ? ((body as Record<string, unknown>).client_id as string | undefined)
      : undefined;
  const clientId = rawClientId || undefined;

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  try {
    const result = await grantAccess(email, clientId);
    if ("error" in result) {
      return NextResponse.json({ error: result.error }, { status: result.status });
    }
    return NextResponse.json({ url: result.url });
  } catch (error) {
    console.error("[ACCESS_ERROR]", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : String(error) },
      { status: 500 },
    );
  }
}
