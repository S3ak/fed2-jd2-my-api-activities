import { NextResponse } from "next/server";

const usersMap = new Map();

usersMap.set("12", {
  id: 12,
  firstName: "John",
  lastName: "Doe",
});

console.log("userMaps size, 1st Time >>>", usersMap.size);

usersMap.set("30", {
  id: 12,
  firstName: "Kari",
  lastName: "Nordman",
});

console.log("userMaps size, 2nd Time >>>", usersMap.size);

usersMap.delete("12");

console.warn("userMaps size, After delete >>>", usersMap.size);

export async function GET(request) {
  console.warn("request >>>", request.query);
  const { id } = request;
  console.warn("id >>>", id);
  const selectedUser = usersMap.get(id);
  console.log("selectedUser >>>", selectedUser);

  return NextResponse.json(
    { data: JSON.stringify(selectedUser) },
    { status: 200 }
  );
}
