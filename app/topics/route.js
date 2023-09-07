import { NextResponse } from "next/server";

const topics = new Set();

topics.add("cars");
topics.add("bolas");
topics.add("music");

// console.log("fooSet size, 1st Time >>>", fooSet.size);

// console.log("Is there a music topic:", fooSet.has("music"));

// fooSet.delete("music");

// console.log("Is there a music topic:", fooSet.has("music"));

export async function GET(request) {
  let searchTopic = request.nextUrl.searchParams.get("topic");

  const topicExists = topics.has(searchTopic);

  let message = "";

  if (topicExists) {
    message = "Topic exists";
  } else {
    message = "No Dice. Topic does not exist";
  }

  return NextResponse.json({ data: message });
}
