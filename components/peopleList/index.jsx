"use client";

import { useState } from "react";
import { fakeUsers } from "@/lib/mock-data";
import Image from "next/image";

export default function PeopleList() {
  const [activeUsers, setActiveUsers] = useState(fakeUsers);
  const [message, setMessage] = useState("");

  function handleOnSubmit(event) {
    event.preventDefault();
    const searchTerm = event.currentTarget.elements.search.value;

    setActiveUsers((prevPeople) => {
      const foundPerson = prevPeople.find(({ firstName }) =>
        firstName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

      if (!foundPerson) {
        setMessage(`No person found with name ${searchTerm}`);
        return prevPeople;
      }

      return [foundPerson];
    });
  }

  function resetList() {
    setActiveUsers(fakeUsers);
    setMessage("");
  }

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <div className="card bg-slate-900">
        <form onSubmit={handleOnSubmit} className="card-body">
          <h3 className="card-title">Look for person</h3>

          <div className="w-full max-w-xs gap-2 form-control">
            <label htmlFor="search" className="label">
              <span className="label-text">Person Name</span>
            </label>

            <input
              id="search"
              name="search"
              type="search"
              placeholder="John Wick"
              className="w-full max-w-md input input-bordered"
            />

            {message ?? <p className="alert alert-info">{message}</p>}
          </div>

          <input
            type="submit"
            className="w-full max-w-md mt-2 btn btn-success"
          />
          <input
            type="reset"
            className="w-full max-w-md mt-2 btn btn-warning"
            onClick={resetList}
          />
        </form>
      </div>

      <section className="grow card bg-slate-900">
        <div className="card-body">
          <h3 className="card-title">Results</h3>

          <ul className="flex flex-col gap-4">
            {activeUsers.map(({ firstName, lastName, avatar }) => (
              <li
                key={firstName}
                className="flex items-center w-full max-w-xs gap-2 p-2 border-2 rounded-lg cursor-pointer"
              >
                <div className="avatar">
                  <figure className="w-12 bg-white rounded-full">
                    <Image
                      src={avatar}
                      alt={firstName}
                      width={30}
                      height={30}
                    />
                  </figure>
                </div>

                <p>
                  {firstName} {lastName}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
