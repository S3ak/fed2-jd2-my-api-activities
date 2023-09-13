import { NextResponse } from "next/server";
import { fakeUsers } from "@/lib/mock-data";

export async function GET(request) {
  return NextResponse.json(
    { data: fakeUsers, count: fakeUsers.length },
    { status: 200 }
  );
}
