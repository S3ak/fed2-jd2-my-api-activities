import { NextResponse } from "next/server";
import postJSON from "./mockPosts.json";
import supabase from "../../lib/supabase";

/**
 *
 * @param {object} _request The request object recieved from the client
 * @returns a List of mocked posts
 */
export async function GET(_request) {
  return NextResponse.json(
    { posts: postJSON.posts, total: 150, skip: 0, limit: 30 },
    { status: 200 }
  );
}

// export async function HEAD(_request) {}

export async function POST(request) {
  try {
    const res = await request.json();

    const { data, error } = await supabase
      .from("posts")
      .insert({
        id: crypto.randomUUID(),
        name: res.name,
        title: "His mother had always taught him",
        body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
        userId: 9,
        tags: ["history", "american", "crime"],
        reactions: 2,
      })
      .select();
    if (error) {
      return NextResponse.json(
        { message: "Something went wrong" },
        { status: 500 }
      );
    }

    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

// export async function PUT(_request) {}

// export async function DELETE(_request) {}

// export async function PATCH(_request) {}
