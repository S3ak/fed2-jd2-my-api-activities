import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

function createRandomPost() {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.sentence(),
    body: faker.lorem.paragraph(),
    author: faker.person.firstName("female"),
  };
}

export async function GET(request) {
  const fakePosts = faker.helpers.multiple(createRandomPost, {
    count: 10,
  });

  return NextResponse.json({ posts: fakePosts }, { status: 200 });
}
