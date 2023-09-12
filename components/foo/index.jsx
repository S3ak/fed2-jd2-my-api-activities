"use client";

import Link from "next/link";

export default function Foo() {
  const names = [
    { firstName: "Ola", lastName: "Nordmann" },
    { firstName: "John", lastName: "Doe" },
    { firstName: "Mario", lastName: "Rossi" },
    { firstName: "Jan", lastName: "Jansen" },
  ];

  // Returns:
  // [ "Ola Nordmann", "John Doe", "Mario Rossi", "Jan Jansen" ]
  const combinedNames = names.map((person) => {
    return `${person.firstName} ${person.lastName}`;
  });

  console.log(combinedNames);

  return (
    <div>
      <h3>List of Names</h3>

      {combinedNames.map((person) => {
        return <div key={person}>{person}</div>;
      })}
    </div>
  );
}
