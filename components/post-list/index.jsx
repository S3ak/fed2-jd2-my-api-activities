"use client";

import Image from "next/image";
import { useState } from "react";

import { fakePosts } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export default function PeopleList() {
  const [posts, setPosts] = useState(fakePosts);
  const [message, setMessage] = useState("");

  function handleOnSubmit(event) {
    event.preventDefault();
    const searchTerm = event.currentTarget.elements.search.value;

    setPosts((prevPeople) => {
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
    setPosts(fakePosts);
    setMessage("");
  }

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <div className="card bg-slate-900">
        <form onSubmit={handleOnSubmit} className="card-body">
          <h3 className="card-title">Look for a post</h3>

          <div className="w-full max-w-xs gap-2 form-control">
            <label htmlFor="search" className="label">
              <span className="label-text">Post</span>
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

      <section className="p-6 rounded-xl grow bg-slate-900">
        <div>
          <h3 className="text-2xl">Results</h3>

          <ul className="flex flex-col gap-4">
            {posts.map(({ id, title, user }) => (
              <li
                key={id}
                className="flex flex-col w-full max-w-xs gap-4 p-2 border-2 rounded-lg cursor-pointer hover:drop-shadow"
              >
                <section className="grow-0">
                  <figure className="flex flex-row items-center justify-start gap-4">
                    <div className="avatar">
                      <span className="w-12 bg-white border rounded-full">
                        <Image
                          src={user.avatar}
                          alt={user.firstName}
                          width={30}
                          height={30}
                          className="rounded-full"
                        />
                      </span>
                    </div>
                    <figcaption className="text-lg font-bold capitalize">
                      {user.firstName}
                    </figcaption>
                  </figure>
                </section>

                <section className="flex grow">
                  <p>{title}</p>
                </section>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
