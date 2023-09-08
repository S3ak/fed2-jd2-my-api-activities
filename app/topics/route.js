import { NextResponse } from "next/server";

const topics = new Set();

topics.add("cars");
topics.add("bolas");
topics.add("music");

const otherTopics = ["cars", "bolas", "music"];

// console.log("fooSet size, 1st Time >>>", fooSet.size);

// console.log("Is there a music topic:", fooSet.has("music"));

// fooSet.delete("music");

// console.log("Is there a music topic:", fooSet.has("music"));

export async function GET(request) {
  let searchTopic = request.nextUrl.searchParams.get("topic");

  const topicExists = topics.has(searchTopic);
  // const otherTopicExists = otherTopics.find((topic) => topic === searchTopic);

  let message = "";

  console.log("topics >>>", topics);

  if (topicExists) {
    message = `Topic ${searchTopic} exists`;
  } else {
    message = `No Dice. ${searchTopic} Topic does not exist`;
  }

  return NextResponse.json({ data: message });
}

export async function POST(request) {
  let res = await request.json();
  console.log("request >>>", res.topic);
  topics.add(res.topic);
  console.log("topics >>>", topics);
  return NextResponse.json({ message: "something Happened" });
}

export async function DELETE(request) {
  let res = await request.json();
  console.log("request >>>", res.topic);
  topics.delete(res.topic);
  console.log("topics >>>", topics);

  return NextResponse.json({ message: "Deleted the topic" });
}
