import { mkdir, appendFile } from "node:fs/promises";
import { join } from "node:path";

import { NextResponse } from "next/server";

import { referralSchema } from "@/lib/referral-schema";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const parsed = referralSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Please correct the highlighted fields and try again.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const submissionsDir = join(process.cwd(), "data");
  const line = `${JSON.stringify({
    ...parsed.data,
    receivedAt: new Date().toISOString(),
  })}\n`;

  await mkdir(submissionsDir, { recursive: true });
  await appendFile(join(submissionsDir, "referrals.ndjson"), line, "utf8");

  return NextResponse.json({
    success: true,
    message: "Referral submitted. The Livora intake team can now review the information provided.",
  });
}
